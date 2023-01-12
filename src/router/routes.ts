import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import { authRoutes } from '@/views/auth/auth.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    name: routeNames.home,
    path: '/',
    component: () => import('@/views/home/Home.vue')
  },
  {
    name: routeNames.productList,
    path: '/productList',
    component: () => import('@/views/product-list/ProductList.vue')
  },
  {
    name: routeNames.productDetail,
    path: '/productDetail',
    component: () => import('@/views/product-detail/ProductDetail.vue')
  },
  {
    name: routeNames.aboutUs,
    path: '/aboutUs',
    component: () => import('@/views/about-us/AboutUs.vue')
  },
  ...authRoutes
]

export {
  routes
}
