const conexion = require("../dataBases/mysql");
const User_cardModel = require("../models/user_cards.model");

const user_card = {
    
    /**
     * Inserta un registro en la tabla "user_cards" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     * 
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            

        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = user_card;