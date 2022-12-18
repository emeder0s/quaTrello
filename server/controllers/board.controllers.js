const conexion = require("../dataBases/mysql");
const BoardsModel = require("../models/boards.model");
const ListModel = require("../models/lists.model")
// const userboard = require ("./user_boards.controllers");
const user = require("./user.controllers");
const notif = require("./notification.controllers")

const board = {
  /**
   * Función que inserta en la BD un tablero nuevo con id del usuario que la ha creado.
   * @param {JSON} req ej: { name_:"Nombre del tablero", visibility:"Private, Workspace o Public", configuration:"{}", fk_id_workspace:"id"}
   * @param {JSON} res 
   */
  insert: async (req, res) => {
    try {
      const { name_, visibility, configuration, fk_id_workspace } = req.body;
      var fk_id_user = user.getIdFromCookie(req);
      var con = await conexion.abrir();
      const boardM = await BoardsModel.create(con);
      const board = await boardM.findOne({ where: { name_, fk_id_workspace } });
      if (!board) {
        var newBoard = await boardM.create({ name_, visibility, configuration, fk_id_workspace, fk_id_user }); //fk_id_user es la id del usuario que crea el tablero
        const listM = await ListsModel.create(con);
        await listM.create({ name_: "Lista de tareas", fk_id_board: newBoard.dataValues.id });
        await listM.create({ name_: "En proceso", fk_id_board: newBoard.dataValues.id });
        await listM.create({ name_: "Hecho", fk_id_board: newBoard.dataValues.id });
        await notif.mail(req, "creado un", "tablero", newBoard.dataValues, con) // Envia una notificacion a los usuarios que estan suscritos.
        res.json(true);
      } else {
        res.json({ msn: "Existe con ese nombre" });
      }
    } catch (e) {
      console.log(e);
      res.json(false);
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Muestra un tablero a parti de su ID 
   * @param {JSON} req ej:  /show-board/3 => req.params.id = 3
   * @param {JSON} res 
   */
  show: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const boardM = await BoardsModel.create(con);
      const board = await boardM.findOne({ where: { id: req.params.id } });
      res.json(board)
    } catch (e) {
      console.log(e);
      res.json(false);
    } finally {
      await conexion.cerrar(con);
    }
  },
  /**
 * Muestra un tablero a partir de la ID de un espacio de trabajo
 * @param {JSON} req ej:  /show-boardsByWs/3 => req.params.workspace = 3
 * @param {JSON} res 
 */
  showByWs: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const boardM = await BoardsModel.create(con);
      res.json(await boardM.findAll({ where: { fk_id_workspace: req.params.workspace } }))
    } catch (e) {
      console.log(e);
      res.json(false);
    } finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Actualiza el tablero por ID
   * @param {JSON} req ej: req.body = { id, name_, visibility, configuration }  
   * @param {JSON} res 
   */
  update: async (req, res) => {
    try {
      const { id, name_, visibility, configuration } = req.body;
      var con = await conexion.abrir();
      const boardM = await BoardsModel.create(con);
      const board = await boardM.findOne({ where: { id } });
      if (board) {
        await boardM.update({ name_, visibility, configuration }, { where: { id } });
        const newBoard = await boardM.findOne({ where: { id } });
        await notif.mail(req, "modificado un", "tablero", newBoard.dataValues, con) // Envia una notificacion a los usuarios que estan suscritos.
        res.json(true);
      } else {
        res.json({ msn: "no existe" });
      }
    } catch (e) {
      console.log(e);
      res.json(false);
    } finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * 
   * @param {JSON} req ej:  req.body = { id: 3 }
   * @param {JSON} res 
   */
  delete: async (req, res) => {
    try {
      const { id } = req.body;
      var con = await conexion.abrir();
      const boardM = await BoardsModel.create(con);
      await boardM.destroy({ where: { id } });
      res.json(true);
    } catch (e) {
      console.log(e);
      res.json(false);
    } finally {
      await conexion.cerrar(con);
    }
  },


  /**
   * Funcion que devuelve un array con la informacion de todos los tableros de un usuario
   * @param {INTEGER} fk_id_workspace 
   * @param {INTEGER} fk_id_user 
   * @returns ARRAY con datavalues
   */
  getByWorkspaceAndUser: async (fk_id_workspace, fk_id_user) => {
    var con = await conexion.abrir();
    const boardM = await BoardsModel.create(con);
    var boards = await boardM.findAll({ where: { fk_id_workspace, fk_id_user } });
    boards = boards.map(board => { return board.dataValues })
    console.log(boards)
    await conexion.cerrar(con);
    return boards;
  }
};


module.exports = board;