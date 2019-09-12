import Vue from 'vue'
import Router from 'vue-router'
import * as firebase from 'firebase/app';
import 'firebase/auth';
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
  else next()
})

export default router
