import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])

  async function getProducts () {
    products.value = await productsService.getProducts()
  }

  async function filterProducts (query: string) {
    products.value = await productsService.filterProducts(query)
  }

  return {
    products,
    getProducts,
    filterProducts
  }
})
