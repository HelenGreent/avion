import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])
  const productCollection = ref<IProduct[]>([])
  const productsListLength = ref(0)
  const searchValue = ref('')

  async function getProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProductCollection (query: string) {
    productCollection.value = await productsService.getProducts(query)
  }

  async function filterProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProductsListLength (query: string) {
    if (query) {
      const searchedProducts = await productsService.getProducts(`&title=fts.%27${query}%27`)
      productsListLength.value = searchedProducts.length
    } else {
      const allProducts = await productsService.getProducts()
      productsListLength.value = allProducts.length
    }
  }

  return {
    products,
    productCollection,
    productsListLength,
    searchValue,
    getProducts,
    filterProducts,
    getProductCollection,
    getProductsListLength
  }
})
