<template>
  <section>
    <div class="grid-card">
      <!-- <Product
        v-for="product in products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      /> -->
    </div>
    <div class="md:px-6 md:pb-[28px] flex justify-center pb-10">
      <div class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer">
        <router-link to="/" class="text-violet-color hover:underline">View collection</router-link>
      </div>
    </div>
  </section>
</template>

<!-- <script lang="ts" setup>
import { ref } from 'vue'

interface IProduct {
  id: number
  img: string
  title: string
  price: string
}

const products = ref<IProduct[]>([
  {
    id: 1,
    img: '/src/assets/image/product1.jpg',
    title: 'The Dandy chair',
    price: '£250'
  },
  {
    id: 2,
    img: '/src/assets/image/product2.jpg',
    title: 'Rustic Vase Set',
    price: '£115'
  },
  {
    id: 3,
    img: '/src/assets/image/product3.jpg',
    title: 'The Silky Vase',
    price: '£250'
  },
  {
    id: 4,
    img: '/src/assets/image/product4.jpg',
    title: 'The Lucy Lamp',
    price: '£399'
  }
])
</script> -->

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
