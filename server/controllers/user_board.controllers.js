const conexion = require("../dataBases/mysql");
const User_boardModel = require("../models/users_boards.model");
const userr = require("./user.controllers");

const user_board = {
    /**
     * Inserta un registro en la tabla "user_boards" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     *     role_: "admin",
     *     fk_id_board: 3,
     *     fk_id_user: 8
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            const { role_, fk_id_board, fk_id_user } = req.body;
            res.json(await user_boardM.create({ role_, fk_id_board, fk_id_user }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },


    insertUserSesion: async (id_board) => {
        try {
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            return await user_boardM.create({ role_: "admin", fk_id_board: id_board, fk_id_user: userr.getIdFromCookie(req) });
        } catch (error) {
            return error;
        } finally {
            await conexion.cerrar(con);
        }
    },


    /**
     * Muestra todos los usuarios que estan en el tablero junto con su rol en ese tablero.
     * @param {*} req  ej: 
     * req.body = {
     *     fk_id_board: "id_board"
     * }
     * @param {*} res = [
    {
        "id": 1,
        "email": "1",
        "full_name": "1",
        "bio": null,
        "pass": "1",
        "avatar": null,
        "configuration": null,
        "role_": "admin"
    },...
]
     */
    get: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            let users_on_board = await user_boardM.findAll({ where: { fk_id_board: req.body.fk_id_board } });
            users_on_board = await Promise.all(users_on_board.map(async user => {
                let u = await userr.getUserbyId(user.fk_id_user);
                u = u.dataValues;
                u["role_"] = user.dataValues["role_"];
                return u;
            }));
            res.json(users_on_board);
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * 
     * @param {*} req  ej: 
     * req.body = {
     *     role_: "nuevo role...",
     *     id: "id..."
     * }
     * @param {*} res 
     */
    update: async (req, res) => {
        try {
            const { role_, id } = req.body;
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            res.json(await user_boardM.update({ role_ }, { where: { id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Elimina un registro en la tabla "user_board" de la base de datos cuyo
     * id se pasa en el body de la peticion.
     * @param {*} req  ej: 
     * req.body = {
     *     id: "id..."
     * }
     * @param {*} res 
     */
    delete: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_boardM = await User_boardModel.create(con);
            res.json(await user_boardM.destroy({ where: { id: req.body.id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },
};

module.exports = user_board;