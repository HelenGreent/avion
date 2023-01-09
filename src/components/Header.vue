<template>
  <header class="h-[132px] bg-white-color">
    <div class="h-[70px] flex justify-between items-center border-b border-solid border-black-color-opacity mx-[28px]">
      <div>
        <img src="@/assets/icons/search.svg" alt="search" class="cursor-pointer">
      </div>
      <a href="#" class="font-clash text-dark-violet text-2xl text-center hover:underline">Avion</a>
      <div class="flex items-center">
        <div class="mr-4">
          <a href="#">
            <img src="@/assets/icons/basket.svg" alt="basket">
          </a>
        </div>
        <div>
          <a href="#">
            <img src="@/assets/icons/user.svg" alt="user">
          </a>
        </div>
      </div>
    </div>
    <div class="h-[62px] flex justify-center items-center">
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="mx-[22px] text-light-violet hover:underline"
      >
        {{ item.name }}
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
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
  name: 'Tableware',
  path: '/tableware'
},
{
  name: 'Cutlery',
  path: '/cutlery'
}]
</script>
