const router = require("express").Router();
const activities = require("../controllers/activities.controllers");
const message = require("../controllers/messages.controllers");
const user = require("../controllers/user.controllers");
const workspace = require("../controllers/workspace.controllers");
const board = require("../controllers/board.controllers");
const list = require("../controllers/list.controllers");

//WORKSPACE
router.get("/all-workspaces", workspace.getAll);
router.post("/insert-workspace", workspace.insert);
router.get("/show-workspace/:id", workspace.show);
router.post("/update-workspace", workspace.update);
router.delete("/delete-workspace", workspace.delete);
// router.get("get-workspaces-by-user", workspace.getByUser);

//BOARDS
router.get("/all-boards", board.getAll);
router.post("/insert-board", board.insert);
router.get("/show-board/:id", board.show);
router.post("/update-board", board.update);
router.delete("/delete-board", board.delete);
// router.get("get-workspaces-by-user", board.getByUser);

//LISTS
router.get("/all-lists", list.getAll);
router.post("/insert-list", list.insert);
router.post("/update-list", list.update);
router.delete("/delete-list", list.delete);

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
router.post("/login", user.login);
router.post("/passToEmail",user.passToEmail);
router.post("/resetPass/:token", user.resetPass);
router.post("/searchUser",user.searchUser);
router.delete("/delete-user", user.delete);
router.get("/logout", user.logout);


module.exports = router;
