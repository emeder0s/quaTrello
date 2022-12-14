const Users = require("../models/users.model");
const bcyptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sendemail = require("./email.controllers");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const user = {
  /**
   * 
   * @param {json} req 
   * @param {json} res 
   */

  confirmEmail: async (req, res) => {
    const { email } = req.body;

    const infoJwt = jwt.sign({ email }, "m1c4s4", {
      expiresIn: "1000s",
    });
    var sendMail = sendemail.emailToRegister(infoJwt, email);
    res.json(sendMail);
  },

  /**
   * Registra un usuario en la base de datos, Encripta la contraseña.
   * @param {json} req 
   * @param {json} res 
   */
  insert: async (req, res) => {
    try {
      let jwtVerify = jwt.verify(req.params.jwt, "m1c4s4");
      let email = jwtVerify.email;
      const { full_name, bio, pass } = req.body;
      const pass_hash = await bcyptjs.hash(pass, 8);
      const user = await Users.create({ email, full_name, bio, "pass": pass_hash, avatar: "../resources/img/fotoperfil.png", configuration: {} })
      const infoJwt = jwt.sign({ email, "id": user.dataValues.id }, "m1c4s4");
      res.cookie("session", infoJwt);
      res.json("ok");
    } catch (ValidationError) {
      res.json("Email o DNI repetido");
    }
  },

  /**
   * Actualiza un usuario
   * @param {json} req 
   * @param {json} res 
   */
  update: async (req, res) => {
    try {
      const { full_name, bio } = req.body;
      const userr = await Users.findOne({ where: { email } })
      userr.update({ full_name, bio })
      userr.save();
      res.redirect("back");
    } catch (ValidationError) {
      res.json("Email o DNI repetido");
    }
  },

  /**
  * Función que comprueba que un usuario tiene la sesion iniciada recogiendo el Json web token de las cookies.
  * @param {json} req 
  * @param {json} res 
  */

  isAuthorized: (req, res) => {
    var cookies = req.cookies;
    var token = cookies.infoJwt;
    try {
      let jwtVerify = jwt.verify(token, "m1c4s4")
      res.json(jwtVerify)
      return jwtVerify
    } catch (error) {
      res.json("Usuario no loggeado")
    }
  },

  /**
   * Funcion que comprueba email y contraseña de usuario para iniciar sesion, al comprobar que es correcto inserta una cookie en el navegador.
   * @param {json} req 
   * @param {json} res 
   */
  login: async (req, res) => {

    const { email, user_password } = req.body;
    const user = await Users.findOne({ where: { "email": req.body.email } });
    if (user) {
      let hashSaved = user.dataValues.user_password;
      let compare = bcyptjs.compareSync(user_password, hashSaved);
      const infoJwt = jwt.sign({ email }, "m1c4s4");
      if (compare) {
        res.cookie("infoJwt", infoJwt);
        res.json("ok");
      } else {
        res.json("no ok");
      }
    } else {
      res.json("no ok");
    }
  },

  /**
   * Funcion que devuelve un Json Web Token que contiene la dirección de email del usuario para comprobar la identidad al cambiar la contraseña.
   * @param {json} req 
   * @param {json} res 
   */
  getUser: async (req, res) => {
    const { email } = req.body;
    const infoUser = await Users.findOne({ where: { "email": req.body.email } });
    if (infoUser) {
      const infoJwt = jwt.sign({ email }, "m1c4s4", {
        expiresIn: "1000s",
      });
      sendemail.passrequest(infoJwt, email);
      res.json(infoJwt);
    } else {
      res.json(false);
    }
  },

  /**
   * Verifica la validez del json web token, recoge la nueva contraseña introducida por el usuario y la actualiza en la base de datos.
   * @param {json} req 
   * @param {json} res 
   */
  verificar: async (req, res) => {
    let { token, password } = req.body;
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(token, "m1c4s4");
      let email = jwtVerify.email;
      var user_password = await bcyptjs.hash(password, 8);
      const infoUser = await Users.update({ user_password }, { where: { email } });
      sendemail.passconfirm(email);
      res.json(true);
    } catch (error) {
      res.json(false);
    }
  },

  /**
   * Borra a un usuario de la base de datos. Para realizar esta operación el usuario debe confirmar su identidad introduciendo sus credenciales.
   * @param {json} req 
   * @param {json} res 
   */
  delete: async (req, res) => {
    const { email, user_password } = req.body;
    const user = await Users.findOne({ email })
    let hashSaved = user.dataValues.user_password;
    let compare = bcyptjs.compareSync(user_password, hashSaved);
    if (compare) {
      user.destroy();
      res.json("Usuario Borrado")
    } else {
      res.json("no ok")
    }
  },

  /**
   * Función que actualiza el campo isbuyer en la BD del usuario.
   * @param {json} req 
   * @param {json} res 
   */
  isbuyer: async (req, res) => {
    try {
      var logged = await user.isAuthorized(req, res);
      let email = logged.email;
      if (logged) {
        let isbuyer = 1
        const infoUser = await Users.update({ isbuyer }, { where: { email } });
      }
    }
    catch (error) {
      res.json(false);
    }
  },

  /**
   * Función que recoge los datos de contacto y envia los emails tanto al usuario con el feedback como al administrador con el contenido del mensaje.
   * @param {json} req 
   * @param {json} res 
   */
  contact: async (req, res) => {
    const { first_name, last_name, email, text } = req.body;
    sendemail.contact(first_name, last_name, email, text);
    sendemail.contactfeedback(first_name, email);
    res.render("./sentContactForm.ejs")
  },

  /**
   * Devuelve un usuario que se busca por su email.
   * @param {json} req
   * @param {json} res
   */
  returnUserByEmail: async (email) => {
    return await Users.findOne({ where: { "email": email } });
  },

  /** 
   * Devuelve el usuario con res.json
   * @param {json} req 
   * @param {json} res 
   */
  getUserByEmail: async (req, res) => {
    res.json(await Users.findOne({ where: { "email": req.body.email } }));
  },

  /**
   * Log out del usuario - limpia la cookie con el json web token del navegador
   * @param {json} req 
   * @param {json} res 
   */
  logout: (req, res) => {
    var cookies = req.cookies;
    if (cookies) {
      var token = cookies.infoJwt;
      res.json(token);
    }
  }

}

module.exports = user;