<template>
  <section class="bg-[url('@/assets/image/authBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="max-w-[500px] m-auto pt-10">
      <el-card v-loading="loading" class="shadow-none">
        <template #header>
          <p class="font-clash font-medium text-3xl text-violet-color">Login</p>
        </template>

        <el-form
          label-position="top"
          :rules="formRules"
          @submit.prevent
        >
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="formModel.email"
              type="email" placeholder="Please enter password"
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input
              v-model="formModel.password"
              type="password" placeholder="Please enter password" show-password
              class="h-[52px]"
            />
          </el-form-item>

          <p class="pb-2.5 text-sm font-normal">
            Need an account?
            <router-link
              class="text-sky-600 uppercase hover:underline ease-in-out duration-300"
              :to="{ name: $routeNames.register }"
            >
              Sign Up
            </router-link>
          </p>

          <el-button native-type="submit" :type="$elComponentType.primary" class="font-satoshi font-normal text-base">
            Login
          </el-button>
        </el-form>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormRules } from 'element-plus'

const formModel = ref({
  email: '',
  password: ''
})
const loading = ref(false)

const formRules: FormRules = {
  email: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { type: 'email', message: 'Email is invalid', trigger: 'change' }
  ],
  password: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { min: 6, message: 'Min length should be more than 6 characters ', trigger: 'change' }
  ]
}
</script>
