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
          <el-input v-model.trim="productValue.brand" placeholder="Enter brand" clearable class="border" />
        </el-form-item>
        <el-form-item label="Category" class="mb-5" prop="category">
          <el-input v-model.trim="productValue.category" placeholder="Enter category" clearable class="border" />
        </el-form-item>
        <el-form-item label="Title" class="mb-5" prop="title">
          <el-input v-model.trim="productValue.title" placeholder="Enter title" clearable class="border" />
        </el-form-item>
        <el-form-item label="Type" class="mb-5" prop="type">
          <el-input v-model.trim="productValue.type" placeholder="Enter type" clearable class="border" />
        </el-form-item>
        <el-form-item label="Price" class="mb-5" prop="price">
          <el-input v-model.trim="productValue.price" placeholder="Enter price" clearable class="border" />
        </el-form-item>
        <el-form-item label="Quantity" class="mb-5" prop="qty">
          <el-input v-model.trim="productValue.qty" placeholder="Enter quantity" clearable class="border" />
        </el-form-item>
        <el-form-item label="Image url" class="mb-5">
          <el-input v-model.trim="productValue.image_url" placeholder="Enter image url" clearable class="border" />
        </el-form-item>
        <el-form-item label="Depth" class="mb-[9px]">
          <el-input v-model.trim="productValue.depth" placeholder="Enter depth" clearable class="border" />
        </el-form-item>
        <el-form-item label="Height" class="mb-[9px]">
          <el-input v-model.trim="productValue.height" placeholder="Enter height" clearable class="border" />
        </el-form-item>
        <el-form-item label="Length" class="mb-[9px]">
          <el-input v-model.trim="productValue.length" placeholder="Enter length" clearable class="border" />
        </el-form-item>
        <el-form-item label="Width" class="mb-[9px]">
          <el-input v-model.trim="productValue.width" placeholder="Enter width" clearable class="border" />
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

const { pending, addProduct } = useAdminStore()
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

const productValue = reactive<IPostProduct>({
  brand: '',
  category: '',
  description: '',
  image_url: '',
  title: '',
  type: '',
  price: 250,
  qty: 10,
  depth: 1,
  diameter: 1,
  height: 1,
  length: 1,
  width: ''
})

function onAdd () {
  addProduct(productValue)
  router.push({ name: $routeNames.adminProducts })
}
</script>
