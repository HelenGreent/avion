import { createRouter, createWebHistory, useRouter } from 'vue-router'

import { routeGuard } from './route-guard'
import { routes } from './routes'
import { routeNames } from '@/router/route-names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  router,
  routes,
  routeNames,
  useRouter
}
