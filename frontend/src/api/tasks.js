const fetchTasks = async () => {
	try {
		const response = await fetch("http://localhost:3333/tasks")
		const tasks = await response.json()
		return tasks
	} catch (error) {
		console.error("Erro ao pegar tarefas:", error)
	}
}

export const createTask = async (taskData) => {
	const task = { title: taskData }

	try {
		const response = await fetch("http://localhost:3333/tasks", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		})

		const newTask = await response.json()
		return newTask
	} catch (error) {
		console.error("Erro ao adicionar tarefa:", error)
	}
}

export const deleteTask = async (taskId) => {
	const task = { id: taskId }

	try {
		const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		})

		if (response.ok) {
			console.log("Tarefa excluida com sucesso")
		}
	} catch (error) {
		console.error("Erro ao apagar tarefa", error)
	}
}

export const updateTask = async (id, title, status) => {
	const task = { title, status }

	try {
		const response = await fetch(`http://localhost:3333/tasks/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		})

		if (response.ok) {
			console.log("Tarefa atualizada com sucesso")
		}
	} catch (error) {
		console.error("Erro ao atualizar tarefa", error)
	}
}

export default fetchTasks
