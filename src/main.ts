import Vue from "vue";
import App from "./App.vue";
import feather from "vue-icon";
import router from "./router";
import BootstrapVue from "bootstrap-vue";

// polyfills for older IE, android, and IOS web browsers
import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer";

// global scss
import "./App.scss";

Vue.use(BootstrapVue);
Vue.use(feather, "v-icon");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
