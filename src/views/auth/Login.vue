<template>
  <section class="bg-[url('@/assets/image/authBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="relative w-full h-full flex justify-center items-center max-w-[500px] m-auto">
      <el-card v-loading="loading" class="w-full shadow-none">
        <template #header>
          <p class="font-clash font-medium text-3xl text-violet-color">Login</p>
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
              type="email" placeholder="Please enter password"
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input
              v-model="formModel.password"
              type="password"
              placeholder="Please enter password" show-password
              class="h-[52px]"
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

          <el-button
            native-type="submit"
            :type="$elComponentType.primary"
            class="font-satoshi font-normal text-base"
            @click="submitForm()"
          >
            Login
          </el-button>
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
