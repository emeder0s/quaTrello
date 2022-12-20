// BD

//CONTROLLERS
const user = require("./user.controllers")
const sendemail = require("./email.controllers");
const user_card = require("./user_card.controllers")
const user_board = require("./user_board.controllers")
const userWorkspace = require("./user_workspace.controllers")
const listC = require("./list.controllers")


//MODELS
const conexion = require("../dataBases/mysql")
const Users = require("../models/users.model");
const WorkspacesModel = require("../models/workspace.model");
const BoardsModel = require("../models/boards.model");
const ListsModel = require("../models/lists.model");
const CardsModel = require("../models/cards.model");
const User_workspacesModel = require("../models/users_workspaces.model");
const User_boardModel = require("../models/users_boards.model");
const User_cardModel = require("../models/users_cards.model");

//FUNCTIONS

const notif = {
    /**
     * Envia un email de notificación con la operación realizada y el elemento sobre el que se ha realizado la operacion. Para recibir la notificación el usuario debe estar suscrito a las notificaciones del tablero donde se produce 
     * @param {JSON} req requerido para obtener la id del usuario que hay guardada en la cookie.
     * @param {STRING} operation ej: "ha creado"
     * @param {STRING} element ej: "lista","tablero","tarjeta"
     * @param {JSON} elementData JSON con los datos del elemento
     * @param {JSON} con conexión a la base de datos para crear los modelos.
     */
    mail: async (req, operation, element, elementData, con) => {
        const user_id_from = user.getIdFromCookie(req);
        const userM = await Users.create(con)
        const userf = await userM.findOne({ attributes: ["full_name"] }, { where: { id: user_id_from } })
        const user_name_from = userf.dataValues.full_name;
        var element_name, element_id, into_name, into_id, into_type, users_to;
        element_id = elementData.id
        if (element == "lista") {
            const boardM = await BoardsModel.create(con)
            const board = await boardM.findOne({ where: { id: elementData.fk_id_board } })
            element_name = elementData.name_
            into_name = board.dataValues.name_
            into_id = board.dataValues.id
            into_type = "tablero"
            users_to = await user_board.getUsersWithNotifTrue(elementData.fk_id_board)
        } else if (element == "tablero") {
            const workspaceM = await WorkspacesModel.create(con)
            const workspace = await workspaceM.findOne({ where: { id: elementData.fk_id_workspace } })
            into_name = workspace.dataValues.name_
            into_id = workspace.dataValues.id
            into_type = "workspace"
            element_name = elementData.name_
            users_to = await userWorkspace.getUsers_WorkspaceWithNotifTrue(elementData.fk_id_workspace)
            
        } else if (element == "tarjeta") {
            const listM = await ListsModel.create(con)
            const list = await listM.findOne({ where: { id: elementData.fk_id_list } })
            into_name =list.dataValues.name_
            into_id =list.dataValues.id
            into_type = "lista"
            element_name = elementData.title
            var fk_id_board = await listC.wichBoard(elementData.fk_id_list)
            users_to = await user_board.getUsersWithNotifTrue(fk_id_board)
        }
        users_to.forEach(user => {
            sendemail.notification(user.email, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type)
        });
    },
    /**
     * Función que envia por email una notificación a un usuario que ha sido añadido a un elemento.
     * @param {JSON} req requerido para obtener la id del usuario que hay guardada en la cookie.
     * @param {STRING} operation ej: "ha creado"
     * @param {STRING} element ej: "lista","tablero","tarjeta"
     * @param {JSON} elementData JSON con los datos del elemento
     * @param {INTEGER} id_user_to Id del usuario al que va dirigida la notificación
     * @param {JSON} con conexión a la base de datos para crear los modelos.
     */
    addUserMail: async (req, operation, element, elementData, id_user_to, con) => {
        console.log({operation, element, elementData})
        const user_id_from = user.getIdFromCookie(req);
        const userM = await Users.create(con)
        const userf = await userM.findOne({ attributes: ["full_name"] }, { where: { id: user_id_from } })
        const user_name_from = userf.dataValues.full_name;
        var element_id, element_name, into_name, into_id, into_type;
        const user_to = await userM.findOne({ where: { id: id_user_to } });
        if (element == "tablero") {
            const workspaceM = await WorkspacesModel.create(con)
            const workspace = await workspaceM.findOne({ where: { id: elementData.fk_id_workspace } })
            element_id = elementData.id
            element_name = elementData.name_
            into_name = workspace.dataValues.name_
            into_id = workspace.dataValues.id
            into_type = "workspace"
            sendemail.notification(user_to.dataValues.email, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type)
        }
        if (element == "tarjeta") {
            const listM = await ListsModel.create(con)
            const list = await listM.findOne({ where: { id: elementData.fk_id_list } })
            element_id = elementData.id
            element_name = elementData.title
            into_id = list.dataValues.id
            into_name = list.dataValues.title
            into_type = "lista"
            sendemail.notification(user_to.dataValues.email, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type)
        }
        if (element == "workspace") {
            console.log(elementData)
            const wsM = await WorkspacesModel.create(con)
            const ws = await wsM.findOne({ where: { id: elementData.fk_id_workspace} })
            element_id = ws.dataValues.id
            element_name = ws.dataValues.name_
            sendemail.notification_workspace(user_to.dataValues.email, user_name_from, operation, element, element_name, element_id)
        }
    },
    /**
     * Función que envia por email una notificación a un usuario cuando se produce un comentario en una tarjeta si está suscrito a notificaciones.
     * @param {JSON} req requerido para obtener la id del usuario que hay guardada en la cookie
     * @param {INTEGER} fk_id_card Id de la tarjeta en la que se ha puesto el comentario
     * @param {TEXT} text_ Contenido del comentario
     * @param {JSON} con conexión a la base de datos para crear los modelos.
     */
    commentToEmail:async (req, fk_id_card, text_, con)=>{
        const cardM= await CardsModel.create(con)
        const card = await cardM.findOne({where:{id:fk_id_card}})
        const user_id_from = user.getIdFromCookie(req);
        const userM = await Users.create(con)
        const userf = await userM.findOne({ attributes: ["full_name"] }, { where: { id: user_id_from } })
        const user_name_from = userf.dataValues.full_name;
        const element_name = card.dataValues.title
        const users_to = await user_card.getUsersWithNotifTrue(fk_id_card)
        await users_to.forEach(user => {
            sendemail.comment(user.email, user_name_from, text_,element_name, fk_id_card)
        });


    }
}


module.exports = notif;
