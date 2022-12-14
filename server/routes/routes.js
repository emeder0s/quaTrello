const router = require("express").Router();
const user = require("../controllers/user.controllers");
const workspace = require("../controllers/workspace.controllers");

//WORKSPACE
router.get("all-workspaces", workspace.getAll);
router.post("insert-workspace", workspace.insert);
router.get("show-workspace", workspace.show);
router.post("update-workspace", workspace.update);
router.delete("delete-workspace", workspace.delete);
// router.get("get-workspaces-by-user", workspace.getByUser);


module.exports = router;
