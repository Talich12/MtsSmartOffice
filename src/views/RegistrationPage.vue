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
          v-model="name"
          label="Ваше имя"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="surname"
          label="Фамилия"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="patronymic"
          label="Отчество"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="password"
          label="Введите пароль"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="confirm_password"
          label="Повторите пароль"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="phone"
          label="Телефон"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="email"
          label="Email"
        />
        <vs-input
          state="#e30611"
          color="#e30611"
          v-model="state"
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
import axios from "axios";
export default {
  name: "RegistrationPage",
  data() {
    return {
      name: "",
      surname: "",
      patronymic: "",
      password: "",
      confirm_password: "",
      phone: "",
      state: "",
    };
  },
  methods: {
    register() {
      axios.post('http://10.193.141.30:3000/signup', {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        phone: this.phone,
        state: this.state,
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
