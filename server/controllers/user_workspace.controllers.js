const conexion = require("../dataBases/mysql");
const userWorkspacesModel = require("../models/users_workspaces.model");

const userWorkspace = {
  /**
   * Devuelve los registros que tengan el fk_id_user del usuario que se pasa como parámetro
   * Por ello podemos conocer los workspaces del usuario registrado
   * @param {*} fk_id_user  Id de un usuario
   * @returns userWorkspaces 
   */
  getWorkspacesByUser: async (fk_id_user) => {
    var con = await conexion.abrir();
    const userWorkspacesM = await userWorkspacesModel.create(con);
    const userWorkspaces = await userWorkspacesM.findAll({ where: { fk_id_user } });
    await conexion.cerrar(con);
    return userWorkspaces;
  },

  /**
   * Inserta un user_workspace con el usuario, el workspace y el rol del usuario para ese workspace
   * @param {*} role rol del usuario para ese workspace
   * @param {*} fk_id_user id del usuario
   * @param {*} fk_id_workspace id de workspace
   */
  insert: async (role, fk_id_user, fk_id_workspace) => {
    try{
        var con = await conexion.abrir();
        const userWorkspacesM = userWorkspacesModel.create(con);
        await userWorkspacesM.create({ role, fk_id_user, fk_id_workspace });
    }catch(e){
        console.log(e);
    }finally{
      await conexion.cerrar(con);
    }
  },
};

module.exports = userWorkspace;