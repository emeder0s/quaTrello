const sequelize = require("../dataBases/mysql");
const usersModel = require("../models/users.model");

const user = {
  getUsers: async (req, res) => {
    const allUsers = await usersModel.findAll();
    res.json(allUsers);
  },
  insertUser: async (req, res) => {
    const { userName, email, pass } = req.body;
    const existUser = await usersModel.findAll({ where: { email } });
  if (existUser == "") {
      const insert = await usersModel.create({ userName, email, pass });
      res.json(insert);
    } else {
      res.json({msn:"existe"});
    }
  },
  deleteUser: async (req, res) => {
    const { email } = req.body;
    const deleteUser = await usersModel.destroy({ where: { email } });
    res.json(deleteUser);
  },
};


module.exports = user;
