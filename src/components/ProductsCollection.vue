<template>
  <section>
    <div class="grid-card">
      <Product
        v-for="product in productsStore.productCollection"
        :key="product.id"
        :product="product"
        :product-detail-route="{
          name: $routeNames.productDetail,
          params: { id: product.id }
        }"
      />
    </div>
    <div class="md:px-6 md:pb-[28px] flex justify-center pb-10">
      <router-link
        to="/productList"
        class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer
        hover:bg-black-color-opacity ease-in-out duration-300"
      >
        <p class="text-violet-color">View collection</p>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>

const productsStore = useProductsStore()
const { getProductCollection } = productsStore

async function getProducts () {
  try {
    await getProductCollection('&category=fts.%27$bedroom%27&offset=0&limit=4')
  } catch (error) {
    console.log(error)
  }
}

onMounted(getProducts)
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
}

@media screen and (max-width: 1024px) {
  .grid-card {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 639px) {
  .grid-card {
    grid-template-columns: 1fr;
  }
}
</style>
