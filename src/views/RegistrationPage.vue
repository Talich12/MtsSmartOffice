<template>
  <div>
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
      <div class="register-container animate__animated animate__fadeIn">
        <h1>Регистрация</h1>
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_firstName"
          label="Ваше имя"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_lastName"
          label="Фамилия"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_username"
          label="Отчество"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_password"
          label="Введите пароль"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_confirmPassword"
          label="Повторите пароль"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_phone"
          label="Телефон"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_email"
          label="Email"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="value_staff"
          label="Ваш штат"
        />
        <vs-button relief color="#e30611" @click="register">
          Продолжить
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import MTSLogo from "@/components/MTSLogo.vue";

export default {
  name: "RegistrationPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      // Registration logic goes here
    },
  },
  components: { MTSLogo },
};
</script>

<style>
.register-container .vs-button {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
}

.register-container .vs-input {
  min-width: 450px;
  font-size: 1.5rem;
  border: 1px solid #e30611;
}

.register-container {
  gap: 1.5rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 100vh;
}

.register-container .vs-button {
  width: 200px;
  margin: 0 auto;
}
</style>
