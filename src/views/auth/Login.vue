<template>
  <section class="bg-[url('@/assets/image/authBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="relative w-full h-full flex justify-center items-center max-w-[500px] m-auto">
      <el-card v-loading="loading" class="md:w-[90%] w-full shadow-none">
        <template #header>
          <p class="font-clash font-medium text-3xl text-center text-violet-color">Login</p>
        </template>

        <el-form
          ref="ruleFormRef"
          label-position="top"
          :rules="formRules"
          :model="formModel"
          status-icon
          @submit.prevent
        >
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="formModel.email"
              type="email" placeholder="Please enter email"
              class="h-[52px] bg-auth-input"
            />
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input
              v-model="formModel.password"
              type="password"
              placeholder="Please enter password" show-password
              class="h-[52px] bg-auth-input"
            />
          </el-form-item>

          <p class="pb-2.5 text-sm font-normal">
            Need an account?
            <router-link
              class="text-link-color uppercase hover:underline ease-in-out duration-300"
              :to="{ name: $routeNames.registration }"
            >
              Sign Up
            </router-link>
          </p>

          <div class="md:flex-col md:space-x-0 flex items-center space-x-2">
            <el-button
              native-type="submit"
              :type="$elComponentType.primary"
              class="md:w-full font-satoshi font-normal text-base"
              @click="submitForm()"
            >
              Login
            </el-button>
            <router-link
              class=" md:w-full md:mt-4 h-[53px] w-[140px] flex items-center justify-center px-8 py-6
            font-medium leading-5 bg-[#bbbbbb]
          text-white-color cursor-pointer hover:bg-[#8bbeaa]  active:bg-[#8bbeaac3] ease-in-out duration-300"
              :to="{ name: $routeNames.home }"
            >
              Go Home
            </router-link>
          </div>
        </el-form>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { router } from '@/router'
import { routeNames } from '@/router/route-names'
const { login } = useAuthStore()

const ruleFormRef = ref<FormInstance>()

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

const formModel = reactive({
  email: '',
  password: ''
})

const submitForm = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      login(formModel)
        .then(() => {
          router.push({ name: routeNames.home })
        })
        .finally(() => (loading.value = false))
    } else {
      console.warn('error submit!')
      return false
    }
  })
}
</script>
