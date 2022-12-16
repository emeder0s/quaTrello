const conexion = require("../dataBases/mysql");
const workspacesModel = require("../models/workspace.model");
const userWorkspace = require ("./user_workspace.controllers");
const user = require ("./user.controllers");
const board = require ("./board.controllers");

const workspace = {
  /**
   * Devuelve todos los workspaces
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
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
  /**
   * Inserta un workspace en la base de datos, si el usuario no tiene
   * otro workspace con el mismo nombre
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
  insert: async (req, res) => {
    try{
        var { name_, visibility, configuration } = req.body;
        name_= name_.replace("  "," ").trim();
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con); 
        if (await userWorkspace.checkIfAvailableWorkspace(_name,user.getIdFromCookie(req))) {
            var ws = await workspaceM.create({ name_, visibility, configuration });
            await userWorkspace.insert("admin",user.getIdFromCookie(req),ws.dataValues.id)
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

  /**
   * Devuelve los datos de un workspace. Se pasa el id del mismo en los params. 
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
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

  /**
   * Se modifican los datos de un workspace. Se pasa el id del mismo en el body de la petición
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
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

  /**
   * Se elimina un workspace. Se pasa el id del mismo en el body de la petición
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
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

  /**
   * Devuelve todos los workspace, y sus respectivos boards, de un usuario 
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
  getByUser:async (req, res) => {
    try{
       const userWorkspaces = await userWorkspace.getWorkspacesByUser(user.getIdFromCookie(req));
        var con = await conexion.abrir();
        const workspaceM = await workspacesModel.create(con);
        const workspaces = await Promise.all(
          userWorkspaces.map(async (userWorkspace) => {
            var ws = await workspaceM.findOne({ where: { id:userWorkspace.fk_id_workspace } });
            ws = ws.dataValues;
            var boards = await board.getByWorkspace(userWorkspace.fk_id_workspace,user.getIdFromCookie(req));
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

  /**
   * Devuelve el nombre de un workspace
   * @param {int} id identificador del workspace
   * @returns {string}
   */
  getName: async (id) =>{
      var con = await conexion.abrir();
      const workspaceM = await workspacesModel.create(con);
      const workspace = await workspaceM.findOne({ where: {id} });
      await conexion.cerrar(con);
      return workspace.dataValues.name_;
  },
/**
 * Devuelve si un nombre de workspace está disponible o no. Eso depende de si el usuario
 * tiene otro workspace con el mismo nombre que se pasa como parámetro
 * @param {string} name_ nombre del workspace
 * @param {int} id identificador del usuario
 * @returns {boolean}
 */
  availableWorkspaceName: async (name_,id) =>{
    const workspaces = await userWorkspace.getWorkspacesByUser(id);
    const names = await Promise.all(workspaces.map(async w => {
          return await workspace.getName(w.dataValues.id);
      })
    )
    return !names.includes(name_.replace("  "," ").trim());
  }
};

module.exports = workspace;