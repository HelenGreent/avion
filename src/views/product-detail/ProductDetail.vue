<template>
  <section class="product">
    <div class="w-full">
      <img src="@/assets/image/productDandy.jpg" alt="chair" class="w-full object-cover">
    </div>
    <div class="sm:px-6 lg:px-14 lg:pt-[28px] px-10">
      <h2 class="md:text-6 font-clash text-4xl leading-[44px] mb-4 text-violet-color">The Dandy Chair</h2>
      <span class="md:text-[20px] block text-2xl mb-7 text-[#12131A]">£250</span>
      <div class="text-grey-violet space-y-3">
        <span class="font-clash text-violet-color mb-4 leading-5">Description</span>
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
      <div class="sm:flex-col lg:mb-4 flex justify-between mt-[27px] space-y-3.5">
        <div class="sm:flex-col flex justify-left space-y-3.5 font-clash text-violet-color">
          <span class="sm:mt-0 pt-[13px] pr-[22px] mt-[13px] leading-5">Quantity:</span>
          <div class="sm:w-full w-[122px] h-[46px] flex justify-center items-center bg-light-grey">
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('minus')">-</span>
            <span class="mx-8"> {{ quantity }} </span>
            <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('plus')">+</span>
          </div>
        </div>
        <el-button
          :type="$elComponentType.primary"
          class="sm:w-full w-[143px] h-[56px] font-satoshi font-normal text-base"
        >
          Add to cart
        </el-button>
      </div>
    </div>
  </section>
  <div class="md:p-6 md:pt-20 p-20">
    <div class="md:text-[20px] mb-[33px] font-clash text-violet-color text-3xl">You might also like</div>
    <ProductsCollection />
  </div>
  <AboutBrand />
  <section
    class="md:bg-transparent-color md:pt-[48px] sm:pl-6 md:pl-10 md:pr-[27px]
  bg-light-grey pt-[52px] pb-[65px] pl-[93px] pr-[74px]"
  >
    <div class="md:text-left bg-white-color text-center">
      <h2 class="md:text-xl font-clash text-4xl leading-[140%] text-violet-color pt-[68px] mb-4">
        Join the club and get the benefits
      </h2>
      <span class="leading-[150%] text-violet-color">
        <span class="md:inline block">Sign up for our newsletter and receive exclusive offers on new </span>
        ranges, sales, pop up stores and more
      </span>
      <div class="w-full flex justify-center mt-[72px] pb-[54px]">
        <el-input
          v-model="input"
          placeholder="your@email.com"
          class="w-full max-w-[354px] text-base bg-light-grey"
        />
        <el-button
          :type="$elComponentType.primary"
          class="xs:w-[123px] w-[143px] h-[56px] font-satoshi font-normal text-base"
        >
          Sign up
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

@media screen and (max-width: 1024px) {
  .product {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0;
  }
}

</style>
