const conexion = require("../dataBases/mysql");
const CardsModel = require("../models/cards.model");
const notif = require("./notification.controllers")

const card = {
  insert: async (req, res) => {
    try{
        const { title,  fk_id_list} = req.body;
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        const newCard = await cardM.create({ title, fk_id_list });
        //await notif.mail(req, "creado una", "tarjeta", newCard.dataValues, con)
        res.json(newCard.dataValues);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  update: async (req, res) => {
    try{
        const { id, title } = req.body;
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        const card = await cardM.findOne({ where: { id } });
        if (card) {
            await cardM.update({ title,  },{ where: { id } });
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
        const cardM = await CardsModel.create(con);
        await cardM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  getCardsByList: async (req, res) => {
    try{
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        res.json(await cardM.findAll({ where: { fk_id_list: req.params.list} }));
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  }
};


module.exports = card;