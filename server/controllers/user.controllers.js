const conexion = require("../dataBases/mysql")
const Users = require("../models/users.model");
const bcyptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sendemail = require("./email.controllers");

/* Abrir y cerrar conexion

var con = await conexion.abrir();
const Usr = await Users.create(con);
await conexion.cerrar(con); 

*/


const user = {
  /**
   * Envia al email un enlace de acceso al registro.
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
/**
   * Registra un usuario en la base de datos, Encripta la contraseña.
   * @param {json} req 
   * @param {json} res 
   */
insert: async (req, res) => {
  try {
    let jwtVerify = jwt.verify(req.body.jwt, "m1c4s4");
    let email = jwtVerify.email;
    const { full_name, pass } = req.body;
    const pass_hash = await bcyptjs.hash(pass, 8);
    var con = await conexion.abrir();
    const Usr = await Users.create(con);
    const user = await Usr.create({ email, full_name, bio: "", "pass": pass_hash, avatar: "1", configuration: JSON.stringify({}) })
    const infoJwt = jwt.sign({ email, "id": user.dataValues.id }, "m1c4s4");
    res.cookie("session", infoJwt);
    res.json({validation:true, "jwt": infoJwt});
  } catch (error) {
    res.json(error);
  } finally {
    await conexion.cerrar(con);
  }
},
  /**
   * Devuelve la id del usuario que tiene sesion iniciada
   * @param {json} req 
   * @param {json} res 
   * @returns 
   */
  getIdFromCookie: (req) => {
    let jwtVerify = jwt.verify(req.cookies.session, "m1c4s4")
    return jwtVerify.id
  },

  /**
   * Actualiza un usuario
   * @param {json} req 
   * @param {json} res 
   */
  update: async (req, res) => {
    try {
      let id = this.getIdFromCookie(req)
      const { full_name, bio } = req.body;
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      res.json(await Usr.update({ full_name, bio }, { where: { id } }));
    } catch (ValidationError) {
      res.json("Email o DNI repetido");
    }
  },



  /**
   * Funcion que comprueba email y contraseña de usuario para iniciar sesion, al comprobar que es correcto inserta una cookie en el navegador.
   * @param {json} req 
   * @param {json} res 
   */
  /**
   * Funcion que comprueba email y contraseña de usuario para iniciar sesion, al comprobar que es correcto inserta una cookie en el navegador.
   * @param {json} req 
   * @param {json} res 
   */
  login: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      const { email, pass } = req.body;
      const user = await Usr.findOne({ where: { email } });
      if (user) {
        let hashSaved = user.dataValues.pass;
        let compare = bcyptjs.compareSync(pass, hashSaved);
        const infoJwt = jwt.sign({ email, "id": user.dataValues.id }, "m1c4s4");
        if (compare) {
          res.cookie("session", infoJwt);
          res.json({validation:true, "jwt": infoJwt});
        } else {
          res.json({validation:false, "jwt": ""});
        }
      } else {
        res.json("no existe el usuario");
      }
    } catch (error) {
      res.json(error)
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Funcion que devuelve un Json Web Token que contiene la dirección de email del usuario para comprobar la identidad al cambiar la contraseña.
   * @param {json} req 
   * @param {json} res 
   */
  passToEmail: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      const { email } = req.body;
      const infoUser = await Usr.findOne({ where: { email } });
      if (infoUser) {
        const infoJwt = jwt.sign({ email }, "m1c4s4", {
          expiresIn: "1000s",
        });
        sendemail.passrequest(infoJwt, email);
        res.json(infoJwt);
      } else {
        res.json(infoUser.dataValues);
      }
    } catch (error) {
      res.json(error)
    } finally {
      await conexion.cerrar(con)
    }
  },


  /**
   * Verifica la validez del json web token, recoge la nueva contraseña introducida por el usuario y la actualiza en la base de datos.
   * @param {json} req ejemplo: req.body={"token":{"email":"ejemplo@ejemplo.es"}}
   * @param {json} res 
   */
  resetPass: async (req, res) => {
    let { password } = req.body;
    var token = req.params.token
    try {
      // Verifica el token donde está el email del usuario
      let jwtVerify = jwt.verify(token, "m1c4s4");
      let email = jwtVerify.email;
      var pass = await bcyptjs.hash(password, 8);
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      const infoUser = await Usr.update({ pass }, { where: { email } });
      sendemail.passconfirm(email);
      res.json(true);
    } catch (error) {
      res.json(error);
    } finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * Devuelve en un JSON la informacion de un usuario buscado por ID.
   * @param {JSON} req ejemplo: req.body={id:"1"}
   * @param {JSON} res 
   */
  getUserbyId: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      res.json(await Usr.findOne({ where: { id: req.body.id } }));
    } catch (error) {
      res.json(error);
    } finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * Devuelve usuario buscado por email
   * @param {*} req 
   * @param {*} res 
   */
  getUserbyEmail: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      res.json(await Usr.findOne({ where: { email: req.body.email } }));
    } catch (error) {
      res.json(error);
    } finally {
      await conexion.cerrar(con);
    }
  },
/**
 * Devuelve el usuario que tiene la sesion iniciada a partir de la cookie
 * @param {JSON} req 
 * @param {JSON} res 
 */
  getUserbyCookie: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      res.json(await Usr.findOne({ where: { id: this.getIdFromCookie(req) } }));
    } catch (error) {
      res.json(error);
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Devuelve una lista de usuarios que coincidan con la busqueda. Admite tanto Nombre de usuario como e-mail.
   * @param {*} req 
   * @param {*} res 
   */
  searchUser: async (req, res) => {
    try {
      var { user } = req.body;
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      if (user.includes("@")) {
        res.json(await Usr.findAll({ where: { email: { [Op.like]: req.body.user } } }))
      } else {
        res.json(await Usr.findAll({ where: { full_name: { [Op.like]: req.body.user } } }))
      }
    } catch (error) {
      res.send(error)
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Borra a un usuario de la base de datos. Para realizar esta operación el usuario debe confirmar su identidad introduciendo sus credenciales.
   * @param {json} req 
   * @param {json} res 
   */
  delete: async (req, res) => {
    try {
      const { pass } = req.body;
      let id = this.getIdFromCookie(req)
      var con = await conexion.abrir();
      const Usr = await Users.create(con);
      const user = await Usr.findOne({ where: { id } })
      let hashSaved = user.dataValues.pass;
      let compare = bcyptjs.compareSync(pass, hashSaved);
      if (compare) {
        user.destroy();
        res.json({ msg: "Usuario Borrado" })
      } else {
        res.json({ msg: "La contraseña no coincide" })
      }
    } catch (error) {
      res.json(error)
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Log out del usuario - limpia la cookie con el json web token del navegador
   * @param {json} req 
   * @param {json} res 
   */
  logout: (req, res) => {
    var cookies = req.cookies;
    if (cookies) {
      var token = cookies.session;
      res.json(token);
    }
  }

}

module.exports = user;