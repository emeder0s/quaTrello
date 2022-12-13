const router = require("express").Router();
const user = require("../controllers/user.mysql.controllers");
const tarea = require("../controllers/mongo.controllers/tarea.mongo.controllers");

//! USERS Sequelize

router.get("/getusers", user.getUsers); // Recoge Todos los users
router.post("/insertuser", user.insertUser); // Inserta User
router.delete("/deleteuser", user.deleteUser); // Borra User

//! TAREA Mongoose
router.post("/getareas", tarea.getTareas); // Recoge todas las tareas de 1 User
router.delete("/deletetarea", tarea.deleteTarea); // Borra la tarea
router.delete("/deletealltareas", tarea.deleteAllTareas); // Borra todas las tareas del usuario borrado

router.post("/inserttarea", tarea.insertTarea);  // Inserta Tarea del User
router.put("/updatetareas", tarea.updateTareas); //! (ATENCIÓN) Actualiza la Tarea





module.exports = router;
