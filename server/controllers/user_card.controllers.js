const conexion = require("../dataBases/mysql");
const User_cardModel = require("../models/users_cards.model");
const userr = require("./user.controllers");


const user_card = {

    /**
     * Inserta un registro en la tabla "user_cards" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     *  fk_id_card: "id_card",
     *  fk_id_user: "id_user"
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            const notif = require("./notification.controllers")
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            const { fk_id_card, fk_id_user } = req.body;
            const user_card = await user_cardM.create({ fk_id_card, fk_id_user })
            await notif.addUserMail(req, "te ha añadido a la", "tarjeta", user_card.dataValues, fk_id_user, con)
            res.json(true);
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Muestra todos los usuarios que estan en la card junto con su estado de las notificaciones.
     * @param {*} req  ej: 
     * req.body = {
     *     fk_id_card: "id_card"
     * }
     * @param {*} res = [
     *{
     *  "id": 1,
     *  "email": "1",
     *  "full_name": "1",
     *  "bio": null,
     *  "pass": "1",
     *  "avatar": null,
     *  "configuration": null,
     *  "notifications": 0
     *},...
     *]
     */
    get: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            var users_on_card = await user_cardM.findAll({ where: { fk_id_card: req.body.fk_id_card } });
            users_on_card = await Promise.all(users_on_card.map(async user => {
                let u = await userr.getUserbyId(user.fk_id_user);
                u = u.dataValues;
                u["notifications"] = user.dataValues["notifications"];
                return u;
            }));
            res.json(users_on_card);
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Elimina un registro en la tabla "user_card" de la base de datos cuyo
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
            const user_cardM = await User_cardModel.create(con);
            res.json(await user_cardM.destroy({ where: { id: req.body.id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Actualiza el rol de un usuario en un board cuyo id se pasa en el body de la peticion,
     * @param {*} req  ej: 
     * req.body = {
     *     notification: 0/1,
     *     id: "id..."
     * }
     * @param {*} res 
     */
    update: async (req, res) => {
        try {
            const { notifications, id } = req.body;
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            res.json(await user_cardM.update({ notifications }, { where: { id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },
    /**
       * Funcion que permite obtener los usuarios suscritos a notificaciones
       * @param {INTEGER} fk_id_card 
       * @returns Array de usuarios suscritos a notificaciones
     */
    getUsersWithNotifTrue: async (fk_id_card) => {
        try {
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            var users_on_card = await user_cardM.findAll({ where: { fk_id_card, notifications: true } });
            users_on_card = await Promise.all(users_on_card.map(async user => {
                let u = await userr.getUserbyId(user.fk_id_user);
                u = u.dataValues;
                u["notifications"] = user.dataValues["notifications"];
                return u;
            }));
            return users_on_card;
        } catch (error) {
            return error;
        } finally {
            await conexion.cerrar(con);
        }
    }
};

module.exports = user_card;