
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import Admin from '../../components/admin/Admin.vue'
import AllArticles from '../../components/public/articles/AllArticles.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    name: 'home',
    component: Home
  },
  {
    path: '/articles',
    name: 'articles',
    component: AllArticles
  },  
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
]
