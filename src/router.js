import Vue from "vue";
import VueRouter from "vue-router";
import Greeting from "./views/GreetingPage.vue";
import Login from "./views/LoginPage.vue";
import Registration from "./views/RegistrationPage.vue";
import Home from "./views/HomePage.vue";
import Chill from "./views/ChillRoomPage"
import Profile from "./views/ProfilePage.vue"

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
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/chill",
    name: "Chill",
    component: Chill,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
