import type { IPostProduct, IProduct } from '@/types/products.types'

class AdminService {
  getAdminProducts () {
    return useHttp.get<IProduct[]>('rest/v1/products?select=*')
  }

  addProduct (payload: IPostProduct) {
    const { ...rest } = payload
    return useHttp.post('rest/v1/products', rest)
  }
}

export const adminService = new AdminService()
