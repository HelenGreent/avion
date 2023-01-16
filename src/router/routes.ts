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
      component: () => import('@/views/home/Home.vue'),
      meta: {
        isProtected: true
      }
    },
    {
      name: routeNames.productList,
      path: '/productList',
      component: () => import('@/views/product-list/ProductList.vue'),
      meta: {
        isProtected: true
      }
    },
    {
      name: routeNames.productDetail,
      path: '/productDetail',
      component: () => import('@/views/product-detail/ProductDetail.vue'),
      meta: {
        isProtected: true
      }
    },
    {
      name: routeNames.aboutUs,
      path: '/aboutUs',
      component: () => import('@/views/about-us/AboutUs.vue')
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
