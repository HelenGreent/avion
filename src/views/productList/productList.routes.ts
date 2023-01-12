import type { RouteRecordRaw } from 'vue-router'
import ProductList from './productList.vue'

export const productListRouteNames = {
  productList: 'productList'
}

export const productListRoutes: RouteRecordRaw[] = [
  {
    name: productListRouteNames.productList,
    path: '/productList',
    component: ProductList
  }
]
