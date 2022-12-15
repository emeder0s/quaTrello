const conexion = require("../dataBases/mysql");
const workspacesModel = require("../models/workspace.model");
const userWorkspace = require ("./user_workspace.controllers");
const user = require ("./user.controllers");
const board = require ("./board.controllers");

const workspace = {
  getAll: async (req, res) => {
    try {
      var con = await conexion.abrir();
      const workspaceM = await workspacesModel.create(con);
      const workspaces = await workspaceM.findAll();
      res.json(workspaces);
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
        const { name_, visibility, configuration } = req.body;
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con);
        // userWorkspace.checkIfAvailableWorkspace(_name,user.getIdFromCookie(req));   
        const available = await workspace.availableWorkspaceName(name_,req.body.id);  
        if (available) {
            var ws = await workspaceM.create({ name_, visibility, configuration });
            // await userWorkspace.insert("editor",user.getIdFromCookie(req),ws.dataValues.id)
            await userWorkspace.insert("editor",req.body.id,ws.dataValues.id);
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
        const workspaceM = await workspacesModel.create(con);
        const workspace = await workspaceM.findOne({ where: { id:req.params.id } });
        res.json(workspace.dataValues)
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
        const workspaceM = await workspacesModel.create(con);
        const workspace = await workspaceM.findOne({ where: { id } });
        if (workspace) {
            await workspaceM.update({ name_, visibility, configuration },{ where: { id } });
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
        const { id } = req.params.id;
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con);
        await workspaceM.destroy({ where: { id } });
        res.json(true);
    }catch(e){
        console.log(e);
        res.json(false);
    }finally {
      await conexion.cerrar(con);
    }
  },

  getByUser:async (req, res) => {
    try{
       const userWorkspaces = await userWorkspace.getWorkspacesByUser(user.getIdFromCookie(req));
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con);
        const workspaces = await Promise.all(
          userWorkspaces.map(async (userWorkspace) => {
            var ws = await workspaceM.findOne({ where: { id:userWorkspace.fk_id_workspace } });
            ws = ws.dataValues;
            ws.boards = await board.getByWorkspace(userWorkspace.fk_id_workspace,user.getIdFromCookie(req));
            ws.boards = boards;
            return ws;
          })
        )
        res.json(workspaces);
    }catch(e){
        console.log(e);
        res.json(false);
    }
  }, 

  getName: async (id) =>{
      var con = await conexion.abrir();
      const workspaceM = await workspacesModel.create(con);
      const workspace = await workspaceM.findOne({ where: {id} });
      await conexion.cerrar(con);
      return workspace.dataValues.name_;
  },

  availableWorkspaceName: async (name_,id) =>{
    const workspaces = await userWorkspace.getWorkspacesByUser(id);
    const names = await Promise.all(workspaces.map(async w => {
          return await workspace.getName(w.dataValues.id);
      })
    )
    console.log(names);
    return !names.includes(name_);
  }
};

module.exports = workspace;