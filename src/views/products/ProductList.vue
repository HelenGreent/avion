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
          v-model="selectValue[filterKey]"
          :placeholder="filterKey"
          :name="filterKey"
          clearable
          class="h-[48px] w-[137px] placeholder-violet-color m-2"
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
          v-model="dateValue"
          class="h-[48px] w-[137px] mx-3 m-2"
          placeholder="Date added"
          clearable
        >
          <el-option
            v-for="option in dateOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
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
const productsStore = useProductsStore()

const products = computed(() => productsStore.products)

const selectValue = ref({
  Category: '',
  Type: '',
  Price: '',
  Brand: ''
})
const filters = {
  Category: [
    { value: 'kitchen', label: 'kitchen' },
    { value: 'bedroom', label: 'bedroom' },
    { value: 'office', label: 'office' },
    { value: 'garden', label: 'garden' },
    { value: 'living room', label: 'living room' }
  ],
  Type: [
    { value: 'chair', label: 'chair' },
    { value: 'ceramics', label: 'ceramics' },
    { value: 'crockery', label: 'crockery' },
    { value: 'plant-pot', label: 'plant-pot' },
    { value: 'table', label: 'table' }
  ],
  Price: [
    { value: '0-19', label: '0-19' },
    { value: '20-39', label: '20-39' },
    { value: '40-59', label: '40-59' },
    { value: '60-79', label: '60-79' },
    { value: '80-99', label: '80-99' },
    { value: '100', label: '100+' }
  ],
  Brand: [
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

const dateValue = ref('')

const dateOptions = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  }
]

async function filterProducts () {
  try {
    await productsStore.filterProducts(query)
  } catch (error) {
    console.log(error)
  }
}
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
