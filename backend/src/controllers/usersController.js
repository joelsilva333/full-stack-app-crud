const usersModel = require("../models/usersModel")

const getAllUsers = async (request, response) => {
	const users = await usersModel.getAllUsers()
	await response.status(200).json(users)
}

module.exports = {
	getAllUsers,
}
