<template>
  <div
    class="bg-[url('@/assets/image/newProductBG.jpeg')] bg-no-repeat
    bg-cover bg-center h-full flex justify-center items-center"
  >
    <el-card
      v-loading="pending"
      class="w-[500px] h-90vh flex flex-col m-auto
       bg-white text-violet-color rounded-sm"
    >
      <div>
        <h1 class="text-center pb-2 border-b-[1px]">Add Product</h1>
      </div>
      <el-form :rules="formRules" label-position="left" class="pt-2 px-2test text-middle-violet">
        <el-form-item label="Brand" class="mb-5" prop="brand">
          <el-input v-model.trim="payload.brand" placeholder="Enter brand" clearable class="border" />
        </el-form-item>
        <el-form-item label="Category" class="mb-5" prop="category">
          <el-input v-model.trim="payload.category" placeholder="Enter category" clearable class="border" />
        </el-form-item>
        <el-form-item label="Title" class="mb-5" prop="title">
          <el-input v-model.trim="payload.title" placeholder="Enter title" clearable class="border" />
        </el-form-item>
        <el-form-item label="Type" class="mb-5" prop="type">
          <el-input v-model.trim="payload.type" placeholder="Enter type" clearable class="border" />
        </el-form-item>
        <el-form-item label="Price" class="mb-5" prop="price">
          <el-input v-model.trim="payload.price" placeholder="Enter price" clearable class="border" />
        </el-form-item>
        <el-form-item label="Quantity" class="mb-5" prop="qty">
          <el-input v-model.trim="payload.qty" placeholder="Enter quantity" clearable class="border" />
        </el-form-item>
        <el-form-item label="Image url" class="mb-5">
          <el-input v-model.trim="payload.image_url" placeholder="Enter image url" clearable class="border" />
        </el-form-item>
        <el-form-item label="Depth" class="mb-[9px]">
          <el-input v-model.trim="payload.depth" placeholder="Enter depth" clearable class="border" />
        </el-form-item>
        <el-form-item label="Height" class="mb-[9px]">
          <el-input v-model.trim="payload.height" placeholder="Enter height" clearable class="border" />
        </el-form-item>
        <el-form-item label="Length" class="mb-[9px]">
          <el-input v-model.trim="payload.length" placeholder="Enter length" clearable class="border" />
        </el-form-item>
        <el-form-item label="Width" class="mb-[9px]">
          <el-input v-model.trim="payload.width" placeholder="Enter width" clearable class="border" />
        </el-form-item>
      </el-form>
      <div class="flex justify-center my-2 gap-3">
        <el-button type="danger" size="small" class="rounded-sm" @click="$router.back">
          Cancel
        </el-button>

        <el-button type="default" size="small" class="rounded-sm" @click="onAdd">
          + Add
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { IPostProduct } from '@/types/products.types'
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

const pending = ref(false)
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const formRules: FormRules = {
  brand: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  category: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  description: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  title: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  type: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  price: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ],
  qty: [
    { required: true, message: 'This field is required', trigger: 'change' }
  ]
}

const payload = reactive<IPostProduct>({
  brand: '',
  category: '',
  description: '',
  image_url: '',
  title: '',
  type: '',
  price: 250,
  qty: 10,
  depth: null,
  diameter: null,
  height: null,
  length: null,
  width: null
})

async function onAdd () {
  try {
    pending.value = true
    await productsService.addProduct(payload)
    router.push({ name: $routeNames.productList, params: { type: 'all' } })
  } catch (err) {
    console.error(err)
  } finally {
    pending.value = false
  }
}
</script>
