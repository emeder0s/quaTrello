const conexion = require("../dataBases/mysql");
const Message = require("../models/messages.model");

const message = {
    /**
     * Inserta un registro en la tabla "messages" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     *     text_: "texto...",
     *     fk_id_board: "id_board",
     *     fk_id_user: "id_user"
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            const { text_, fk_id_board, fk_id_user } = req.body;
            var con = await conexion.abrir();
            const msg = await Message.create(con);
            res.json(await msg.create({ text_, fk_id_board, fk_id_user }));
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
            const msg = await Message.create(con);
            res.json(await msg.findAll({ where: { fk_id_board: req.body.fk_id_board } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = message;
