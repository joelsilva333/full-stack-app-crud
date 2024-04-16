const validateFieldName = (request, response, next) => {
	const { body } = request

	if (body.name === undefined) {
		return response
			.status(400)
			.json({ message: "O campo 'name' é obrigatóriio" })
	}

	if (body.name === "") {
		return response.status(400).send({ message: "O 'name' não pode ser vazio" })
	}

	next()
}

const validateFieldSurname = (request, response, next) => {
	const { body } = request

	if (body.surname === undefined) {
		return response
			.status(400)
			.json({ message: "O campo 'surname' é obrigatóriio" })
	}

	if (body.surname === "") {
		return response
			.status(400)
			.send({ message: "O 'surname' não pode ser vazio" })
	}

	next()
}

const validateFieldEmail = (request, response, next) => {
	const { body } = request

	if (body.email === undefined) {
		return response
			.status(400)
			.json({ message: "O campo 'email' é obrigatóriio" })
	}

	if (body.email === "") {
		return response
			.status(400)
			.send({ message: "O 'email' não pode ser vazio" })
	}

	next()
}

module.exports = {
	validateFieldName,
	validateFieldSurname,
	validateFieldEmail,
}
