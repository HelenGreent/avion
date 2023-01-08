import type { RouteRecordRaw } from 'vue-router'
import ProductDetail from './productDetailPage.vue'

export const productDetailRouteNames = {
  productDetail: 'productDetail'
}

export const productDetailRoutes: RouteRecordRaw[] = [
  {
    name: productDetailRouteNames.productDetail,
    path: '/productDetail',
    component: ProductDetail
  }
]
