<script setup>
import { useUserStore } from '@/stores/user.store.';
import { ref } from 'vue';

const userStore = useUserStore()
const login = ref('')

</script>

<template>
    <section class="login">
        <div class="login-form">
            <h1 class="login-form__title">Войти в панель</h1>
            <fieldset>
                <input v-model="login" type="text" placeholder="Введите логин">
                <input type="password" placeholder="Введите пароль">
            </fieldset>
            <button @click="userStore.login(login)" type="submit">Войти</button>
        </div>
    </section>
</template>

<style scoped>

.login  {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 230px;
}

.login-form__title {
    font-size: 16px;
    font-weight: 500;
}

.login-form > fieldset > input {
    padding: 8px 16px;
    border: 1px solid #D7D7D7;
    border-radius: 8px;
}

.login-form > fieldset > input::placeholder {
    color: #D7D7D7;
    font-size: 12px;
}

.login-form > fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
}

.login-form > button {
    display: inline;
    font-size: 12px;
    padding: 8px 16px;
    background: black;
    border-radius: 8px;
    color: white;
    font-weight: 300;
    cursor: pointer;
}


</style>
