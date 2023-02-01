<template>
  <footer class="w-full bg-violet-color text-white-color">
    <div class="md:py-10 md:px-6 pt-[58px] m-auto max-w-[1440px] px-[82px] pb-[25px]">
      <div class="footer-top">
        <div class="footer-menu">
          <div>
            <span class="menu-title">Menu</span>
            <router-link to="/productList/all" class="menu__link">All products</router-link>
          </div>
          <div>
            <span class="menu-title">Categories</span>
            <router-link to="/productList/crockery" class="menu__link">Crockery</router-link>
            <router-link to="/productList/tables" class="menu__link">Tables</router-link>
            <router-link to="/productList/plant-pots" class="menu__link">Plant pots</router-link>
            <router-link to="/productList/chairs" class="menu__link">Chairs</router-link>
          </div>
        </div>
        <div class="md:mt-10">
          <span class="font-clash">Join our mailing list</span>
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
              class="md:w-full md:max-w-[350px] h-[53px] grow bg-white-opacity  text-base  border-none"
            />
            <el-button
              :type="$elComponentType.primary"
              class="xs:w-[123px] w-[143px] flex-none bg-white-color font-normal text-violet-color text-base
              hover:bg-white-light-opacity-hover hover:text-violet-color active:bg-white-light-opacity-active"
              @click="onSent"
            >
              Sign up
            </el-button>
          </el-form>
        </div>
      </div>
      <div class="md:block md:text-center md:pt-5 flex justify-between pt-6">
        <span class="font-sm">Copyright 2023 Avion LTD</span>
        <div class="md:hidden  md:mt-2 flex items-center">
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/linkedin.svg" alt="linkedin">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/facebook.svg" alt="facebook">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/instagram.svg" alt="instagram">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/skype.svg" alt="skype">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/twitter.svg" alt="twitter">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/pinterest.svg" alt="pinterest">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElNotification } from 'element-plus/es'

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
    if (valid) {
      ElNotification({
        title: 'Your email has been sent',
        message: 'Welcome to the club. Sincerely yours, Avion',
        type: 'success'
      })
    } else {
      console.warn('error submit!')
    }
  })
}
</script>

<style scoped>
.footer-top {
  display: grid;
  grid-template-columns: 540px 1fr;
  column-gap: 110px;
  padding-bottom: 48px;
  border-bottom: 1px solid #4E4D93;
}

@media screen and (max-width: 1150px) {
  .footer-top {
    grid-template-columns: 450px 1fr;
    column-gap: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .footer-top {
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (max-width: 767px) {
  .footer-top {
    grid-template-columns: 1fr;
    padding-bottom: 16px;
  }
}

.footer-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 1024px) {
  .footer-menu {
    grid-template-columns: repeat(2, 1fr);
  }
}

.menu-title {
  display: block;
  margin-bottom: 12px;
  font-family: 'Clash Display', sans-serif;
}

.menu__link {
  display: block;
  color: white;
  font-size: 14px;
  margin-bottom: 12px;
}

.menu__link:last-child {
  margin-bottom: 0;
}

.menu__link:hover {
  text-decoration: underline;
}
</style>
