const conexion = require("../dataBases/mysql");
const Message = require("../models/messages.model");

const message = {
    insert: async (req, res) => {
        const { text_, fk_id_board, fk_id_user } = req.body;
        let con = await conexion.abrir();
        const msg = await Message.create(con);
        res.json(await msg.create({ text_, fk_id_board, fk_id_user }));
        await conexion.cerrar(con);
    },
    getMsgs: async (req, res) => {
        const { fk_id_board, fk_id_user } = req.body;
        let con = await conexion.abrir();
        const msg = await Message.create(con);
        res.json(await msg.findAll({ where: { fk_id_board, fk_id_user }}));
        await conexion.cerrar(con);
    }
};


module.exports = message;
