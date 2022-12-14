const conexion = require("../dataBases/mysql");
const workspacesModel = require("../models/workspace.model");
const userWorkspace = require ("./user_workspace.controllers");
const user = require ("./user.controllers");

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
        const { id, name_, visibility, configuration } = req.body;
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con);
        const workspace = await workspaceM.findOne({ where: { name_ } });
        if (!workspace) {
            await workspaceM.create({ id, name_, visibility, configuration });
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
        res.json(workspace)
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
        const { id } = req.body;
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

  // getByUser:async (req, res) => {
  //   try{
  //       const workspaces = await userWorkspace.getWorkspacesByUser(user.getIdFromCookie(req));
  //       res.json(workspaces);
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // }
};


module.exports = workspace;