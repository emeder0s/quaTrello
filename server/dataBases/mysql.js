conexion = {
  abrir: async () => {
      const Sequelize = require('sequelize')
      const sequelize = new Sequelize('quatrello', 'root', 'root', {
          host: 'localhost',
          timezone: '+01:00',
          dialect: 'mysql',
          port: 3306
      })
      await sequelize.authenticate()
          .then(() => {
              console.log("Abierta Sequelize")
          })
      return sequelize;

  },
  cerrar: async con => {
      await con.close();
      console.log("Cerrada Sequelize");
  }
}


module.exports = conexion;