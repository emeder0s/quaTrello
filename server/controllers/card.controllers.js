const conexion = require("../dataBases/mysql");
const CardsModel = require("../models/cards.model");

const card = {
  /**
   * Inserta una tarjeta en la base de datos
   * @param {json} req la petición 
   * @param {json} res la respuesta de la petición
  */
 insert: async (req, res) => {
   try{
      const notif = require("./notification.controllers")
        const { title,  fk_id_list} = req.body;
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
            const newCard = await cardM.create({ title, fk_id_list });
            await notif.mail(req, "creado una", "tarjeta", newCard.dataValues, con) //envia una notificacion a los usuarios que están suscritos
            res.json(newCard.dataValues);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * Devuelve una tarjeta a partir de su ID 
   * @param {JSON} req la petición
   * @param {JSON} res la respuesta a la petición
   */
    show: async (req, res) => {
      try {
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        const card = await cardM.findOne({ where: { id: req.params.id } });
        res.json(card)
      } catch (e) {
        console.log(e);
        res.json(false);
      } finally {
        await conexion.cerrar(con);
      }
    },

  /**
   * Actualiza una tarjeta
   * @param {json} req la petición 
   * @param {json} res la respuesta de la petición
   */
  update: async (req, res) => {
    try{
      const notif = require("./notification.controllers")
        const { id, title, description_, checklist, configuration, date_ } = req.body;
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        const card = await cardM.findOne({ where: { id } });
        if (card) {
            await cardM.update({ title,description_, checklist, configuration, date_ },{ where: { id } });
            const newCard = await cardM.findOne({ where: { id } });
            await notif.mail(req, "modificado la", "tarjeta", newCard.dataValues, con) //envia una notificacion a los usuarios que están suscritos
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

  /**
   * Borra una tarjeta
   * @param {json} req la petición 
   * @param {json} res la respuesta de la petición
   */
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

  /**
   * Devuelve todas las tarjetas de una lista
   * @param {int} fk_id_list el id de la lista
   * @returns todas las tarjetas de una lista
   */
  getCardsByList: async (fk_id_list) => {
    try{
        var con = await conexion.abrir();
        const cardM = await CardsModel.create(con);
        return await cardM.findAll({ where: { fk_id_list } });
    }catch(e){
        console.log(e);
        return false;
    }finally {
      await conexion.cerrar(con);
    }
  }, 

  /**
   * Cambia el id de la lista al que se mueve la tarjeta
   * @param {json} req la petición
   * @param {json} res la respuesta a la petición
   */
  moveToList: async (req, res) => {
    try{
      const { id, newList } = req.body;
      var con = await conexion.abrir();
      const cardM = await CardsModel.create(con);
      const ws = await cardM.findOne({ where: { id } });
      if (ws) {
          await cardM.update({ fk_id_list:newList}, { where: { id } });
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
  }
};

module.exports = card;