import { createRouter, createWebHistory } from 'vue-router'
import main from '@/pages/main.vue'
import login from '@/pages/login.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "main",
			component: main,
		},
		{
			path: "/login",
			name: "login",
			component: login,
		},
	],
})

export default router
