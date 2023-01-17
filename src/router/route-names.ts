import { authRouteNames } from '@/views/auth/auth.routes'

export const routeNames = {
  rootPage: 'rootPage',

  home: 'home',
  productList: 'productList',
  productDetail: 'productDetail',
  aboutUs: 'aboutUs',
  productBasket: 'productBasket',
  product: 'product',
  ...authRouteNames
}
