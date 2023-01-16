import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import { authRoutes } from '@/views/auth/auth.routes'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
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
    {
      name: routeNames.productBasket,
      path: '/productBasket',
      component: () => import('@/views/product-basket/ProductBasket.vue')
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  authRoutes,
  defaultLayoutRoutes

]

export {
  routes,
  defaultLayoutRoutes
}
