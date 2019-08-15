
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import AllArticles from '../../components/public/articles/AllArticles.vue'
import AddArticle from '../../components/admin/articles/AddArticle.vue'
import AddQuote from '../../components/admin/quotes/AddQuote.vue'

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
    path: '/articles/all',
    name: 'allArticles',
    component: AllArticles,
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
  },
  {
    path: '/quotes/add',
    name: 'addQuote',
    component: AddQuote,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/quotes/:id',
    name: 'quote',
    component: AllArticles
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
  path: '*',
    redirect: 'home'
  }
]
