import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueSessionStorage from "vue-sessionstorage";

Vue.use(VueSessionStorage); // initialize  vue session storage
Vue.config.productionTip = false;
Vue.prototype.$windowReload = function() {
  // function in prototype to access window js object
  window.location.reload();
};

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
