<template>
  <section class="bg-[url('@/assets/image/authBG2.jpeg')] h-full">
    <div class="max-w-[500px] m-auto pt-10">
      <el-card v-loading="loading" class="shadow-none">
        <template #header>
          <p class="font-clash font-medium text-3xl text-violet-color">Sign Up</p>
        </template>

        <el-form label-position="top" @submit.prevent>
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="formModel.email"
              type="email"
              placeholder="DanielReynolds@gmail.com"
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Password" class="font-satoshi text-violet-color text-2xl">
            <el-input
              v-model="formModel.password"
              type="password"
              placeholder="Please enter password" show-password
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Confirm password" prop="password">
            <el-input
              v-model="formModel.confirmPassword"
              type="password"
              placeholder="Please confirm password" show-password
              class="h-[52px]"
            />
          </el-form-item>

          <p class="pb-2.5 text-sm font-normal">
            Already a user?
            <router-link
              class="text-sky-700 uppercase hover:underline ease-in-out duration-300"
              :to="{ name: $routeNames.login }"
            >
              Login
            </router-link>
          </p>

          <el-button
            native-type="submit"
            :type="$elComponentType.primary"
            class="font-satoshi font-normal text-base"
          >
            Sign Up
          </el-button>
        </el-form>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formModel = ref({
  email: '',
  password: '',
  confirmPassword: ''
})
const loading = ref(false)

</script>
