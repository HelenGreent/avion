import type { IProduct } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProduct[]>([])
  const allProducts = ref<IProduct[]>([])
  const productCollection = ref<IProduct[]>([])
  const productsListLength = ref(0)
  const searchValue = ref('')
  const pending = ref(false)

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
    if (query) {
      const searchedProducts = await productsService.getProducts(`&title=fts.%27${query}%27`)
      productsListLength.value = searchedProducts.length
    } else {
      const allProducts = await productsService.getProducts()
      productsListLength.value = allProducts.length
    }
  }

  // TODO fix payload type
  async function addProduct (payload: any) {
    await productsService.addProduct(payload)
  }
  // TODO fix payload type
  async function updateProduct (id: number | string, payload: any) {
    await productsService.updateProduct(id, payload)
  }

  async function deleteProduct (id: number | string) {
    try {
      pending.value = true
      await productsService.deleteProduct(id)
    } catch (err) {
      console.error(err)
    } finally {
      pending.value = false
    }
  }

  return {
    products,
    allProducts,
    productCollection,
    productsListLength,
    searchValue,
    pending,
    getProducts,
    getProductsList,
    filterProducts,
    getProductCollection,
    getProductsListLength,
    addProduct,
    updateProduct,
    deleteProduct
  }
})
