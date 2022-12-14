const sequelize = require("../dataBases/mysql");
const boardsModel = require("../models/boards.model");

const board = {
  getAll: async (req, res) => {
    const boards = await boardsModel.findAll();
    res.json(boards);
  },

  getByWork: async (req, res) => {
    const boards = await boardsModel.findAll();
    res.json(boards);
  },

  insert: async (req, res) => {
    try{
        const { id, name_, visibility, configuration } = req.body;
        const existboard = await boardsModel.findAll({ where: { id } });
        if (existboard == "") {
            await boardsModel.update({ id, name_, visibility, configuration },{ where: { id } });
            res.json(true);
        }else{
            res.json({msn:" ya existe"});
        }
        
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },

  update: async (req, res) => {
    try{
        const { id, name_, visibility, configuration } = req.body;
        await boardsModel.update({ id, name_, visibility, configuration },{ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },

  delete: async (req, res) => {
    try{
        const { id } = req.body;
        await boardsModel.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },
};


module.exports = board;
