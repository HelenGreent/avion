import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export {
  router,
  routes
}

router.beforeEach((to, from, next) => {
  const { accessToken, logout } = useAuthStore()

  if (!accessToken && to.meta.isProtected) {
    next(false)
    return logout()
  }

  next()
})
