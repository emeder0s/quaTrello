const conexion = require("../dataBases/mysql");
const cardsModel = require("../models/cards.model");

const card = {
  insert: async (req, res) => {
    try{
        const { name_,  fk_id_board } = req.body;
        var con = await conexion.abrir();
        const cardM = await cardsModel.create(con);
        const card = await cardM.findOne({ where: { name_ } });
        if (!card) {
            await cardM.create({ name_, fk_id_board });
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
        const cardM = await cardsModel.create(con);
        const card = await cardM.findOne({ where: { id } });
        if (card) {
            await cardM.update({ name_ },{ where: { id } });
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
        const cardM = await cardsModel.create(con);
        await cardM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  moveFromList: async (req, res) => {
    // try{
    //     const { id } = req.body;
    //     var con = await conexion.abrir();
    //     const cardM = await cardsModel.create(con);
    //     await cardM.destroy({ where: { id } });
    //     res.json(true);
    // }catch(e){
    //     console.log(e);
    //     res.json(false);
    // }finally {
    //   await conexion.cerrar(con);
    // }
  },

  getCardsByList: async (req, res) => {
    // try{
    //     const { id } = req.body;
    //     var con = await conexion.abrir();
    //     const cardM = await cardsModel.create(con);
    //     await cardM.destroy({ where: { id } });
    //     res.json(true);
    // }catch(e){
    //     console.log(e);
    //     res.json(false);
    // }finally {
    //   await conexion.cerrar(con);
    // }
  }
};


module.exports = card;