import type { IProduct, IPostProduct, IUpdateProduct } from '@/types/products.types'

class ProductsService {
  getProducts (query = ''): Promise<IProduct[]> {
    return useHttp.get(`rest/v1/products?select=*${query}`)
  }

  addProduct (payload: IPostProduct): Promise<any> {
    return useHttp.post('rest/v1/products', payload)
  }

  updateProduct (id: number | string, payload: IUpdateProduct): Promise<any> {
    return useHttp.patch(`rest/v1/products?id=eq.${id}`, payload)
  }

  deleteProduct (id: number | string): Promise<any> {
    return useHttp.delete(`rest/v1/products?id=eq.${id}`)
  }
}

export const productsService = new ProductsService()
