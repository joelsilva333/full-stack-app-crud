<script setup>
import { ref } from "vue"
import { createUser } from "@/api/users"

const dados = ref({
	name: "",
	surname: "",
	email: "",
})

const formHandler = async () => {
	const name = dados.value.name
	const surname = dados.value.surname
	const email = dados.value.email

	await createUser({ name, surname, email })

	dados.value.name = ""
	dados.value.surname = ""
	dados.value.email = ""
}
</script>

<template>
	<form class="main-container" @submit.prevent="formHandler">
		<h1>Criar Perfil</h1>
		<div class="input-container">
			<div>
				<input
					type="text"
					placeholder="Digite o seu name"
					id="name"
					v-model="dados.name"
				/>

				<input
					type="text"
					placeholder="Digite o seu surname"
					id="surname"
					v-model="dados.surname"
				/>
			</div>

			<div>
				<input
					type="email"
					name=""
					placeholder="Digite o seu email"
					id="email"
					v-model="dados.email"
				/>
			</div>
		</div>
		<button type="submit">Enviar</button>
	</form>
</template>

<style scoped>
.main-container {
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 600px;
	font-family: Arial;
	color: #ffff;
	box-sizing: border-box;

	> h1 {
		font-size: 30px;
		font-weight: 400;
		text-align: center;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 35px;
		box-sizing: border-box;
		width: 100%;

		> div {
			width: 100%;
			display: flex;
			justify-content: space-between;

			> input {
				height: 35px;
				padding: 15px;
				box-sizing: border-box;
				background-color: rgba(255, 255, 255, 0.199);
				color: rgba(255, 255, 255, 0.795);
				border: none;
				border-radius: 8px;
				width: 280px;

				&::placeholder {
					color: rgba(255, 255, 255, 0.795);
				}
			}

			> input[id="email"] {
				width: 100%;
				box-sizing: border-box;
			}

			> input[type="file"] {
				width: 50%;
				margin: 0 auto;
				box-sizing: border-box;
			}
		}
	}

	> button {
		margin-top: 30px;
		width: 120px;
		height: 50px;
		border: none;
		border-radius: 10px;
		color: white;
		background-color: #8a8a8a9a;

		&:hover {
			background-color: #8a8a8ab9;
			cursor: pointer;
		}
	}
}
</style>
