const router = require("express").Router();
const user = require("../controllers/user.controllers");
const workspace = require("../controllers/workspace.controllers");

//WORKSPACE
router.get("/all-workspaces", workspace.getAll);
router.post("/insert-workspace", workspace.insert);
router.get("/show-workspace", workspace.show);
router.post("/update-workspace", workspace.update);
router.delete("/delete-workspace", workspace.delete);
// router.get("/get-workspaces-by-user", workspace.getByUser);

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
