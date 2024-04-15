const express = require("express")

const router = express.Router()

const tasksController = require("./controllers/tasksControllers")
const taskMiddleware = require("./middlewares/tasksMiddleware")

const usersController = require("./controllers/usersController")

router.get("/tasks", tasksController.getAll)
router.post(
	"/tasks",
	taskMiddleware.validateFieldTitle,
	tasksController.createTask
)
router.delete("/tasks/:id", tasksController.deleteTask)
router.put(
	"/tasks/:id",
	taskMiddleware.validateFieldTitle,
	taskMiddleware.validateFieldStatus,
	tasksController.updateTask
)

// Usuarios

router.get("/users", usersController.getAllUsers)

module.exports = router
