<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.store.';

const router = useRouter()
const userStore = useUserStore()

</script>
<template>
	<header class="header">
		<ul class="header-nav">
			<li>
				Привет,
				<b>{{ userStore.user.login ?? 'Гость'}}</b>
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
