conexion = {
  abrir: async () => {
      const Sequelize = require('sequelize')
      const sequelize = new Sequelize('prueba', 'root', 'root', {
          host: 'localhost',
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