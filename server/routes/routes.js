const router = require("express").Router();
const activities = require("../controllers/activities.controllers");
const message = require("../controllers/messages.controllers");
const user = require("../controllers/user.controllers");
const workspace = require("../controllers/workspace.controllers");
const board = require("../controllers/board.controllers");
const card = require("../controllers/card.controllers");
const list = require("../controllers/list.controllers");
const user_board = require("../controllers/user_board.controllers");
const user_card = require("../controllers/user_card.controllers");

//WORKSPACE
router.get("/all-workspaces", workspace.getAll);
router.post("/insert-workspace", workspace.insert);
router.get("/show-workspace/:id", workspace.show);
router.post("/update-workspace", workspace.update);
router.delete("/delete-workspace", workspace.delete);
router.get("/get-workspaces-by-user", workspace.getByUser);

//BOARDS
router.get("/all-boards", board.getAll);
router.post("/insert-board", board.insert);
router.get("/show-board/:id", board.show);
router.post("/update-board", board.update);
router.delete("/delete-board", board.delete);
// router.get("/get-workspaces-by-user", board.getByUser);

//LISTS
router.get("/lists/:board", list.getListsByBoard);
router.post("/insert-list", list.insert);
router.post("/update-list", list.update);
router.delete("/delete-list", list.delete);

//CARDS
router.get("/cards/:list", card.getCardsByList);
router.post("/insert-card", card.insert);
router.post("/update-card", card.update);
router.delete("/delete-card", card.delete);

//MESSAGES
router.post("/insertmessage", message.insert);
router.post("/getmessages", message.getMsgs);

//ACTIVITIES
router.post("/getactivities", activities.get);
router.post("/insertactivities", activities.insert);
router.post("/updateactivities", activities.update);
router.post("/deleteactivities", activities.delete);


//USER
router.post("/confirmEmail",user.confirmEmail);
router.post("/insert-user", user.insert);
router.post("/update-user",user.update);
router.get("/setAvatar/:avatar",user.setAvatar);
router.post("/login", user.login);
router.post("/passToEmail",user.passToEmail);
router.post("/resetPass/:token", user.resetPass);
router.post("/searchUser",user.searchUser);
router.post("/delete-user", user.delete);
router.post("/insert-user-Trapala", user.insertTrapala);
//router.get("/logout", user.logout);

//USER_BOARD
router.post("/insertUserBoard", user_board.insert);
router.post("/getUsersBoard", user_board.get);
router.post("/rolUserSesionBoard", user_board.rolUserSesionBoard);
router.post("/updateRolBoard", user_board.update);
router.post("/deleteUserFromBoard", user_board.delete);

//USER_CARD
router.post("/insertUserCard", user_card.insert);
router.post("/getUsersCard", user_card.get);
router.post("/updateCardNotifications", user_card.update);
router.post("/deleteUserFromCard", user_card.delete);


module.exports = router;
