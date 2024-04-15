<script setup lang="js">
import fetchTasks, {createTask, deleteTask, updateTask} from "../api/tasks";
import { onMounted, ref } from 'vue';

const tasks = ref([]);
const reloadTasks = (async () => {
 tasks.value = await fetchTasks();
})

const newTaskTitle = ref('');
const formHandler =  async () => {
	await createTask(newTaskTitle.value)
    newTaskTitle.value = ''
    await reloadTasks()
}

const deleteTaskHandler = async (taskId) => {
    await deleteTask(taskId);
    await reloadTasks();
}

const editMode = ref(null);

const updateTaskHandler = async (task) => {
	await updateTask(task.id, task.title, task.status)
	editMode.value = null;
	await reloadTasks();
}

const cancelEdit = () => {
	editMode.value = null;
}

onMounted(async () => {
	await reloadTasks()
	});
</script>

<template>
  <div class="main">
    <h1>Lista de tarefas</h1>

    <form @submit.prevent="formHandler">
      <input
        type="text"
        v-model="newTaskTitle" />
      <button type="submit">Adicionar Task</button>
    </form>

    <table>
      <thead>
        <th>Título</th>
        <th>Data</th>
        <th>Estado</th>
        <th>Ações</th>
      </thead>
      <tbody>
        <tr
          v-for="task in tasks"
          :key="task.id">
          <td>
            <div v-if="editMode === task.id">
              <input
                type="text"
                v-model="task.title" />
            </div>
            <div v-else>
              {{ task.title }}
            </div>
          </td>
          <td>{{ task.created_at }}</td>
          <td>
            <div v-if="editMode === task.id">
              <select v-model="task.status">
                <option value="pendente">pendente</option>
                <option value="em andamento">em andamento</option>
                <option value="concluída">concluída</option>
              </select>
            </div>
            <div v-else>
              <select
                v-model="task.status"
                disabled>
                <option value="pendente">pendente</option>
                <option value="em andamento">em andamento</option>
                <option value="concluída">concluída</option>
              </select>
            </div>
          </td>
          <td>
            <div v-if="editMode === task.id">
              <button @click="updateTaskHandler(task)">Salvar</button>
              <button @click="cancelEdit">Cancelar</button>
            </div>

            <div v-else>
              <button @click="editMode = task.id">Editar</button>

              <button @click="deleteTaskHandler(task.id)">Excluir</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
}
</style>
