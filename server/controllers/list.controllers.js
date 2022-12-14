const conexion = require("../dataBases/mysql");
const ListModel = require("../models/list.model");

const list = {
    /**
     * Inserta un registro en la tabla "lists" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     * 
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const listM = await ListModel.create(con);
            

        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = list;