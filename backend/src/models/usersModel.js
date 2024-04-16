const connection = require("./connection")

const getAllUsers = async () => {
	const [users] = await connection.execute("SELECT * FROM users")

	return users
}

const createUser = async (user) => {
	const { name, surname, email } = user

	const query = "INSERT INTO users (name, surname, email) VALUES (?, ?, ?)"

	const [createdUser] = await connection.execute(query, [name, surname, email])

	return { insertId: createdUser.insertId }
}

module.exports = { getAllUsers, createUser }
