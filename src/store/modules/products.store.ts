import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])

  async function getProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function filterProducts (query: string) {
    products.value = await productsService.filterProducts(query)
  }

  async function getMoreProducts () {
    products.value = await productsService.getMoreProducts()
  }

  return {
    products,
    getProducts,
    filterProducts,
    getMoreProducts
  }
})
