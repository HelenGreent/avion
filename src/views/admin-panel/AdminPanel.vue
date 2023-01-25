<template>
  <section class="bg-[url('@/assets/image/newProductBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="container">
      <h1
        class="mb-5 md:text-2xl pt-4 font-clash font-normal text-center text-dark-violet text-[32px]
      leading-10"
      >
        Admin Panel
      </h1>
      <span class="block ml-2 font-medium text-xl text-white">Products:</span>
      <el-button class="p-3 m-2 text-link-color border-link-color" @click="createNewProduct"> + Add product</el-button>

      <el-table v-loading="loading" :data="adminStore.adminProducts" style="width: 100%">
        <el-table-column fixed="left" prop="title" label="Title" width="180" />
        <!--#need add img -->

        <!-- <el-table-column min-width="80" prop="image_url" label="IMG">
          <template slot-scope="scope">
            <img :src="scope.row.image_url">
          </template>
        </el-table-column> -->
        <el-table-column prop="description" label="Description" width="250" />
        <el-table-column prop="price" label="Price" width="120" />
        <el-table-column prop="type" label="Type" width="120" />
        <el-table-column prop="brand" label="Brand" width="150" />
        <el-table-column prop="category" label="Category" width="120" />
        <el-table-column prop="qty" label="Quantity" width="100" />
        <el-table-column prop="height" label="Height" width="80" />
        <el-table-column prop="depth" label="Depth" width="80" />
        <el-table-column prop="diameter" label="Diameter" width="100" />
        <el-table-column prop="length" label="Length" width="80" />
        <el-table-column fixed="right" label="Operations" width="150">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index)">Edit</el-button>
            <el-button
              size="small"
              type="danger"
              :icon="Delete"
              @click="handleDelete(scope.$index)"
            />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
import { router } from '@/router'
import { routeNames } from '@/router/route-names'

const adminStore = useAdminStore()
const { getAdminProducts } = adminStore

const loading = ref(false)

function createNewProduct () {
  router.push({ name: routeNames.addProduct, params: { adminProductsId: 'new' } })
}

const handleEdit = (index: number) => {
  console.log(index)
}
const handleDelete = (index: number) => {
  console.log(index)
}

onMounted(getAdminProducts)
</script>
