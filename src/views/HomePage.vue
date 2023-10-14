<template>
  <div style="display: flex; justify-content: center">
    <div class="HomePageContainer">
      <h1>Добро пожаловать в твой умный офис</h1>
      <HrRed />
      <h2>Тебе стоит войти в аккаунт:</h2>
      <div class="login">
        <vs-button class="button" color="danger" type="filled">Войти</vs-button>
        <vs-button class="button" color="danger" type="filled"
          >Зарегистрироваться</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import HrRed from "@/components/HrRed.vue";

export default {
  name: "App",
  components: { HrRed },
};
</script>

<style>
@import "../assets/fonts.css";

.HomePageContainer {
  width: 50vw;
}

body {
  background-color: black;
}

.login {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
