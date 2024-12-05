<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.store.';
import { computed } from 'vue';

const router = useRouter()
const userStore = useUserStore()

const login = computed(() => {
	return userStore.user.login !== '' 
		? userStore.user.login 
		: 'Гость'
})
</script>
<template>
	<header class="header">
		<ul class="header-nav">
			<li>
				Привет,
				<b>{{ login }}</b>
			</li>
			<li>
                <button @click="router.push('/login')" class="header-nav__logout-button">Выход</button>
            </li>
		</ul>
	</header>
</template>

<style scoped>
.header {
	height: 50px;
}

.header-nav {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 24px;
}

.header-nav > li {
    font-size: 12px;
}

.header-nav__logout-button {
    cursor: pointer;
    font-size: 12px;
}
</style>
