
import Home from '../../components/public/home/Home.vue'
import Register from '../../components/admin/authentication/Register.vue'
import Login from '../../components/admin/authentication/Login.vue'
import AllArticles from '../../components/public/articles/AllArticles.vue'
import AddArticle from '../../components/admin/articles/AddArticle.vue'
import AddQuote from '../../components/admin/quotes/AddQuote.vue'

export default [
  {
    path: '/login', 
    component: Login
  },

  {
    path: '/register', 
    component: Register
  },

  {
    path: '/articles', 
    component: AllArticles, 
    children: [
      { path: 'add', 
        component: AddArticle,
        meta: {
          requiresAuth: true
        }
      },
      { path: ':id', component: AddArticle },
      { path: ':id/edit', 
        component: AddArticle,
        meta: {
          requiresAuth: true
        }
      }
    ],
  },

  {
    path: '/quotes', 
    component: AllArticles, 
    children: [
      { path: 'add', 
        component: AddQuote,
        meta: {
          requiresAuth: true
        }
      },
      { path: ':id', component: AddQuote },
      { path: ':id/edit', 
        component: AddQuote,
        meta: {
          requiresAuth: true
        }
      }
    ],
  },

  {
    path: '*', component: Home
  }
]
