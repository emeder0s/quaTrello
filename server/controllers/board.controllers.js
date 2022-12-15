const conexion = require("../dataBases/mysql");
const boardsModel = require("../models/boards.model");
// const userboard = require ("./user_boards.controllers");
const user = require ("./user.controllers");

const board = {
  getAll: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const boardM = await boardsModel.create(con);
      const boards = await boardM.findAll();
      res.json(boards);
    } catch (e) {
      console.log(e);
      res.json(false);
    }
    finally {
      await conexion.cerrar(con);
    }
  },

  insert: async (req, res) => {
    try{
        const { name_, visibility, configuration, fk_id_workspace, fk_id_user } = req.body;
        var con = await conexion.abrir();
        const boardM = await boardsModel.create(con);
        const board = await boardM.findOne({ where: { name_ } });
        if (!board) {
            await boardM.create({ name_, visibility, configuration, fk_id_workspace, fk_id_user });
            res.json(true);
        }else{
            res.json({msn:"Existe con ese nombre"});
        }
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  show: async (req, res) => {
    try{
        var con = await conexion.abrir();
        const boardM = await boardsModel.create(con);
        const board = await boardM.findOne({ where: { id:req.params.id } });
        res.json(board)
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  update: async (req, res) => {
    try{
        const { id, name_, visibility, configuration } = req.body;
        var con = await conexion.abrir();
        const boardM = await boardsModel.create(con);
        const board = await boardM.findOne({ where: { id } });
        if (board) {
            await boardM.update({ name_, visibility, configuration },{ where: { id } });
            res.json(true);
        }else{
            res.json({msn:"no existe"});
        }
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  delete: async (req, res) => {
    try{
        const { id } = req.body;
        var con = await conexion.abrir();
        const boardM = await boardsModel.create(con);
        await boardM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  // getByUser:async (req, res) => {
  //   try{
  //       const boards = await userboard.getboardsByUser(user.getId());
  //       res.json(boards);
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // }
};


module.exports = board;