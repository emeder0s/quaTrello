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
      const workspaceM = await WorkspacesModel.create(con);
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
   * otro workspace con el mismo nombre y crea un board por defecto
   * @param {json} req  la petición
   * @param {json} res  la respuesta a la petición
   */
  insert: async (req, res) => {
    try{
        var { name_, visibility, configuration } = req.body;
        name_= name_.replace("  "," ").trim();
        var con = await conexion.abrir();
        const workspaceM = await WorkspacesModel.create(con); 
        if (await workspace.availableWorkspaceName(name_,user.getIdFromCookie(req))) {
            var ws = await workspaceM.create({ name_, visibility,last_access: new Date(), configuration });
            ws = ws.dataValues;
            await userWorkspace.insert("admin",user.getIdFromCookie(req),ws.id);
            const defaultboard = await board.insertDefault(ws.id,user.getIdFromCookie(req))
            res.json(ws);
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
        const workspaceM = await WorkspacesModel.create(con);
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
        const workspaceM = await WorkspacesModel.create(con);
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
        const workspaceM = await WorkspacesModel.create(con);
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
        const workspaceM = await WorkspacesModel.create(con);
        const workspaces = await Promise.all(
          userWorkspaces.map(async (userWorkspace) => {
            var ws = await workspaceM.findOne({ where: { id:userWorkspace.fk_id_workspace } });
            ws = ws.dataValues;
            var boards = await board.getByWorkspaceAndUser(userWorkspace.fk_id_workspace,user.getIdFromCookie(req));
            ws.boards = boards;
            return ws;
          })
        )
        if (workspaces.length > 1){
          workspaces.sort(function(a, b) {
            return new Date(b.last_access).getTime() - new Date(a.last_access).getTime();
          });
        }
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
      const workspaceM = await WorkspacesModel.create(con);
      console.log("Esto es getname")
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
    console.log(workspaces)
    const names = await Promise.all(workspaces.map(async w => {
          return await workspace.getName(w.dataValues.fk_id_workspace);
      })
    )
    return !names.includes(name_.replace("  "," ").trim());
  },

  /**
   * Devuelve la fecha con el formato correcto para la inserción en la base de datos
   * @param {string} datetime 
   * @returns la fecha formateada
   */
  formatDate: (datetime) =>{
    var time = datetime.split(",")[1];
    var date = datetime.split(",")[0].split("/");
    return `${date[2]}-${date[1]}-${date[0]}${time}`
  },

/**
 * Modifica la fecha de acceso
 * @param {json} req la petición
 * @param {json} res la respuesta de la petición
 */
  updateLastAccess: async (req, res) => {
    try{
        const { id } = req.body;
        var con = await conexion.abrir();
        const workspaceM = await WorkspacesModel.create(con);
        const ws = await workspaceM.findOne({ where: { id } });
        var last_access = workspace.formatDate(new Date().toLocaleString());
        if (ws) {
            await workspaceM.update({ last_access}, { where: { id } });
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

module.exports = workspace;