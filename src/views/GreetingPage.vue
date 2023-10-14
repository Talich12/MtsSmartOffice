import axios from 'axios';

export default {
  name: 'App',
  components: { HrRed },
  data() {
    return {
      email: '',
      name: '',
      surname: '',
      patronymic: '',
      phone: '',
      rating: '',
      state: '',
      password: '',
    };
  },
  methods: {
    goToLoginPage() {
      this.$router.push({ name: "Login" });
    },
    goToRegisterPage() {
      this.$router.push({ name: "Registration" });
    },
    registerUser() {
      axios.post('http://10.193.141.30:3000/signup', {
        email: this.email,
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        phone: this.phone,
        rating: this.rating,
        state: this.state,
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
};



<template>
  <div
    style="display: flex; justify-content: center"
    class="animate__animated animate__fadeIn"
  >
    <MTSLogo></MTSLogo>
    <OpacitySidebar></OpacitySidebar>
    <div class="homepage-container">
      <h1>
        Добро пожаловать в ваш
        <span
          style="
            text-decoration: underline;
            text-decoration-style: dashed;
            color: #e30611;
          "
        >
          умный</span
        >
        офис
      </h1>
      <HrRed />
      <h2>Для начала, стоит войти в аккаунт:</h2>
      <div class="login-buttons-container">
        <vs-button size="xl" block color="#e30611" @click="goToLoginPage">
          Войти
        </vs-button>
        <vs-button
          size="large"
          block
          color="#e30611"
          flat
          style="margin-top: 1rem"
          @click="goToRegisterPage"
        >
          У меня еще нет аккаунта
        </vs-button>
        <vs-button
          size="large"
          block
          icon
          color="#e30611"
          flat
          style="margin-top: 1rem"
          @click="goToHelpPage"
        >
          <i class="bx bx-help-circle" style="margin-right: 0.5rem"></i>
          Мне нужна помощь
        </vs-button>
      </div>
      <p style="bottom: 0">© 2023 ПАО «МТС» Все права защищены</p>
    </div>
  </div>
</template>

<script>
import HrRed from "@/components/HrRed.vue";
import MTSLogo from "@/components/MTSLogo.vue";
import OpacitySidebar from "@/components/OpacitySidebar.vue";

export default {
  name: "App",
  components: { HrRed, MTSLogo, OpacitySidebar },
  methods: {
    goToLoginPage() {
      this.$router.push({ name: "Login" });
    },
    goToRegisterPage() {
      this.$router.push({ name: "Registration" });
    },
  },
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
