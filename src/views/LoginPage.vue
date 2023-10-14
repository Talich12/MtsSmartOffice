<template>
  <div
    style="
      display: flex;
      justify-content: center;
      background-color: #ffffff;
      opacity: 0.8;
      background-image: radial-gradient(#e30611 2px, #ffffff 2px);
      background-size: 40px 40px;
    "
  >
    <div class="login-container animate__animated animate__fadeIn">
      <h1>Войти</h1>
      <vs-input
        state="#e30611"
        color="#e30611"
        v-model="value_login"
        label="Ваш логин"
      />
      <vs-input color="#e30611" v-model="value_password" label="Пароль" />
      <vs-button relief color="#e30611" @click="login"> Продолжить </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style>
.login-container .vs-button {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
}

.login-container .vs-input {
  min-width: 450px;
  font-size: 1.5rem;
}

.login-container {
  gap: 1.5rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 100vh;
}

.login-container .vs-button {
  width: 200px;
  margin: 0 auto;
}
</style>
