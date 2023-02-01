<template>
  <section>
    <template v-if="basketStore.basketProducts.length === 0">
      <div class="h-[60vh] p-6 text-center my-16 text-[20px] text-violet-saturated">
        <span class="block mb-4">
          Your basket is empty 😔
        </span>
        <span class="block">
          <router-link
            :to="{ name: $routeNames.productList, params: { type: 'all' }}"
            class="text-link-color font-medium hover:underline"
          >shopping</router-link>
          is always a good idea...</span>
      </div>
    </template>
    <template v-else>
      <div class="lg:pt-9 lg:pl-6 lg:pr-8 lg:pb-[55px]  pt-[65px] pl-[138px] pr-[195px] pb-[48px]">
        <h1 class="md:mb-10 mb-12 font-clash text-4xl leading-[140%] text-violet-color">Your shopping cart</h1>
        <div>
          <div
            class="md:hidden flex justify-between font-clash leading-[140%] border-b border-solid border-border-color
           text-violet-color pb-3"
          >
            <p>Product</p>
            <p class="pl-[19px]">Quantity</p>
            <p>Total</p>
          </div>

          <div
            v-for="(item, index) in basketStore.basketProducts"
            :key="index" class="md:flex-col  flex justify-between items-start border-b border-solid border-border-color
           text-violet-color pt-[20px] pb-8"
          >
            <div class="flex items-start">
              <img :src="item.image_url" :alt="item.brand" class="w-full max-w-[133px]">
              <div class="max-w-[201px] flex flex-col pl-5 pt-3 space-y-2">
                <span class="font-clash text-[20px]">{{ item.title }}</span>
                <p class="md:truncate text-sm">
                  {{ item.description }}
                </p>
                <span>£{{ item.price }}</span>
              </div>
            </div>
            <div
              class="md:ml-[133px] md:mt-[-46px] w-[122px] h-[46px] flex justify-center items-center pt-1 font-clash
             text-violet-color"
            >
              <span
                class="text-light-grey-icon cursor-pointer"
                @click="item.count === 1 ? item.count = 1 : item.count--"
              >
                -
              </span>
              <span class="mx-8"> {{ item.count }} </span>
              <span
                class="text-light-grey-icon cursor-pointer"
                @click="item.count === item.qty ? item.count = item.qty : item.count++"
              >
                +
              </span>
            </div>
            <div
              class="mt-3 py-[2px] px-3 text-sm cursor-pointer"
            >
              <img
                src="@/assets/icons/basket.svg"
                alt="basket"
                class="cursor-pointer"
                @click="basketStore.deleteProduct(index)"
              >
            </div>
            <p class="md:hidden font-clash pt-3">£{{ item.price*(item.count || 1) }}</p>
          </div>

          <div class="flex flex-col items-end">
            <div class="flex items-center mt-7 font-clash leading-[140%]">
              <p class="mr-4 text-[20px] text-violet-saturated">Subtotal</p>
              <span class="text-2xl text-violet-color">£ {{ productTotalCost }}</span>
            </div>
            <p class="sm:text-right mt-2 leading-[150%] text-violet-saturated">
              Taxes and shipping are calculated at checkout
            </p>
            <el-button
              :type="$elComponentType.primary"
              class="md:mt-9 mt-4 w-[172px] h-[56px] font-satoshi font-normal text-base"
            >
              Go to checkout
            </el-button>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
const basketStore = useBasketStore()

const basketProducts = computed(() => basketStore.basketProducts)

const productTotalCost = computed(() => basketProducts.value.reduce((total, product) => {
  return total + product.price * product.count
}, 0))
</script>
