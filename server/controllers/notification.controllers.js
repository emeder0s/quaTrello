// BD

//CONTROLLERS
const user = require("./user.controllers")
const sendemail = require("./email.controllers");
const user_card = require("./user_card.controllers")
const user_board = require("./user_board.controllers")
const user_workspace = require("./user_workspace.controllers")


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
mail: async (req, operation, element, elementData, con)=>{
    const user_id_from = user.getIdFromCookie(req);
    const userM = await Users.create(con)
    const userf = await userM.findOne({attributes:["full_name"]},{where:{id:user_id_from}})
    const user_name_from = userf.dataValues.full_name;
    var element_name;
    var into;
    var users_to;
    if(element == "lista"){
        const boardM = await BoardsModel.create(con)
        const board = await boardM.findOne({ where: { id: elementData.fk_id_board }} )
        element_name = elementData.name_
        into = board.dataValues.name_
        users_to = await user_board.getUsersWithNotifTrue(elementData.fk_id_board)
    } 
    if(element == "tablero") {
        const workspaceM = await WorkspacesModel.create(con)
        const workspace = await workspaceM.findOne({ where: { id: elementData.fk_id_workspace }} )
        into = workspace.dataValues.name_
        element_name = elementData.name_
        users_to = await user_workspace.getUsersWithNotifTrue(elementData.fk_id_workspace)
    }
    if(element == "tarjeta") {
        const listM= await ListsModel.create(con)
        const list = await listM.findOne({ where: { id: elementData.fk_id_list }} )
        into = list.dataValues.title
        element_name = elementData.title
        users_to = await user_list.getUsersWithNotifTrue(elementData.fk_id_list)
    }
    console.log(`${user_name_from} ha ${operation} ${element} ${element_name} en ${into}`)
    console.log(users_to)
    users_to.forEach(user => {
        sendemail.notification(user.email, user_name_from, operation, element, element_name, into)
    });
},  
}


module.exports = notif;
