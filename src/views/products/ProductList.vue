<template>
  <section>
    <div
      class="xl:bg-[url('@/assets/image/productListHeroMobile.jpg')]
      bg-[url('@/assets/image/productListHero.jpg')] h-[209px] bg-cover"
    >
      <div class="container">
        <h2 class="font-clash text-4xl text-white-color pl-20 pt-[121px] pb-9">All products</h2>
      </div>
    </div>
    <div class="container">
      <div class="lg:hidden flex justify-between h-16 text-violet-color">
        <div class="lg:flex lg:flex-col py-2 space-x-3">
          <el-select
            v-for="(filter, filterKey) in filters"
            :key="filterKey"
            v-model="filterValue[filterKey]"
            :placeholder="filterKey"
            :name="filterKey"
            clearable
            class="ml-8 m-2 placeholder-violet-color"
            @change="filterProducts"
          >
            <el-option
              v-for="option in filter"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>

        <div class="flex flex-row py-2">
          <div class="pt-[6px] pr-4 font-normal text-sm">
            <!-- v-if="user?.user_role === 'admin'" -->
            <el-button
              class="h-[20px] p-4 text-link-color" @click="createNewProduct"
            >
              + Add Product
            </el-button>
          </div>
          <label for="date" class="md:hidden py-[14px] pr-4 font-normal text-sm">Sorting by:</label>
          <el-select
            v-model="queryParams.dateSort"
            class="mr-8 m-2 w-[120px]"
            placeholder="Date added"
            clearable
            @click="sortByDate"
          >
            <el-option
              v-for="{label, value} in dateOptions"
              :key="value"
              :label="label"
              :value="value"
              class="text-violet-color"
            />
          </el-select>
        </div>
      </div>
      <div class="grid-card">
        <template
          v-for="(product, index) in products"
          :key="product.id"
        >
          <Product
            v-loading="pending"
            :product="product"
            :product-detail-route="{
              name: $routeNames.productDetail,
              params: { id: product.id }
            }"
          >
            <!-- v-if="user?.user_role === 'admin'" -->

            <el-button
              size="small"
              type="danger"
              :icon="Delete"
              @click="onDelete(index)"
            />
          </Product>
        </template>
      </div>
      <div v-if="paginationStep != productLength" class="flex justify-center items-center mb-10">
        <div
          class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer
         hover:bg-black-color-opacity ease-in-out duration-300"
        >
          <span class="text-violet-color" @click="getMoreProducts">View collection</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct, IFilterParams, IQueryParams } from '@/types/products.types'
import { Delete } from '@element-plus/icons-vue'

const productsStore = useProductsStore()
// const authStore = useAuthStore()
const { pending, deleteProduct } = productsStore
const router = useRouter()
const { $routeNames } = useGlobalProperties()

// const user = computed(() => authStore.userData)

let paginationStep = 10
const productLength = computed(() => productsStore.productsListLength)

const filterValue = ref<IFilterParams>({
  category: '',
  type: '',
  price: '',
  brand: ''
})
const filters = {
  category: [
    { value: 'kitchen', label: 'kitchen' },
    { value: 'bedroom', label: 'bedroom' },
    { value: 'office', label: 'office' },
    { value: 'garden', label: 'garden' },
    { value: 'living room', label: 'living room' }
  ],
  type: [
    { value: 'chair', label: 'chair' },
    { value: 'ceramics', label: 'ceramics' },
    { value: 'crockery', label: 'crockery' },
    { value: 'plant-pot', label: 'plant-pot' },
    { value: 'table', label: 'table' }
  ],
  price: [
    { value: '0-19', label: '0-19' },
    { value: '20-39', label: '20-39' },
    { value: '40-59', label: '40-59' },
    { value: '60-79', label: '60-79' },
    { value: '80-99', label: '80-99' },
    { value: '100', label: '100+' }
  ],
  brand: [
    { value: 'Henckels', label: 'Henckels' },
    { value: 'Wusthof', label: 'Wusthof' },
    { value: 'Cutco', label: 'Cutco' },
    { value: 'Joseph Joseph', label: 'Joseph Joseph' },
    { value: 'Calphalon', label: 'Calphalon' },
    { value: 'Cuisinart', label: 'Cuisinart' },
    { value: 'KitchenAid', label: 'KitchenAid' },
    { value: 'Viners', label: 'Viners' }
  ]
}

function calculateQuery () {
  const [gt, lt] = filterValue.value.price ? filterValue.value.price.split('-') : []

  const category = filterValue.value.category ? `&category=fts.%27${filterValue.value.category}%27` : ''
  const type = filterValue.value.type ? `&type=fts.%27${filterValue.value.type}%27` : ''
  const price = filterValue.value.price ? lt ? `&price=gt.${gt}&price=lt.${lt}` : `&price=gt.${gt}` : ''
  const brand = filterValue.value.brand ? `&brand=fts.%27${filterValue.value.brand}%27` : ''
  const title = productsStore.searchValue ? `&title=fts.%27${productsStore.searchValue}%27` : ''

  return `${category}${type}${price}${brand}${title}`
}

async function filterProducts () {
  const query = calculateQuery()
  try {
    await productsStore.filterProducts(query)
  } catch (error) {
    console.warn(error)
  }
}

function calculatePaginationStep () {
  if ((productLength.value - paginationStep) >= 10) paginationStep += 10
  else paginationStep = paginationStep + (productLength.value - paginationStep)
  return paginationStep
}

async function getMoreProducts () {
  const query = `${calculateQuery()}&offset=0&limit=${calculatePaginationStep()}`
  try {
    await productsStore.getProducts(query)
  } catch (error) {
    console.log(error)
  }
}

const dateOptions: {label: string; value: string}[] = [
  {
    value: 'Sort Oldest to Newest',
    label: 'Sort Oldest to Newest'
  },
  {
    value: 'Sort Newest to Oldest',
    label: 'Sort Newest to Oldest'
  }
]

const queryParams = ref<IQueryParams>({
  dateSort: ''
})

const products = computed(() => {
  return sortByDate.value.map(product => product)
})

const sortByDate = computed<IProduct[]>(() => {
  const sortArray = [...productsStore.products]
  if (queryParams.value.dateSort === 'Sort Oldest to Newest') {
    sortArray.sort((a, b) => new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
    )
  } else if (queryParams.value.dateSort === 'Sort Newest to Oldest') {
    sortArray.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
    )
  }
  return sortArray
})

async function getProductsListLength () {
  try {
    await productsStore.getProductsListLength(productsStore.searchValue)
  } catch (error) {
    console.log(error)
  }
}

function createNewProduct () {
  router.push({ name: $routeNames.addProduct, params: { adminProductsId: 'new' } })
}

function onDelete (index: number) {
  const currentProductId = products.value.find((_, idx) => idx === index)?.id as string
  deleteProduct(currentProductId)
  // console.log(products.value.length)
  // products.value.splice(currentProductId as any, 1)
  // console.log(products.value.length)
}

onMounted(getProductsListLength)
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 48px;
  padding: 28px 80px;
}

@media screen and (max-width: 1024px) {
  .grid-card {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 0 20px;
    margin-top: 25px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 639px) {
  .grid-card {
    grid-template-columns: 1fr;
  }
}
</style>
