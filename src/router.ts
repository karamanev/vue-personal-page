import Vue from "vue";
import Router from "vue-router";
import Home from "./public/home/Home.vue";
import Register from './admin/authentication/Register.vue'
import Login from './admin/authentication/Login.vue'


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },    {
      path: "/register",
      name: "register",
      component: Register
    }


  ]
});
