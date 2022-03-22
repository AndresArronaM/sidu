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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/user', '/bienes', '/departamentos', '/categoria', '/reportes']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = ls.get('user')
  if (authRequired && !loggedIn) {
    return next('/')
  }
  next()
})

export default router
