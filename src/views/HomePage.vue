<template>
  <div style="display: flex; justify-content: center">
    <div class="homepage-container">
      <h1>Добро пожаловать в ваш умный офис</h1>
      <HrRed />
      <h2>Для начала, стоит войти в аккаунт:</h2>
      <div class="login-buttons-container">
        <vs-button size="xl" block color="#e30611"> Войти </vs-button>
        <vs-button
          size="xl"
          block
          color="#e30611"
          flat
          style="margin-top: 1rem"
        >
          У меня нет аккаунта
        </vs-button>
      </div>
      <p style="bottom: 0">© 2023 ПАО «МТС» Все права защищены</p>
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

.login-buttons-container {
  margin: 0 auto;
  width: 30vw;
}

.homepage-container {
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 100vh;
}

body {
  background-color: black;
}
</style>
