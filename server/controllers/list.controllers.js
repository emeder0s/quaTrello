const conexion = require("../dataBases/mysql");
const listsModel = require("../models/lists.model");

const list = {
  getListsByBoard: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const listM = await listsModel.create(con);
      res.json(await listM.findAll({where:{fk_id_board:req.params.board}}));
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
        const { name_,  fk_id_board } = req.body;
        var con = await conexion.abrir();
        const listM = await listsModel.create(con);
        const list = await listM.findOne({ where: { name_ } });
        if (!list) {
            await listM.create({ name_, fk_id_board });
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

  update: async (req, res) => {
    try{
        const { id, name_ } = req.body;
        var con = await conexion.abrir();
        const listM = await listsModel.create(con);
        const list = await listM.findOne({ where: { id } });
        if (list) {
            await listM.update({ name_ },{ where: { id } });
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
        const listM = await listsModel.create(con);
        await listM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  }

  // getByBoard: 
};


module.exports = list;