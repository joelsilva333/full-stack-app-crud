<script setup>
import { fetchUsers } from "@/api/users"
import { onMounted, ref } from "vue"

const users = ref([])

onMounted(async () => {
	users.value = await fetchUsers()
})
</script>

<template>
	<div class="main">
		<table v-for="user in users" :key="user.id">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Sobrenome</th>
					<th>Email</th>
					<th>Foto</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{ user.name }}</td>
					<td>{{ user.surname }}</td>
					<td>{{ user.email }}</td>
					<td><img :src="user.photo" /></td>
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
	color: white;
}
</style>
