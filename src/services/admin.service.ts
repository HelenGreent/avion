import type { IProduct } from '@/types/products.types'

class AdminService {
  getAdminProducts () {
    return useHttp.get<IProduct[]>('rest/v1/products?select=*')
  }

  // addProduct (payload: IProduct) {
  //   const { ...rest } = payload
  //   return useHttp.post('rest/v1/product', rest)
  // }

  // updateProduct (payload: IProduct) {
  //   const { id, ...rest } = payload
  //   return useHttp.patch(`rest/v1/product?id=eq.${id}`, rest)
  // }

  // deleteProduct (payload: IProduct) {
  //   console.log('payload', payload)
  //   return useHttp.delete(`rest/v1/product?id=eq.${payload.id}`)
  // }
}

export const adminService = new AdminService()
