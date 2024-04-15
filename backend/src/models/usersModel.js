const connection = require("./connection");

const getAllUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users");

  return users;
};

const createUser = async (user) => {
  const { name, surname, email, photo } = user;

  const query =
    "INSERT INTO users (name, surname, email, photo) VALUES (?, ?, ?, ?)";

  const [createdUser] = await connection.execute(query, [
    name,
    surname,
    email,
    photo,
  ]);

  return { insertId: createdUser.insertId };
};

module.exports = { getAllUsers, createUser };
