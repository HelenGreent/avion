<template>
  <section>
    <div
      class="xl:bg-[url('@/assets/image/productListHeroMobile.jpg')]
      bg-[url('@/assets/image/productListHero.jpg')] h-[209px] bg-cover"
    >
      <h2 class="font-clash text-4xl text-white-color pl-20 pt-[121px] pb-9">All products</h2>
    </div>
    <div class=" lg:h-[270px] flex justify-evenly h-16 text-violet-color">
      <div class="lg:flex lg:flex-col py-2 space-x-3">
        <select class="h-[48px] w-[137px]">
          <option>Categories</option>
          <option>S</option>
          <option>W</option>
          <option>P</option>
        </select>
        <select class="h-[48px] w-[137px]">
          <option>Product type</option>
          <option>S</option>
          <option>W</option>
          <option>P</option>
        </select>
        <select class="h-[48px] w-[137px]">
          <option>Price</option>
          <option>S</option>
          <option>W</option>
          <option>P</option>
        </select>
        <select class="h-[48px] w-[137px]">
          <option>Brand</option>
          <option>S</option>
          <option>W</option>
          <option>P</option>
        </select>
      </div>

      <div class="flex flex-row py-2">
        <label for="date" class="md:hidden py-[14px] pr-4 font-normal text-sm">Sorting by:</label>
        <select name="date" class="h-[48px] w-[137px] mx-3">
          <option>Date added</option>
          <option>S</option>
          <option>W</option>
          <option>P</option>
        </select>
      </div>
    </div>
    <div class="grid-card">
      <Product v-for="product in products" :key="product.id" :product="product" />
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
const { getProducts } = productsStore
const { products } = storeToRefs(productsStore)

onMounted(getProducts)

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
