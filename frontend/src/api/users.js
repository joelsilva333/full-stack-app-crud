export const fetchUsers = async () => {
	try {
		const response = await fetch("http://localhost:3333/users")
		const users = await response.json()
		return users
	} catch (error) {
		console.error("Erro ao buscar usuários", error)
	}
}

export const createUser = async (dados) => {
	const user = {
		name: dados.name,
		surname: dados.surname,
		email: dados.email,
	}

	console.log(user)

	try {
		const response = await fetch("http://localhost:3333/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})

		const userCreated = await response.json()
		return userCreated
	} catch (error) {
		console.error("Erro ao criar usuário", error)
	}
}
