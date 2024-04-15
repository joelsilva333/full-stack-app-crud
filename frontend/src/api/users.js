export const fetchUsers = async () => {
	try {
		const response = await fetch("http://localhost:3333/users")

		const users = await response.json()
		return users
	} catch (error) {
		console.error("Erros ao pegar usuários", error)
	}
}