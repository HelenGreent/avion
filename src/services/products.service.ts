import type { IProduct } from '@/types/products.types'

class ProductsService {
  getProducts (query = ''): Promise<IProduct[]> {
    return useHttp.get(`rest/v1/products?select=*${query}`)
  }

  // TODO fix payload type
  addProduct (payload: any): Promise<any> {
    return useHttp.post('rest/v1/products', payload)
  }

  updateProduct (id: number | string, payload: any): Promise<any> {
    return useHttp.patch(`rest/v1/products?id=eq.${id}`, payload)
  }

  deleteProduct (id: number | string): Promise<any> {
    return useHttp.delete(`rest/v1/products?id=eq.${id}`)
  }
}

export const productsService = new ProductsService()
