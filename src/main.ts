import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase'
import firebaseConfig from './config/firebaseConfig'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router/router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(Vuelidate)
Vue.use(Vuex)

let app: any = ''
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
