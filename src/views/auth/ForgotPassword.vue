<template>
  <section class="bg-[url('@/assets/image/forgotBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="relative w-full h-full flex justify-center items-center max-w-[500px] m-auto">
      <el-card v-loading="loading" class="md:w-[70%] w-full shadow-none">
        <template #header>
          <p class="font-clash font-medium text-center text-3xl text-violet-color">Forgot Password</p>
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
const { forgotPassword } = useAuthStore()

const ruleFormRef = ref<FormInstance>()

const loading = ref(false)

const formRules: FormRules = {
  email: [
    { required: true, message: 'This field is required', trigger: 'change' },
    { type: 'email', message: 'Email is invalid', trigger: 'change' }
  ]
}

const formModel = reactive({
  email: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true

      forgotPassword(formModel)
        .then(() => { router.push({ name: routeNames.login }) })
        .finally(() => (loading.value = false))
    } else {
      console.warn('error submit!')
      return false
    }
  })
}
</script>
