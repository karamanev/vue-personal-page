import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import firebaseConfig from './config/firebaseConfig'

Vue.config.productionTip = false;
Vue.use(Vuelidate);

const config = firebaseConfig;
firebase.initializeApp(config);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
