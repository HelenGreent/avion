import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})
export {
  router,
  routes
}

router.beforeEach((to, from, next) => {
  const { accessToken } = useAuthStore()

  if (!accessToken && to.meta.isProtected) {
    return ElNotification({
      title: 'You are not logged in 🔐',
      type: 'warning',
      duration: 1500
    }) && next(false)
  }
  next()
})
