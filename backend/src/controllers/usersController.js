const usersModel = require("../models/usersModel");

const getAllUsers = async (_request, response) => {
  const users = await usersModel.getAllUsers();
  await response.status(200).json(users);
};

const createUser = async (request, response) => {
  const createdUser = await usersModel.createUser(request.body);
  await response.status(201).json(createdUser);
};

module.exports = {
  getAllUsers,
  createUser,
};
