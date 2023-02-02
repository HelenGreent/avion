<template>
  <header class="md:h-[70px] w-full h-[132px] bg-white-color sticky top-0 z-10">
    <div class="m-auto max-w-[1440px]">
      <div
        class="h-[70px] flex justify-between items-center border-b border-solid border-black-color-opacity mx-[28px]"
      >
        <form class="ms:hidden flex justify-start w-[182px]">
          <img src="@/assets/icons/search.svg" alt="search" class="mr-2 cursor-pointer">
          <el-input
            v-model="productsStore.searchValue"
            placeholder="Search by title"
            clearable
            class="ms:hidden"
            @input="debouncedSearch"
          />
        </form>

        <router-link
          to="/home"
          class="font-clash text-dark-violet text-2xl text-center hover:underline"
        >
          Avion
        </router-link>

        <div class="ms:pl-0 flex items-center pl-[138px]">
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

          <el-dropdown trigger="click" :hide-on-click="false">
            <a href="#" @click.prevent>
              <img src="@/assets/icons/user.svg" alt="user" class="mt-1">
            </a>
            <template #dropdown>
              <el-dropdown-menu>
                <template v-if="accessToken">
                  <el-dropdown-item disabled>
                    <span>{{ user?.user_name || 'user' }}</span>
                  </el-dropdown-item>
                  <el-dropdown-item class="text-link-color hover:underline" @click="logout">
                    <p>Log Out</p>
                  </el-dropdown-item>
                </template>
                <template v-else>
                  <el-dropdown-item disabled><span>You are not logged in. . .</span></el-dropdown-item>
                  <el-dropdown-item>
                    <router-link
                      :to="{name: $routeNames.login}"
                      class="text-link-color hover:underline"
                    >
                      Login
                    </router-link>
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div
        class="md:hidden md:h-0 h-[62px] flex justify-center items-center"
      >
        <router-link
          v-for="(item, index) in menu"
          :key="index"
          :to="{ name: $routeNames.productList, params: { type: item.type }}"
          class="mx-[22px] text-light-violet hover:underline"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="md:inline-block md:absolute md:top-[23px] md:right-[85px] hidden">
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
import { router } from '@/router'
import { routeNames } from '@/router/route-names'
import { debounce } from '@/composables/useDebounce'

const basketStore = useBasketStore()
const { user, logout, accessToken } = useAuthStore()
const productsStore = useProductsStore()

async function searchByTitle () {
  const replacer = productsStore.searchValue ? productsStore.searchValue.replace(/^\s+|\s+$/g, '').replace(/(\s\s+)/g, '+') : ''
  const query = productsStore.searchValue ? `&title=fts.%27${replacer}%27` : ''

  try {
    await productsStore.getProducts(`${query}&offset=0&limit=10`)
    await productsStore.getProductsListLength(query)
  } catch (error) {
    console.warn(error)
  } finally {
    await router.push({ name: routeNames.productList, params: { type: 'all' } })
  }
}

const debouncedSearch = debounce<typeof searchByTitle>(searchByTitle, 700)

const menu = [
  {
    name: 'All products',
    type: 'all'
  },
  {
    name: 'Plant pots',
    type: 'plant-pots'
  },
  {
    name: 'Ceramics',
    type: 'ceramics'
  },
  {
    name: 'Tables',
    type: 'tables'
  },
  {
    name: 'Chairs',
    type: 'chairs'
  },
  {
    name: 'Crockery',
    type: 'crockery'
  }]
</script>
