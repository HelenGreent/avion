<template>
  <section>
    <div
      class="xl:bg-[url('@/assets/image/productListHeroMobile.jpg')]
      bg-[url('@/assets/image/productListHero.jpg')] h-[209px] bg-cover"
    >
      <div class="container">
        <h2 class="title pl-20 pt-[121px] pb-9">
          <span class="title-word title-first inline-block font-clash text-4xl text-white-color">
            {{ bannerTitles[route.params.type as string] }}
          </span>
        </h2>
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
      <div v-loading="pending" class="grid-card">
        <template
          v-for="(product, index) in products"
          :key="product.id"
        >
          <Product
            :product="product"
            :product-detail-route="{
              name: $routeNames.productDetail,
              params: { id: product.id }
            }"
          >
            <el-button
              v-if="user?.user_role === 'admin'"
              size="small"
              type="danger"
              :icon="Delete"
              @click="onDelete(index)"
            />
          </Product>
        </template>
      </div>

      <div v-if="paginationStep < productLength" class="flex justify-center items-center mb-10">
        <div
          class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer
         hover:bg-black-color-opacity ease-in-out duration-300"
          @click="getMoreProducts"
        >
          <span class="text-violet-color">View collection</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct, IFilterParams, IQueryParams } from '@/types/products.types'
import { Delete } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const { user } = useAuthStore()

const pending = ref(false)
let paginationStep = 10
const productLength = computed(() => productsStore.productsListLength)

const bannerTitles = {
  all: 'All products',
  'plant-pots': 'Plant pots',
  ceramics: 'Ceramics',
  tables: 'Tables',
  chairs: 'Chairs',
  crockery: 'Crockery'
} as TIndexedObject<string>

const filterValue = ref<IFilterParams>({
  category: '',
  type: '',
  price: '',
  brand: ''
})

const filters = computed(() => {
  const filterChunk = {
    category: [
      { value: 'kitchen', label: 'kitchen' },
      { value: 'bedroom', label: 'bedroom' },
      { value: 'office', label: 'office' },
      { value: 'garden', label: 'garden' },
      { value: 'living room', label: 'living room' }
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
  if (route.params.type === 'all') {
    return {
      type: [
        { value: 'chair', label: 'chair' },
        { value: 'ceramics', label: 'ceramics' },
        { value: 'crockery', label: 'crockery' },
        { value: 'plant-pot', label: 'plant-pot' },
        { value: 'table', label: 'table' }
      ],
      ...filterChunk
    }
  } else {
    return filterChunk
  }
})

function calculateQuery () {
  const [gt, lt] = filterValue.value.price ? filterValue.value.price.split('-') : []

  const category = filterValue.value.category ? `&category=fts.%27${filterValue.value.category}%27` : ''
  const type = filterValue.value.type ? `&type=fts.%27${filterValue.value.type}%27` : ''
  const price = filterValue.value.price ? lt ? `&price=gt.${gt}&price=lt.${lt}` : `&price=gt.${gt}` : ''
  const brand = filterValue.value.brand ? `&brand=fts.%27${filterValue.value.brand}%27` : ''
  const title = productsStore.searchValue ? `&title=fts.%27${productsStore.searchValue}%27` : ''

  return `${category}${type}${price}${brand}${title}`
}

watch(() => route.params.type as string, async (val) => {
  val !== 'all' ? filterValue.value.type = val : filterValue.value.type = ''
  try {
    await filterProducts()
  } catch (error) {
    console.log(error)
  }
})

async function filterProducts () {
  paginationStep = 10
  try {
    pending.value = true
    await productsStore.getProducts(`${calculateQuery()}&offset=0&limit=10`)
    await productsStore.getProductsListLength(calculateQuery())
  } catch (error) {
    console.warn(error)
  } finally {
    pending.value = false
  }
}

async function getMoreProducts () {
  paginationStep += 10
  const query = `${calculateQuery()}&offset=0&limit=${paginationStep}`
  try {
    pending.value = true
    await productsStore.getProducts(query)
  } catch (error) {
    console.log(error)
  } finally {
    pending.value = false
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

async function onDelete (index: number) {
  try {
    pending.value = true
    const currentProductId = products.value.find((_, idx) => idx === index)?.id as string
    await productsService.deleteProduct(currentProductId)
    router.go(0)
  } catch (err) {
    console.error(err)
  } finally {
    pending.value = false
  }
}

async function getProducts () {
  try {
    pending.value = true
    await Promise.all([
      productsStore.getProducts(`${calculateQuery()}&offset=0&limit=10`),
      productsStore.getProductsListLength(productsStore.searchValue)
    ])
  } catch (error) {
    console.log(error)
  } finally {
    pending.value = false
  }
}

onMounted(getProducts)
</script>

<style lang="scss" scoped>
.title {
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .title-word{
    opacity: 0;
    filter: blur(4px);
  }

  .title-first {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
}
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
