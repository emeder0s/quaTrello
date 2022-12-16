const conexion = require("../dataBases/mysql");
const User_cardModel = require("../models/user_cards.model");
const userr = require("./user.controllers");

const user_card = {
    
    /**
     * Inserta un registro en la tabla "user_cards" de la base de datos.
     * @param {JSON} req  ej:  req.body = { fk_id_card, fk_id_user }
     * @param {JSON} res 
     */
    insert: async (req, res) => {
        try {
            var con = await conexion.abrir();
            const user_cardM = await User_cardModel.create(con);
            const { fk_id_card, fk_id_user } = req.body;
            res.json(await user_cardM.create({ fk_id_card, fk_id_user }));
        } catch (error) {
            res.json(error);
        } finally {
            await conexion.cerrar(con);
        }
    },

    /**
     * 
     * @param {JSON} req 
     * @param {JSON} res 
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
};

module.exports = user_card;