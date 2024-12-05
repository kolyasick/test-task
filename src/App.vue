<script setup>
import Header from "./components/header.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
	<Header v-if="route.fullPath !== '/login'" />

	
	<RouterView />
	
</template>

<style scoped></style>
