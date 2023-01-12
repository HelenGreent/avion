import { authRoutesNames } from '@/views/auth/auth.routes'

export const routeNames = {
  home: 'home',
  productList: 'productList',
  productDetail: 'productDetail',
  aboutUs: 'aboutUs',
  ...authRoutesNames
}
