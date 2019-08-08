import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import allRoutes from './allRoutes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: allRoutes
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('admin')
  else next()
})

export default router
