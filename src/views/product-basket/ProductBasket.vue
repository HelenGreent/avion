<template>
  <section>
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
          v-for="(item, index) in product" :key="index"
          class="md:flex-col  flex justify-between items-start border-b border-solid border-border-color
           text-violet-color pt-[20px] pb-8"
        >
          <div class="flex items-start">
            <img :src="item.img" :alt="item.alt" class="w-full max-w-[133px]">
            <div class="max-w-[201px] flex flex-col pl-5 pt-3 space-y-2">
              <span class="font-clash text-[20px]">{{ item.title }}</span>
              <p class="sm:truncate text-sm">
                {{ item.description }}
              </p>
              <span>£{{ item.price }}</span>
            </div>
          </div>
          <div
            class="md:ml-[133px] md:mt-[-46px] w-[122px] h-[46px] flex justify-center items-center pt-3 font-clash
             text-violet-color"
          >
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('minus')">-</span>
            <span class="mx-8"> {{ quantity }} </span>
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('plus')">+</span>
          </div>
          <p class="md:hidden font-clash pt-3">£{{ item.price }}</p>
        </div>

        <div class="flex flex-col items-end">
          <div class="flex items-center mt-7 font-clash leading-[140%]">
            <p class="mr-4 text-[20px] text-violet-saturated">Subtotal</p>
            <span class="text-2xl text-violet-color">£210</span>
          </div>
          <p
            class="sm:text-right mt-2 leading-[150%] text-violet-saturated"
          >
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
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IProduct {
  img: string
  alt: string
  title: string
  description: string
  price: number
  quantity: number
  totalPrice: number
}

const product: IProduct[] = [{
  img: '/src/assets/image/productVase.jpg',
  alt: 'product',
  title: 'Graystone vase',
  description: 'A timeless ceramic vase with a tri color grey glaze.',
  price: 85,
  quantity: 1,
  totalPrice: 85
},
{
  img: '/src/assets/image/productPlant.jpg',
  alt: 'product',
  title: 'Basic white vase',
  description: 'Beautiful and simple this is one for the classics',
  price: 125,
  quantity: 1,
  totalPrice: 125
}]

const quantity = ref<number>(1)

const changeQuantity = (type: number | string) => {
  if (type === 'minus') {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--
  }
  if (type === 'plus') {
    quantity.value === 5 ? (quantity.value = 5) : quantity.value++
  }
}

</script>
