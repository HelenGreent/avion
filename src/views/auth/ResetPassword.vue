<template>
  <section class="bg-[url('@/assets/image/resetBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="relative w-full h-full flex justify-center items-center max-w-[500px] m-auto">
      <el-card v-loading="loading" class="md:w-[70%] w-full shadow-none">
        <template #header>
          <p class="font-clash font-medium text-center text-3xl text-violet-color">Reset Password</p>
        </template>

        <el-form
          ref="ruleFormRef"
          label-position="top"
          :rules="formRules"
          :model="formModel"
          status-icon
          @submit.prevent
        >
          <el-form-item label="Password" prop="password">
            <el-input
              v-model="formModel.password"
              type="password"
              autocomplete="off"
              placeholder="Please enter password" show-password
              class="h-[52px] bg-auth-input"
            />
          </el-form-item>

          <el-form-item label="New password" prop="newPassword">
            <el-input
              v-model="formModel.newPassword"
              type="password"
              autocomplete="off"
              placeholder="Please add new password" show-password
              class="h-[52px] bg-auth-input"
            />
          </el-form-item>

          <el-button
            native-type="submit"
            :type="$elComponentType.primary"
            class="md:w-full font-satoshi font-normal text-base"
            @click="submitForm(ruleFormRef)"
          >
            Submit
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
const { resetPassword } = useAuthStore()

const ruleFormRef = ref<FormInstance>()

const loading = ref(false)

const formRules: FormRules = {
  password: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { min: 6, message: 'Min length should be more than 6 characters ', trigger: 'change' }
  ],
  newPassword: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { min: 6, message: 'Min length should be more than 6 characters ', trigger: 'change' }
  ]
}

const formModel = reactive({
  password: '',
  newPassword: ''
  // token: $router.params.token
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true

      resetPassword(formModel)
        .then(() => { router.push({ name: routeNames.login }) })
        .finally(() => (loading.value = false))
    } else {
      console.warn('error submit!')
      return false
    }
  })
}
</script>
