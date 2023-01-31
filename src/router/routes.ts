import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/router/route-names'
import { authRoutes } from '@/views/auth/auth.routes'
import { adminRoutes } from '@/views/admin-panel/admin.routes'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    {
      name: routeNames.home,
      path: '/',
      component: () => import('@/views/home/Home.vue')
    },
    {
      name: routeNames.productList,
      path: '/productList/:type',
      component: () => import('@/views/products/ProductList.vue')
    },
    {
      name: routeNames.productDetail,
      path: '/productDetail/:id',
      component: () => import('@/views/products/ProductDetail.vue')
    },
    {
      path: '/productDetail/*',
      name: routeNames.error,
      component: () => import('@/views/error-page/ErrorPage.vue')
    },
    {
      name: routeNames.aboutUs,
      path: '/aboutUs',
      component: () => import('@/views/about-us/AboutUs.vue')
    },
    {
      name: routeNames.productBasket,
      path: '/productBasket',
      component: () => import('@/views/product-basket/ProductBasket.vue'),
      meta: {
        isProtected: true
      }
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  authRoutes,
  adminRoutes,
  defaultLayoutRoutes

]

export {
  routes,
  defaultLayoutRoutes
}
