<script setup lang="js">
import fetchTasks from './api/tasks';
fetchTasks()
</script>

<template>
	<header>
		<RouterLink to="/createUser">Criar Perfil</RouterLink>
		<RouterLink to="/getUsers">Ver Perfis</RouterLink>
	</header>

	<div class="app">
		<RouterView />
	</div>
</template>

<style scoped>
header {
	width: 100%;
	height: 50px;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
}

a {
	padding: 10px;
	text-decoration: none;
	color: white;

	&:hover {
		text-decoration: underline;
	}
}

.app {
	width: 100vw;
	height: 80vh;
	display: flex;
	justify-items: center;
	align-items: center;
}
</style>
