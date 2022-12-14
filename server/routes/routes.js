const router = require("express").Router();
const msg = require("../controllers/messages.controllers");

router.post("/insertmessage", msg.insert);
router.post("/getmessages", msg.getMsgs);





module.exports = router;
