const router = require("express").Router();

const msg = require("../controllers/messages.controllers");

const user = require("../controllers/user.controllers");


router.post("/insertmessage", msg.insert);
router.post("/getmessages", msg.getMsgs);





module.exports = router;
