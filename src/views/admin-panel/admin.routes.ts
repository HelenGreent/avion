import type { RouteRecordRaw } from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const adminRouteNames = {
  adminProducts: 'adminProducts',
  addProduct: 'addProduct'
}

export const adminRoutes: RouteRecordRaw = {
  name: adminRouteNames.adminProducts,
  path: '/admin',
  redirect: { name: adminRouteNames.adminProducts },
  component: BlankLayout,
  children: [
    {
      path: '/adminProducts',
      name: adminRouteNames.adminProducts,
      component: () => import('@/views/admin-panel/AdminPanel.vue')
    },
    {
      path: '/adminProducts/:adminProductsId',
      name: adminRouteNames.addProduct,
      component: () => import('@/views/admin-panel/AddProduct.vue'),

      beforeEnter (to, from, next) {
        const { adminProducts } = useAdminStore()
        if (to.params.adminProductsId === 'new' || adminProducts.find(product => product.id === to.params.adminProductsId)) {
          next()
        } else {
          next({ name: adminRouteNames.adminProducts })
        }
      }
    }
  ]
}
