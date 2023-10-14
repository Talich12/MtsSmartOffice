import Vue from "vue";
import VueRouter from "vue-router";
import Greeting from "./views/GreetingPage.vue";
import Login from "./views/LoginPage.vue";
import Registration from "./views/RegistrationPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/greeting",
    name: "Greeting",
    component: Greeting,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
