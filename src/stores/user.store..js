import router from "@/router"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
	state: () => ({
		user: {
			login: '',
		},
	}),
	actions: {
		async login(login) {
			this.user.login = login
			await router.push("/")
		},
	},
})
