import { createRouter, createWebHashHistory } from 'vue-router'
import ls from 'local-storage'

const routes = [
  {
    path: '/',
    name: 'Ingresar',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = ls.get('user')
  if (authRequired && !loggedIn) {
    return next('/')
  }
  next()
})

export default router
