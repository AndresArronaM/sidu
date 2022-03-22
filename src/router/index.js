import { createRouter, createWebHashHistory } from 'vue-router'
import ls from 'local-storage'

const routes = [
  {
    path: '/',
    name: 'Ingresar',
    component: () => import('../views/login.vue')
  },
  {
    path: '/user',
    name: 'Control de usuarios',
    component: () => import('../views/user.vue')
<<<<<<< HEAD
=======
  },
  {
    path: '/bienes',
    name: 'Control de bienes',
    component: () => import('../views/bienes.vue')
  },
  {
    path: '/departamentos',
    name: 'Control de departamentos',
    component: () => import('../views/departamentos.vue')
  },
  {
    path: '/categoria',
    name: 'Control de categoria',
    component: () => import('../views/categoria.vue')
  },
  {
    path: '/reportes',
    name: 'Control de reportes',
    component: () => import('../views/reportes.vue')
>>>>>>> 23c10c6858a73306abcda7fdc99eb2b7b2878f02
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
<<<<<<< HEAD
  const publicPages = ['/', '/user']
=======
  const publicPages = ['/', '/user', '/bienes', '/departamentos', '/categoria', '/reportes']
>>>>>>> 23c10c6858a73306abcda7fdc99eb2b7b2878f02
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = ls.get('user')
  if (authRequired && !loggedIn) {
    return next('/')
  }
  next()
})

export default router
