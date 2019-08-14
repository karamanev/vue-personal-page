
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import AllArticles from '../../components/public/articles/AllArticles.vue'
import AddArticle from '../../components/admin/articles/AddArticle.vue'

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
    path: '/articles/all',
    name: 'allArticles',
    component: AllArticles,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/articles/add',
    name: 'addArticle',
    component: AddArticle,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: AllArticles
  }
]
