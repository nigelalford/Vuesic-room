import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import VueYoutube from "vue-youtube";

Vue.use(VueMaterial);
Vue.use(VueYoutube);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
