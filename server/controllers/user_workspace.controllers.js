const conexion = require("../dataBases/mysql");
const UserWorkspacesModel = require("../models/users_workspaces.model");
const userr = require("./user.controllers");


const userWorkspace = {
  /**
   * Devuelve los registros que tengan el fk_id_user del usuario que se pasa como parámetro
   * Por ello podemos conocer los workspaces del usuario registrado
   * @param {int} fk_id_user  Id de un usuario
   * @returns userWorkspaces 
   */
  getWorkspacesByUser: async (fk_id_user) => {
    var con = await conexion.abrir();
    const userWorkspacesM = await UserWorkspacesModel.create(con);
    const userWorkspaces = await userWorkspacesM.findAll({ where: { fk_id_user } });
    await conexion.cerrar(con);
    return userWorkspaces;
  },

  /**
   * Inserta un user_workspace con el usuario, el workspace y el rol del usuario para ese workspace
   * @param {string} role rol del usuario para ese workspace
   * @param {int} fk_id_user id del usuario
   * @param {int} fk_id_workspace id de workspace
   */
  insert: async (role_, fk_id_user, fk_id_workspace) => {
    try {
      const notif = require("./notification.controllers")
      var con = await conexion.abrir();
      const userWorkspacesM = await UserWorkspacesModel.create(con);
      const user_workspace = await userWorkspacesM.create({ role_, fk_id_user, fk_id_workspace });
      await notif.addUserMail(req, "te ha añadido al", "workspace", user_workspace.dataValues, fk_id_user, con)
    } catch (e) {
      console.log(e);
    } finally {
      await conexion.cerrar(con);
    }
  },
  getUsers_WorkspaceWithNotifTrue: async (fk_id_workspace) => {
    try {
      var con = await conexion.abrir();
      const user_workspaceM = await UserWorkspacesModel.create(con);
      var users_on_workspace = await user_workspaceM.findAll({ where: { fk_id_workspace, notifications: true } });
      users_on_workspace = await Promise.all(users_on_workspace.map(async user => {
        let u = await userr.getUserbyId(user.fk_id_user);
        u = u.dataValues;
        u["notifications"] = user.dataValues["notifications"];
        return u;
      }));
      return users_on_workspace;
    } catch (error) {
      return false;
    } finally {
      await conexion.cerrar(con);
    }
  }
};


module.exports = userWorkspace;