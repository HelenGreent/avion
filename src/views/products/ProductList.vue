<template>
  <section>
    <div
      class="xl:bg-[url('@/assets/image/productListHeroMobile.jpg')]
      bg-[url('@/assets/image/productListHero.jpg')] h-[209px] bg-cover"
    >
      <h2 class="font-clash text-4xl text-white-color pl-20 pt-[121px] pb-9">All products</h2>
    </div>
    <div class="lg:h-[270px] flex justify-evenly h-16 text-violet-color">
      <div class="lg:flex lg:flex-col py-2 space-x-3">
        <el-select
          v-for="(filter, filterKey) in filters"
          :key="filter"
          v-model="filterValue[filterKey]"
          :placeholder="filterKey"
          :name="filterKey"
          clearable
          class="h-[48px] w-[137px] placeholder-violet-color m-2"
          @click="filterProducts"
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
          class="h-[48px] w-[137px] mx-3 m-2"
          placeholder="Date added"
          clearable
          @click="sortByDate"
        >
          <el-option
            v-for="{label, value} in dateOptions"
            :key="value"
            :label="label"
            :value="value"
          />
        </el-select>
      </div>
    </div>
    <div class="grid-card">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        :product-detail-route="{
          name: $routeNames.productDetail,
          params: { id: product.id }
        }"
      />
    </div>
    <div class="flex justify-center items-center mb-10">
      <div class="md:w-full md:mx-6 w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer">
        <router-link to="/" class="text-violet-color hover:underline">View collection</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct, IFilterParams, IQueryParams } from '@/types/products.types'

const productsStore = useProductsStore()

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

  return `${category}${type}${price}${brand}`
}

async function filterProducts () {
  const query = calculateQuery()
  try {
    await productsStore.filterProducts(query)
  } catch (error) {
    console.warn(error)
  }
}

const dateOptions: {label: string; value: string}[] = [
  {
    value: 'Sort Oldest to Newest',
    label: 'Sort Oldest to Newest (A->Z)'
  },
  {
    value: 'Sort Newest to Oldest',
    label: 'Sort Newest to Oldest (Z->A)'
  }
]

const queryParams = ref<IQueryParams>({
  dateSort: ''
})

const products = computed(() => {
  return sortByDate.value.map(product => ({
    id: product.id,
    title: product.title,
    src: product.image_url,
    image_url: product.image_url,
    alt: product.title,
    price: product.price,
    brand: product.brand,
    category: product.category,
    created_at: product.created_at,
    depth: product.depth,
    description: product.description,
    diameter: product.diameter,
    height: product.height,
    length: product.length,
    qty: product.qty,
    type: product.type,
    width: product.width
  }))
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
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 28px;
  padding: 28px 80px;
  margin-bottom: 48px;
}

@media screen and (max-width: 1024px) {
  .grid-card {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 639px) {
  .grid-card {
    grid-template-columns: 1fr;
  }
}
</style>
