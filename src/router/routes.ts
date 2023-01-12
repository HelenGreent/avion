import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/homePage/home.routes'
import { productListRoutes } from '@/views/productList/productList.routes'
import { productDetailRoutes } from '@/views/productDetail/productDetail.routes'
import { aboutUsRoutes } from '@/views/aboutUsPage/aboutUsPage.routes'
import { authRoutes } from '@/views/auth/auth.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...homeRoutes,
  ...productListRoutes,
  ...productDetailRoutes,
  ...aboutUsRoutes,
  ...authRoutes
]

export {
  routes
}
