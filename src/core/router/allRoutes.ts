
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import AllArticles from '../../components/public/articles/AllArticlesPage/AllArticles.vue'
import SingleArticle from '../../components/public/articles/SingleArticlePage/SingleArticle.vue'
import AddArticle from '../../components/admin/articles/AddArticle.vue'
import DeleteArticle from '../../components/admin/articles/DeleteArticle.vue'
import AddQuote from '../../components/admin/quotes/AddQuote.vue'
import DeleteQuote from '../../components/admin/quotes/DeleteQuote.vue'
import Admin from '../../components/admin/Admin.vue'

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
    component: SingleArticle
  },
  {
    path: '/quotes/:id',
    name: 'singleQuote',
    component: SingleArticle
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
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
        path: '/articles/delete',
        name: 'deleteArticle',
        component: DeleteArticle,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/articles/edit/:id',
        name: 'editArticle',
        component: DeleteArticle,
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
        path: '/quotes/delete',
        name: 'deleteQuote',
        component: DeleteQuote,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/quotes/edit/:id',
        name: 'editQuote',
        component: DeleteArticle,
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
