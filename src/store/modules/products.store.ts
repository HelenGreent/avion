import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])
  const allProducts = ref<IProduct[]>([])
  const productCollection = ref<IProduct[]>([])
  const productsListLength = ref(0)
  const searchValue = ref('')

  async function getProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProductsList () {
    allProducts.value = await productsService.getProducts()
  }

  async function getProductCollection (query: string) {
    productCollection.value = await productsService.getProducts(query)
  }

  async function filterProducts (query: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProductsListLength (query: string) {
    const searchedProducts = await productsService.getProducts(query)
    productsListLength.value = searchedProducts.length
  }

  return {
    products,
    allProducts,
    productCollection,
    productsListLength,
    searchValue,
    getProducts,
    getProductsList,
    filterProducts,
    getProductCollection,
    getProductsListLength
  }
})
