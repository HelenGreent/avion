import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/homePage/home.routes'
import { productListRoutes } from '@/views/productListPage/productListPage.routes'
import { productDetailRoutes } from '@/views/productDetailPage/productDetailPage.routes'
import { aboutUsRoutes } from '@/views/aboutUsPage/aboutUsPage.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...homeRoutes,
  ...productListRoutes,
  ...productDetailRoutes,
  ...aboutUsRoutes
]

export {
  routes
}
