const conexion = require("../dataBases/mysql");
const User_boardModel = require("../models/user_boards.model");

const user_board = {
    /**
     * Inserta un registro en la tabla "user_boards" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     * 
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            

        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = user_board;