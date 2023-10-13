<template>
    <div>
        <h1>Добро пожаловать в твой умный офис</h1>
        <hr>
        <h2>Тебе стоит зайти в аккаунт:</h2>
        <div class="login">
            <vs-button class="button" color="danger" type="filled">Войти</vs-button> 
            <vs-button class="button" color="danger" type="filled">Зарегистрироваться</vs-button> 
        </div>
    </div>
</template>

<script>

export default {
name: 'App',
components: {
}
}
</script>

<style>
@import '../assets/fonts.css';

body{
    background-color: black;
}

#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

h1 {
    margin-top: 300px;
    font-family: 'MTSExtended-Bold';
    color: white;
    font-size: 50px;
}

h2{
    margin-top: 30px;
    font-family: 'MTSExtended-Bold';
    color: white;
    font-size: 25px;
}

hr {
    margin: 0 50px;
}

.login {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button{
    margin-top: 10px;
    height: 60px;
    width: 500px;
    font-size: 30px;
    font-family: 'MTSExtended-Medium';
}
</style>