import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import firebaseConfig from './core/config/firebaseConfig'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './core/router/router'
import vuetify from './core/plugins/vuetify'
import EventBus from './core/eventBus/eventBus'
import './core/filters/filters'
import Loader from '../src/components/common/alerts/Loader.vue'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(firestorePlugin)
Vue.use(Vuelidate)

let app;
const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

export const articlesCollection = db.collection('articles')
export const quotesCollection = db.collection('quotes')

Vue.component('loader', Loader)

Vue.prototype.$bus = EventBus

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
