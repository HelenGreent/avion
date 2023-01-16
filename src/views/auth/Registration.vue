<template>
  <section class="bg-[url('@/assets/image/authBG2.jpeg')] h-full">
    <div class="max-w-[500px] m-auto pt-10">
      <el-card v-loading="loading" class="shadow-none">
        <template #header>
          <p class="font-clash font-medium text-3xl text-violet-color">Sign Up</p>
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
              type="email"
              placeholder="DanielReynolds@gmail.com"
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input
              v-model="formModel.password"
              type="password"
              autocomplete="off"
              placeholder="Please enter password" show-password
              class="h-[52px]"
            />
          </el-form-item>

          <el-form-item label="Confirm password" prop="checkPassword">
            <el-input
              v-model="formModel.checkPassword"
              type="password"
              autocomplete="off"
              placeholder="Please confirm password" show-password
              class="h-[52px]"
            />
          </el-form-item>

          <p class="pb-2.5 text-sm font-normal">
            Already a user?
            <router-link
              class="text-link-color uppercase hover:underline ease-in-out duration-300"
              :to="{ name: $routeNames.login }"
            >
              Login
            </router-link>
          </p>

          <el-button
            native-type="submit"
            :type="$elComponentType.primary"
            class="font-satoshi font-normal text-base"
            @click="submitForm(ruleFormRef)"
          >
            Sign Up
          </el-button>
        </el-form>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { router } from '@/router'
import { routeNames } from '@/router/route-names'
const { register } = useAuthStore()

const ruleFormRef = ref<FormInstance>()

const loading = ref(false)

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (formModel.checkPassword !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPassword', () => null)
    }
    callback()
  }
}
const validatePassword2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== formModel.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const formRules: FormRules = {
  email: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { type: 'email', message: 'Email is invalid', trigger: 'change' }
  ],
  password: [
    { required: true, message: 'This field is required', validator: validatePassword, trigger: 'change' },
    { min: 6, message: 'Min length should be more than 6 characters ', trigger: 'change' }
  ],
  checkPassword: [
    { required: true, message: 'This field is required', validator: validatePassword2, trigger: 'change' }
  ]
}

const formModel = reactive({
  email: '',
  password: '',
  checkPassword: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true

      register(formModel)
        .then(() => { router.push({ name: routeNames.login }) })
        .finally(() => (loading.value = false))
    } else {
      console.warn('error submit!')
      return false
    }
  })
}
</script>
