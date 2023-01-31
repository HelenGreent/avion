import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])
  const product = ref<IProduct>()
  const productCollection = ref<IProduct[]>([])
  const productsListLength = ref(0)
  const searchValue = ref('')

  async function getProducts (query?: string) {
    products.value = await productsService.getProducts(query)
  }

  async function getProduct (productId: string) {
    const products = await productsService.getProducts(`&id=eq.${productId}`)
    product.value = products[0]
  }

  async function getProductCollection (query: string) {
    productCollection.value = await productsService.getProducts(query)
  }

  async function getProductsListLength (query?: string) {
    const searchedProducts = await productsService.getProducts(query)
    productsListLength.value = searchedProducts.length
  }

  return {
    products,
    product,
    productCollection,
    productsListLength,
    searchValue,
    getProducts,
    getProduct,
    getProductCollection,
    getProductsListLength
  }
})
