const conexion = require("../dataBases/mysql");
const ActivitiesModel = require("../models/activities.model")
const user = require("./user.controllers");
const notif = require("./notification.controllers")
const activities = {

    /**
     * Inserta un registro en la tabla "activities" de la base de datos.
     * @param {*} req  ej: 
     * req.body = {
     *     text_: "texto...",
     *     fk_id_card: "id_card"
     * }
     * @param {*} res 
     */
    insert: async (req, res) => {
        try {
            var fk_id_user = user.getIdFromCookie(req);
            const { text_, fk_id_card } = req.body;
            var con = await conexion.abrir();
            const act = await ActivitiesModel.create(con);
            const actvt = await act.create({ text_, fk_id_card, fk_id_user })
            await notif.commentToEmail(req, fk_id_card, text_, con)
            res.json(actvt);
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Muestra todos los comentarios escritos en la "card" cuyo id se pasa 
     * en el body de la peticion.
     * @param {*} req  ej: 
     * req.body = {
     *     fk_id_card: "id_card"
     * }
     * @param {*} res 
     */
    get: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const act = await ActivitiesModel.create(con);
            res.json(await act.findAll({ where: { fk_id_card: req.body.fk_id_card } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Actualiza el texto de un comentario cuyo id se pasa en
     * el body de la peticion.
     * @param {*} req  ej: 
     * req.body = {
     *     text_: "nuevo texto...",
     *     id: "id..."
     * }
     * @param {*} res 
     */
    update: async (req, res) => {
        try {
            const { text_, id } = req.body;
            var con = await conexion.abrir();
            const act = await ActivitiesModel.create(con);
            res.json(await act.update({ text_ }, { where: { id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * Elimina un registro en la tabla "activities" de la base de datos cuyo
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
            const act = await ActivitiesModel.create(con);
            res.json(await act.destroy({ where: { id: req.body.id } }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },
};


module.exports = activities;
