const sequelize = require("../dataBases/mysql");
const workspacesModel = require("../models/workspace.model");
const userWorkspace = require ("./user_workspace.controllers");
const user = require ("./user.controllers");

const workspace = {
  getAll: async (req, res) => {
    const workspaces = await workspacesModel.findAll();
    res.json(workspaces);
  },

  insert: async (req, res) => {
    try{
        const { id, name_, visibility, configuration } = req.body;
        const workspace = await workspacesModel.findOne({ where: { name_ } });
        if (workspace == "") {
            let con = await conexion.abrir();
            const msg = await Message.create(con);
            await workspacesModel.create({ id, name_, visibility, configuration },{ where: { id } });
            res.json(true);
        }else{
            res.json({msn:"Existe con ese nombre"});
        }
        
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },

  show: async (req, res) => {
    try{
        const { id } = req.body;
        const workspace = await workspacesModel.findByPk(id);
        res.json(workspace)
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },

  update: async (req, res) => {
    try{
        const { id, name_, visibility, configuration } = req.body;
        const workspace = await workspacesModel.findByPk(id);
        if (workspace == "") {
            await workspacesModel.update({ id, name_, visibility, configuration },{ where: { id } });
            res.json(true);
        }else{
            res.json({msn:" ya existe"});
        }
        
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },


  delete: async (req, res) => {
    try{
        const { id } = req.body;
        await workspacesModel.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }
  },

//   getByUser:async (req, res) => {
//     try{
//         const workspaces = await userWorkspace.getWorkspacesByUser(user.getId());
//         res.json(workspaces);
//     }catch(e){
//         console.log(e);
//         res.json(false);
//     }
//   }
};


module.exports = workspace;