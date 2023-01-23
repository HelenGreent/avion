<template>
  <section class="md:p-0 bg-[url('@/assets/image/subscribeBG.jpg')] bg-cover pt-[97px] pb-[86px]">
    <div class="md:p-6 md:text-left max-w-[500px] m-auto text-white-color text-center">
      <h3 class="md:text-2xl block mb-3 font-normal text-3xl font-clash">Join the club and get the benefits</h3>
      <span class="md:text-sm md:mb-5 block text-lg mb-[30px]">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </span>
      <div class="md:flex-col md:mb-8 md:space-x-0 flex justify-center mb-10 space-x-9">
        <div class="subscribe-check space-x-[9px]">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Exclusive offers</span>
        </div>
        <div class="md:mx-0 md:py-2 subscribe-check space-x-[9px]">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Free events</span>
        </div>
        <div class="subscribe-check space-x-[9px]">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Large discounts</span>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <el-input
          v-model="input"
          type="email"
          placeholder="your@email.com"
          class="md:w-full md:max-w-[350px] h-[53px] grow bg-white-color  text-base  border-none"
        />
        <el-button
          :type="$elComponentType.primary"
          class="xs:w-[123px] w-[143px] flex-none bg-violet-color font-normal text-white-color text-base
          hover:bg-middle-violet "
          @click="onClick"
        >
          Sign up
        </el-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')

const onClick = () => {
  ElNotification({
    title: 'Your email has been sent',
    message: 'Thank you for joining to us and welcome to the club... Sincerely yours, Avion',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.subscribe-check {
  display: flex;
  align-items: center;
}
</style>
