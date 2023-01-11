<template>
  <section class="product">
    <div>
      <img src="@/assets/image/productDandy.jpg" alt="chair">
    </div>
    <div class="px-10">
      <h2 class="font-clash text-4xl leading-[44px] mb-4 text-violet-color">The Dandy Chair</h2>
      <span class="block text-2xl mb-7 text-[#12131A]">£250</span>
      <div class="text-grey-violet">
        <span class="pt-6 font-clash mb-4 leading-5">Description</span>
        <p class="block mb-[20px] leading-[22px]">
          A timeless design, with premium materials features as one of our most popular and
          iconic pieces. The dandy chair is perfect for any stylish living space with beech
          legs and lambskin leather upholstery.
        </p>
        <ul role="list" class="list-disc pl-5 space-y-1 leading-[22px]">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>
      </div>
      <div class="flex justify-between mt-[27px]">
        <div class="flex justify-left font-clash text-violet-color">
          <span class="pt-[13px] pr-[22px] leading-5">Quantity:</span>
          <div class="w-[122px] h-[46px] flex justify-between items-center px-4 bg-light-grey">
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('minus')">-</span>
            <span> {{ quantity }} </span>
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('plus')">+</span>
          </div>
        </div>
        <el-button :type="$elComponentType.primary" class="w-[143px] h-[56px] font-satoshi font-normal text-base">
          Add to cart
        </el-button>
      </div>
    </div>
  </section>
  <ProductsCollection />
  <AboutBrand />
  <section class="bg-light-grey pt-[52px] pb-[65px] pl-[93px] pr-[74px]">
    <div class="bg-white-color text-center">
      <h2 class="font-clash text-4xl leading-[140%] text-violet-color pt-[68px] mb-4">
        Join the club and get the benefits
      </h2>
      <span class="leading-[150%] text-violet-color">
        Sign up for our newsletter and receive exclusive offers on new <br> ranges, sales, pop up stores and more
      </span>
      <div class="flex justify-center mt-[72px] pb-[54px]">
        <el-input
          v-model="input"
          placeholder="your@email.com"
          class="w-[354px] text-base border-none bg-light-grey"
        />
        <el-button :type="$elComponentType.primary" class="w-[143px] h-[56px] font-satoshi font-normal text-base">
          Add to cart
        </el-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const quantity = ref<any>('1')
const input = ref('')

const changeQuantity = (type: any) => {
  if (type === 'minus') {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--
  }
  if (type === 'plus') {
    quantity.value === 5 ? (quantity.value = 5) : quantity.value++
  }
}

</script>

<style lang="scss" scoped>
.product {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 65px;
  padding: 0 55px 80px 0;
}
</style>
