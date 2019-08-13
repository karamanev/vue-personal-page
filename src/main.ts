import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase'
import firebaseConfig from './core/config/firebaseConfig'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './core/router/router'
import vuetify from './core/plugins/vuetify'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(Vuelidate)
Vue.use(Vuex)

let app: any = ''
const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

  export const articlesCollection = db.collection('articles');


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
