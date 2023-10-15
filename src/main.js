import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "vuesax/dist/vuesax.css";
import "./assets/fonts.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Vuesax from "vuesax";

Vue.config.productionTip = false;

Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
