
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import AllArticles from '../../components/public/articles/AllArticlesPage/AllArticles.vue'
import SingleArticlePage from '../../components/public/articles/SingleArticlePage/SingleArticlePage.vue'
import AddArticle from '../../components/admin/articles/AddArticle.vue'
import EditArticle from '../../components/admin/articles/EditArticle.vue'
import AddQuote from '../../components/admin/quotes/AddQuote.vue'
import EditQuote from '../../components/admin/quotes/EditQuote.vue'
import Admin from '../../components/admin/main/Admin.vue'
import AdminMenu from '../../components/admin/main/AdminMenu.vue'
import Dodeto from '../../components/public/static/Dodeto.vue'
import SingleQuotePage from '../../components/public/quotes/SingleQuotePage.vue'

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
    component: AllArticles
  },
  {
    path: '/articles/:id',
    name: 'singleArticle',
    component: SingleArticlePage
  },
  {
    path: '/quotes/:id',
    name: 'singleQuote',
    component: SingleQuotePage
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/dodeto',
    name: 'dodeto',
    component: Dodeto
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/articles/add',
        name: 'addArticle',
        component: AddArticle,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/articles/edit/:id',
        name: 'editArticle',
        component: EditArticle,
        meta: {
          requiresAuth: true
        }
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
        path: '/quotes/edit/:id',
        name: 'editQuote',
        component: EditQuote,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '',
        name: 'adminMenu',
        component: AdminMenu,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: 'home'
  }
]
