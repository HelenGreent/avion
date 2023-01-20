<template>
  <header class="w-full h-[132px] bg-white-color sticky top-0">
    <div class="m-auto max-w-[1440px]">
      <div
        class="h-[70px] flex justify-between items-center border-b border-solid border-black-color-opacity mx-[28px]"
      >
        <div>
          <img src="@/assets/icons/search.svg" alt="search" class="cursor-pointer">
        </div>
        <a href="#" class="font-clash text-dark-violet text-2xl text-center hover:underline">Avion</a>
        <div class="flex items-center">
          <div class="mr-4 relative">
            <router-link to="/productBasket">
              <img src="@/assets/icons/basket.svg" alt="basket">
              <span
                v-if="basketStore.basketProducts.length"
                class="absolute right-2/4 top-[63%] w-4 h-4 bg-violet-color rounded-full text-center text-xs
                text-white-color"
              > {{ basketStore.totalProductsCount }} </span>
            </router-link>
          </div>
          <div>
            <a href="#">
              <img src="@/assets/icons/user.svg" alt="user">
            </a>
          </div>
        </div>
      </div>
      <div class="md:hidden h-[62px] flex justify-center items-center">
        <router-link
          v-for="(item, index) in menu" :key="index" :to="item.path"
          class="mx-[22px] text-light-violet hover:underline"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="md:flex md:justify-center h-[62px] hidden">
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#726E8D"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const basketStore = useBasketStore()

interface IMenu {
  name: string
  path: string
}

const menu: IMenu[] = [{
  name: 'Plant pots',
  path: '/plant'
},
{
  name: 'Ceramics',
  path: '/ceramics'
},
{
  name: 'Tables',
  path: '/tables'
},
{
  name: 'Chairs',
  path: '/chairs'
},
{
  name: 'Crockery',
  path: '/crockery'
},
{
  name: 'Cutlery',
  path: '/cutlery'
}]
</script>
