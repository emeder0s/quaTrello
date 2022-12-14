const conexion = require("../dataBases/mysql");
const CardModel = require("../models/card.model");

const card = {
    /**
     * Inserta un registro en la tabla "cards" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     * 
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const cardM = await CardModel.create(con);
            

        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = card;
