import { createRouter, createWebHistory } from "vue-router"
import CreateAccountView from "../views/CreateAccountView.vue"
import UsersProfilesView from "@/views/UsersProfilesView.vue"
import TodoList from "@/views/TodoListView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/createUser",
			component: CreateAccountView,
			name: "Criar Usuario",
		},
		{
			path: "/getUsers",
			component: UsersProfilesView,
			name: "",
		},
		{
			path: "/todoList",
			component: TodoList,
			name: "",
		},
	],
})

export default router
