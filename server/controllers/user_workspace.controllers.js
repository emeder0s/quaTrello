const conexion = require("../dataBases/mysql");
const userWorkspacesModel = require("../models/users_workspaces.model");

const userWorkspace = {
  /* getWorkspacesByUser: async (id) => {
    var con = await conexion.abrir();
    const userWorkspacesM = userWorkspacesModel.create(con);
    return await userWorkspacesM.findAll({ where: { id } });
  } */
  //   const userWorkspaces = await userWorkspacesModel.findAll();
  //   res.json(userWorkspaces);
  // },

  // insert: async (role, fk_id_user, fk_id_workspace) => {
  //   try{
  //       const userWorkspace = await userWorkspacesModel.findByPk(id);
  //       if (userWorkspace == "") {
  //           await userWorkspacesModel.create({ role, fk_id_user, fk_id_workspace });
  //           res.json(true);
  //       }else{
  //           res.json({msn:" ya existe"});
  //       }
        
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // },

  // show: async (req, res) => {
  //   try{
  //       const { id } = req.body;
  //       const userWorkspace = await userWorkspacesModel.findByPk(id);
  //       res.json(userWorkspace)
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // },

  // update: async (req, res) => {
  //   try{
  //       const { id, name_, visibility, configuration } = req.body;
  //       await userWorkspacesModel.update({ id, name_, visibility, configuration },{ where: { id } });
  //       res.json(true);
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // },

  // delete: async (req, res) => {
  //   try{
  //       const { id } = req.body;
  //       await userWorkspacesModel.destroy({ where: { id } });
  //       res.json(true);
  //   }catch(e){
  //       console.log(e);
  //       res.json(false);
  //   }
  // },

//   getByUser:async (req, res) => {
//     try{
//         const userWorkspaces = await useruserWorkspace.getuserWorkspacesByUser(user.getId());
//         res.json(userWorkspaces);
//     }catch(e){
//         console.log(e);
//         res.json(false);
//     }
//   }
};


module.exports = userWorkspace;