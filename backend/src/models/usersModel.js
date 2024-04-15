const connection = require("./connection")

const getAllUsers = async () => {
	const [users] = await connection.execute("SELECT * FROM users")
	return users
}

module.exports = { getAllUsers }
