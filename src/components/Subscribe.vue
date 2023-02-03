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
        <el-form
          ref="ruleFormRef"
          label-position="top"
          :rules="formRules"
          :model="formModel"
          class="w-full flex justify-start mt-4 pb-[54px]"
        >
          <el-input
            v-model="formModel.email"
            prop="email"
            type="email"
            placeholder="your@email.com"
            class="md:w-full md:max-w-[350px] h-[53px] grow bg-white-color  text-base  border-none"
          />
          <el-button
            :type="$elComponentType.primary"
            class="xs:w-[123px] w-[143px] flex-none bg-violet-color font-normal text-white-color text-base
            hover:bg-middle-violet "
            @click="onSent"
          >
            Sign up
          </el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElNotification } from 'element-plus/es'
import type { FormRules, FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const formRules: FormRules = {
  email: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { type: 'email', message: 'Email is invalid', trigger: 'change' }
  ]
}

const formModel = reactive({
  email: ''
})

const onSent = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid && formModel.email) {
      ElNotification({
        title: 'Your email has been sent',
        message: 'Welcome to the club. Sincerely yours, Avion',
        type: 'success'
      })
    } else {
      ElNotification({
        title: 'Subscription failed!',
        message: 'Please enter your email.',
        type: 'warning'
      })
      console.warn('error submit!')
    }
  })
}
</script>

<style lang="scss" scoped>
.subscribe-check {
  display: flex;
  align-items: center;
}
</style>
