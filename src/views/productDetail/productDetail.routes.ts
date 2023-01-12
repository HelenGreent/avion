import type { RouteRecordRaw } from 'vue-router'
import ProductDetail from './productDetail.vue'

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
