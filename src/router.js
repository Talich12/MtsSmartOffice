import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
