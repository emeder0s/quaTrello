let notif = require("./notification.controllers");
const conexion = require("../dataBases/mysql");
const ListsModel = require("../models/lists.model");

const card = require("./card.controllers");

const list = {
  /**
   * Devuelve todas las listas de un tablero
   * @param {json} req la petición
   * @param {json} res la repuesta de la petición
   */
  getListsByBoard: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const listM = await ListsModel.create(con);
      var lists = await listM.findAll({where:{fk_id_board:req.params.board}});
      var result = await Promise.all(
        lists.map(async (list) => {
          list = list.dataValues;
          var cards = await card.getCardsByList(list.id);
          cards = cards.map(card => card.dataValues);
          list.cards = cards;
          return list;
        })
      )
      res.json(lists);
    } catch (e) {
      console.log(e);
      res.json(false);
    }
    finally {
      await conexion.cerrar(con);
    }
  },

  /**
   * Inserta una lista en un tablero
   * @param {json} req  la petición 
   * @param {json} res  la respuesta a la petición 
   */
  insert: async (req, res) => {
    try{
        const { name_,  fk_id_board } = req.body;
        var con = await conexion.abrir();
        const listM = await ListsModel.create(con);
        const list = await listM.findOne({ where: { name_ ,fk_id_board} });
        if (!list) {
            var newList = await listM.create({ name_, fk_id_board });
            await notif.mail(req, "creado una", "lista", newList.dataValues, con)
            res.json({data:newList.dataValues});
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
  
  /**
   * Actualiza una lista. El id se pasa en el body.
   * @param {json} req  la petición 
   * @param {json} res la resputa a la petición 
   */
  update: async (req, res) => {
    try{
        const { id, name_ } = req.body;
        var con = await conexion.abrir();
        const listM = await ListsModel.create(con);
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

  /**
   * Borra una lista. El id se pasa en el body.
   * @param {json} req  la petición 
   * @param {json} res la resputa a la petición 
   */
  delete: async (req, res) => {
    try{
        const { id } = req.body;
        var con = await conexion.abrir();
        const listM = await ListsModel.create(con);
        await listM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },
  /**
   * Funcion que devuelve el tablero al que pertenece una lista
   * @param {INTEGER} id 
   */
  wichBoard:  async (id) => {
    try{
        var con = await conexion.abrir();
        const listM = await ListsModel.create(con);
        const list = await listM.findOne({ where: { id } });
        console.log(list)
        return list.dataValues.fk_id_board;
    }catch(error){
        return error
    }finally {
      await conexion.cerrar(con);
    }
  },
};


module.exports = list;