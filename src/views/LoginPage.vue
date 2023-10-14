<template>
  <div
    style="
      display: flex;
      justify-content: center;
      background-color: #ffffff;
      background-image: radial-gradient(#e30611 4px, #ffffff 2px);
      background-size: 10rem 10rem;
    "
  >
    <MTSLogo></MTSLogo>
    <div class="login-container animate__animated animate__fadeIn">
      <h1>Войти</h1>
      <vs-input
        state="#e30611"
        color="#e30611"
        v-model="email"
        label="Ваш email"
      />
      <vs-input color="#e30611" v-model="password" label="Пароль" />
      <vs-button relief color="#e30611" @click="login"> Продолжить </vs-button>
    </div>
  </div>
</template>

<script>
import MTSLogo from "@/components/MTSLogo.vue";
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post('http://10.193.141.30:3000/login', {
        email: this.email,
        password: this.password,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
  components: { MTSLogo },
};
</script>

<style>
.login-container .vs-button {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
}

.login-container .vs-input {
  border: 1px solid #e30611;
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
