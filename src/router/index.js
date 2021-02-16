import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/boke',
        name: 'boke',
        component: () => import('../views/boke')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      },
      {
        path: '/kge',
        name: 'kge',
        component: () => import('../views/kge')
      },
      {
        path: '/yuncun',
        name: 'yuncun',
        component: () => import('../views/yuncun')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register')
  },
  {
    path: '/userallinfo',
    name: 'userallinfo',
    component: () => import('../views/userallinfo')
  }
]

const router = new VueRouter({
  routes
})

export default router
