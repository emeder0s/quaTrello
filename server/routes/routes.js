const router = require("express").Router();
const activities = require("../controllers/activities.controllers");
const message = require("../controllers/messages.controllers");
const workspace = require("../controllers/workspace.controllers");

//WORKSPACE
router.get("/all-workspaces", workspace.getAll);
router.post("/insert-workspace", workspace.insert);
router.get("/show-workspace", workspace.show);
router.post("/update-workspace", workspace.update);
router.delete("/delete-workspace", workspace.delete);
// router.get("get-workspaces-by-user", workspace.getByUser);

//MESSAGES
router.post("/insertmessage", message.insert);
router.post("/getmessages", message.getMsgs);

//ACTIVITIES
router.post("/getactivities", activities.get);
router.post("/insertactivities", activities.insert);
router.post("/updateactivities", activities.update);
router.post("/deleteactivities", activities.delete);

module.exports = router;
