<template>
  <div
    class="bg-[url('@/assets/image/newProductBG.jpeg')] h-full bg-no-repeat
    bg-cover bg-center flex justify-center items-center"
  >
    <el-card
      class="h-[70vh] w-[60vw] max-w-[500px] flex flex-col m-auto
       bg-white text-violet-color rounded-sm"
    >
      <div>
        <h1 class="text-center p-2 border-b-[1px]">Add Product</h1>
      </div>
      <el-form label-position="left" class="pt-2 px-2 text-middle-violet">
        <el-form-item label="Brand">
          <el-input v-model.trim="productValue.brand" placeholder="Enter brand" clearable class="border" />
        </el-form-item>
        <el-form-item label="Category">
          <el-input v-model.trim="productValue.category" placeholder="Enter category" clearable class="border" />
        </el-form-item>
        <el-form-item label="Image url">
          <el-input v-model.trim="productValue.image_url" placeholder="Enter image url" clearable class="border" />
        </el-form-item>
        <el-form-item label="Title">
          <el-input v-model.trim="productValue.title" placeholder="Enter title" clearable class="border" />
        </el-form-item>
        <el-form-item label="Type">
          <el-input v-model.trim="productValue.type" placeholder="Enter type" clearable class="border" />
        </el-form-item>
        <el-form-item label="Price">
          <el-input v-model.trim="productValue.price" placeholder="Enter price" clearable class="border" />
        </el-form-item>
        <el-form-item label="Quantity">
          <el-input v-model.trim="productValue.qty" placeholder="Enter quantity" clearable class="border" />
        </el-form-item>
      </el-form>
      <div class="mt-2 gap-3">
        <el-button type="danger" size="large" class="rounded-sm" @click="$router.back">
          Cancel
        </el-button>

        <el-button type="default" size="large" class="rounded-sm" @click="onAdd">
          Add
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { IPostProduct } from '@/types/products.types'

const { addProduct } = useAdminStore()
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const productValue = reactive<IPostProduct>({
  brand: '',
  category: '',
  description: '',
  image_url: '',
  title: '',
  type: '',
  price: 250,
  qty: 10
})

function onAdd () {
  addProduct(productValue)
  router.push({ name: $routeNames.adminProducts })
}
</script>
