const conexion = require("../dataBases/mysql")
const Users = require("../models/users.model");
const bcyptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sendemail = require("./email.controllers");
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

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
    try {
      const { email } = req.body;
      const infoJwt = jwt.sign({ email }, "m1c4s4", {
        expiresIn: "1000s",
      });
      await sendemail.emailToRegister(infoJwt, email);
      res.json(`Email enviado a ${email}`);
    } catch (error) {
      res.json(error)
    }
  },

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
      const usr = await Users.create(con);
      const user = await usr.create({ email, full_name, bio: "", "pass": pass_hash, avatar: "1", configuration: JSON.stringify({}) })
      const infoJwt = jwt.sign({ email, "id": user.dataValues.id }, "m1c4s4");
      res.json({ validation: true, "jwt": infoJwt });
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
    let jwtVerify = jwt.verify(req.cookies.session, "m1c4s4");
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
      const usr = await Users.create(con);
      await usr.update({ full_name, bio }, { where: { id } })
      res.json("Actualización completa");
    } catch (error) {
      res.json(error);
    }
  },

  /**
   * Modifica en la base de datos el campo avatar
   * @param {JSON} req 
   * @param {JSON} res 
   */
  setAvatar: async (req, res) => {
    try {
      let id = this.getIdFromCookie(req)
      const avatar = req.params.avatar;
      var con = await conexion.abrir();
      const usr = await Users.create(con);
      await usr.update({ avatar }, { where: { id } })
      res.json("Actualización completa");
    } catch (error) {
      res.json(error);
    }
  },

  /**
   * Funcion que comprueba email y contraseña de usuario para iniciar sesion, al comprobar que es correcto inserta una cookie en el navegador.
   * @param {json} req 
   * @param {json} res 
   */
  login: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const usr = await Users.create(con);
      const { email, pass } = req.body;
      const user = await usr.findOne({ where: { email } });
      if (user) {
        let hashSaved = user.dataValues.pass;
        let compare = bcyptjs.compareSync(pass, hashSaved);
        const infoJwt = jwt.sign({ email, "id": user.dataValues.id }, "m1c4s4");
        if (compare) {
          res.cookie("session", infoJwt)
          res.json({ validation: true, "jwt": infoJwt });
        } else {
          res.json({ validation: false, "jwt": "" });
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
      const usr = await Users.create(con);
      const { email } = req.body;
      const infoUser = await usr.findOne({ where: { email } });
      if (infoUser) {
        const infoJwt = jwt.sign({ email }, "m1c4s4", {
          expiresIn: "1000s",
        });
        sendemail.passrequest(infoJwt, email);
        res.json(`email enviado a ${email}`);
      } else {
        res.json("La dirección de email no se encuentra en la base de datos");
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
      const usr = await Users.create(con);
      const infoUser = await usr.update({ pass }, { where: { email } });
      sendemail.passconfirm(email);
      res.json("Contraseña actualizada");
    } catch (error) {
      res.json(error);
    } finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * Devuelve en un JSON la informacion de un usuario buscado por ID.
   * @param {JSON} id
   */
  getUserbyId: async (id) => {
    try {
      var con = await conexion.abrir();
      const usr = await Users.create(con);
      return await usr.findOne({ where: { id } });
    } catch (error) {
      return error;
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
      const usr = await Users.create(con);
      res.json(await usr.findOne({ where: { email: req.body.email } }));
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
      const usr = await Users.create(con);
      res.json(await usr.findOne({ where: { id: user.getIdFromCookie(req) } }));
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
      const usr = await Users.create(con);
      res.json(await usr.findAll({
        where: {[Op.or]: [{ email: { [Op.like]: `%${user}%` } },{ full_name: { [Op.like]: `%${user}%` } }]}}))
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
      var id = user.getIdFromCookie(req)
      console.log(id)
      var con = await conexion.abrir();
      const usr = await Users.create(con);
      const usrToDelete = await usr.findOne({ where: { id } })
      if (!usrToDelete) {
        res.json("No existe el usuario")
      } else {
        let hashSaved = usrToDelete.dataValues.pass;
        let compare = bcyptjs.compareSync(req.body.pass, hashSaved);
        if (compare) {
          await usr.destroy({ where: { id } });
          res.json("usuario borrado")
        } else {
          res.json("La contraseña no coincide")
        }
      }
    } catch (error) {
      res.json(error)
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