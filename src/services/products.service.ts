import type { IProduct } from '@/types/products.types'

class ProductsService {
  getProducts (query = ''): Promise<IProduct[]> {
    return useHttp.get<IProduct[]>(`rest/v1/products?select=*${query}`)
  }
}

export const productsService = new ProductsService()
