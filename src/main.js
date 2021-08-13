import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueLoading from "vuejs-loading-plugin";
import loader from "vue-ui-preloader";

Vue.use(loader);

Vue.use(VueLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
