import { authRouteNames } from '@/views/auth/auth.routes'
import { adminRouteNames } from '@/views/admin-panel/admin.routes'

export const routeNames = {
  rootPage: 'rootPage',

  home: 'home',
  productList: 'productList',
  productDetail: 'productDetail',
  aboutUs: 'aboutUs',
  productBasket: 'productBasket',
  ...authRouteNames,
  ...adminRouteNames
}
