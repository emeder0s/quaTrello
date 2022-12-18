// BD

//CONTROLLERS
const user = require("./user.controllers")
const sendemail = require("./email.controllers");
const user_card = require("./user_card.controllers")
const user_board = require("./user_board.controllers")
const userWorkspace = require("./user_workspace.controllers")


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
    mail: async (req, operation, element, elementData, con) => {
        const user_id_from = user.getIdFromCookie(req);
        const userM = await Users.create(con)
        const userf = await userM.findOne({ attributes: ["full_name"] }, { where: { id: user_id_from } })
        const user_name_from = userf.dataValues.full_name;
        var element_name, into, users_to;
        if (element == "lista") {
            const boardM = await BoardsModel.create(con)
            const board = await boardM.findOne({ where: { id: elementData.fk_id_board } })
            element_name = elementData.name_
            into = board.dataValues.name_
            users_to = await user_board.getUsersWithNotifTrue(elementData.fk_id_board)
        }
        if (element == "tablero") {
            const workspaceM = await WorkspacesModel.create(con)
            const workspace = await workspaceM.findOne({ where: { id: elementData.fk_id_workspace } })
            into = workspace.dataValues.name_
            element_name = elementData.name_

            users_to = await userWorkspace.getUsers_WorkspaceWithNotifTrue(elementData.fk_id_workspace)
        }
        if (element == "tarjeta") {
            const listM = await ListsModel.create(con)
            const list = await listM.findOne({ where: { id: elementData.fk_id_list } })
            into = list.dataValues.title
            element_name = elementData.title
            users_to = await user_card.getUsersWithNotifTrue(elementData.fk_id_card)
        }
        users_to.forEach(user => {
            sendemail.notification(user.email, user_name_from, operation, element, element_name, into)
        });
    },
    addUserMail: async (req, operation, element, elementData, id_user_to, con) => {
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
            into_type = "list"
            sendemail.notification(user_to.dataValues.email, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type)
        }
        if (element == "workspace") {
            const boardM = await BoardsModel.create(con)
            const board = await boardM.findOne({ where: { id: elementData.fk_id_board } })
            element_id = elementData.id
            element_name = elementData.name_
            into_id = board.dataValues.id
            into_name = board.dataValues.name_
            sendemail.notification_workspace(user_to.dataValues.email, user_name_from, operation, element, element_name, element_id)
        }
    },
    commentToEmail:async (req, fk_id_card, text_, con)=>{
        const cardM= await CardsModel.create(con)
        const card = await cardM.findOne({where:{id:fk_id_card}})
        const user_id_from = user.getIdFromCookie(req);
        const userM = await Users.create(con)
        const userf = await userM.findOne({ attributes: ["full_name"] }, { where: { id: user_id_from } })
        const user_name_from = userf.dataValues.full_name;
        const element_name = card.dataValues.title
        const users_to = await user_card.getUsersWithNotifTrue(fk_id_card)
        console.log("entra")
        console.log(element_name)
        console.log(users_to)
        await users_to.forEach(user => {
            sendemail.comment(user.email, user_name_from, text_,element_name, fk_id_card)
        });


    }
}


module.exports = notif;
