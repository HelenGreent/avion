import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])
  const productsListLength = ref(0)

  async function getProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function filterProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProductsListLength () {
    const allProducts = await productsService.getProducts()
    productsListLength.value = allProducts.length
  }

  return {
    products,
    productsListLength,
    getProducts,
    filterProducts,
    getProductsListLength
  }
})
