<template>
  <section>
    <div
      class="xl:bg-[url('@/assets/image/productListHeroMobile.jpg')]
      bg-[url('@/assets/image/productListHero.jpg')] h-[209px] bg-cover"
    >
      <h2 class="font-clash text-4xl text-white-color pl-20 pt-[121px] pb-9">All products</h2>
    </div>
    <div class=" lg:h-[270px] flex justify-evenly h-16 text-violet-color">
      <div class="lg:flex lg:flex-col py-2">
        <select class="h-[48px] w-[137px] mx-3">
          <option value="volvo">Categories</option>
          <option value="saab">S</option>
          <option value="opel">W</option>
          <option value="audi">P</option>
        </select>
        <select class="h-[48px] w-[137px] mx-3">
          <option value="volvo">Product type</option>
          <option value="saab">S</option>
          <option value="opel">W</option>
          <option value="audi">P</option>
        </select>
        <select class="h-[48px] w-[137px] mx-3">
          <option value="volvo">Price</option>
          <option value="saab">S</option>
          <option value="opel">W</option>
          <option value="audi">P</option>
        </select>
        <select class="h-[48px] w-[137px] mx-3">
          <option value="volvo">Brand</option>
          <option value="saab">S</option>
          <option value="opel">W</option>
          <option value="audi">P</option>
        </select>
      </div>

      <div class="flex flex-row py-2">
        <label for="date" class="md:hidden py-[14px] pr-4 font-normal text-sm">Sorting by:</label>
        <select name="date" class="h-[48px] w-[137px] mx-3">
          <option value="volvo">Date added</option>
          <option value="saab">S</option>
          <option value="opel">W</option>
          <option value="audi">P</option>
        </select>
      </div>
    </div>
    <div class="grid-card">
      <Product
        v-for="product in products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
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
import { ref } from 'vue'

interface IProducts {
  id: number
  img: string
  title: string
  price: string
}

const products = ref<IProducts[]>([
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
    price: '£119'
  },
  {
    id: 5,
    img: '/src/assets/image/product5.jpg',
    title: 'Lamp set',
    price: '£399'
  },
  {
    id: 6,
    img: '/src/assets/image/product6.jpg',
    title: 'The Clay Vase',
    price: '£189'
  },
  {
    id: 7,
    img: '/src/assets/image/product7.jpg',
    title: 'TThe Stool',
    price: '£99'
  },
  {
    id: 8,
    img: '/src/assets/image/product8.jpg',
    title: 'Stool Set',
    price: '£299'
  },
  {
    id: 9,
    img: '/src/assets/image/product9.jpg',
    title: 'The Antique Chair',
    price: '£499'
  },
  {
    id: 10,
    img: '/src/assets/image/product10.jpg',
    title: 'Clay Vase Set',
    price: '£420'
  },
  {
    id: 11,
    img: '/src/assets/image/product11.jpeg',
    title: 'Chess Full Set',
    price: '£799'
  },
  {
    id: 12,
    img: '/src/assets/image/product12.jpeg',
    title: 'Chess Set',
    price: '£299'
  },
  {
    id: 13,
    img: '/src/assets/image/product13.jpeg',
    title: 'Cubic Vase Set',
    price: '£499'
  }, {
    id: 14,
    img: '/src/assets/image/product14.jpeg',
    title: 'Wood vs Glass Collection',
    price: '£1099'
  }, {
    id: 14,
    img: '/src/assets/image/product15.jpeg',
    title: 'Wood vs Glass Collection',
    price: '£1099'
  },
  {
    id: 16,
    img: '/src/assets/image/product16.jpeg',
    title: 'Dried Flowers Collection',
    price: '£499'
  }
])
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
