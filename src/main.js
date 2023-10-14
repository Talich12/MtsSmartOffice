import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Vuesax from "vuesax";
import "./assets/fonts.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "vuesax/dist/vuesax.css";

Vue.config.productionTip = false;

Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
