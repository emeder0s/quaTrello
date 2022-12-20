const conexion = require("../dataBases/mysql");
const MessageModel = require("../models/messages.model");
const user = require("../controllers/user.controllers");

const message = {
    /**
     * Inserta un registro en la tabla "messages" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     *     text_: "texto...",
     *     fk_id_board: "id_board"
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var fk_id_user = user.getIdFromCookie(req);
            const { text_, fk_id_board, user_name } = req.body;
            var con = await conexion.abrir();
            const msg = await MessageModel.create(con);
            res.json(await msg.create({ text_, fk_id_board, fk_id_user, user_name }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Muestra todos los mensajes del chat perteneciente al board cuyo
     * id se pasa en el body de la peticion.
     * @param {*} req ej: 
     * req.body = {
     *     fk_id_board: "id_board"
     * }
     * @param {*} res 
     */
    getMsgs: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const msg = await MessageModel.create(con);
            res.json(await msg.findAll({ where: { fk_id_board: req.body.fk_id_board } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = message;
