e<template>
  <section class="container">
    <div
      v-loading="pending"
      class="product"
    >
      <div class="w-full flex justify-center">
        <img :src="product?.image_url" :alt="product?.title" class="max-h-[600px]">
      </div>
      <div class="sm:px-6 lg:px-14 lg:pt-[28px] px-10">
        <div v-if="editMode" class="mb-4">
          <img src="@/assets/icons/pencil.svg" class="w-[15px] mr-3 mb-2" alt="edit">
          <input
            v-model="payload.title"
            type="text"
            class="md:text-6 font-clash text-4xl leading-[44px] text-violet-color"
          >
        </div>
        <div v-else>
          <span>
            <img
              v-if="user?.user_role === 'admin'"
              src="@/assets/icons/pencil.svg"
              class="w-[20px] ml-3 pb-2 cursor-pointer"
              alt="edit"
              @click="editMode = true"
            >
            <img
              v-if="user?.user_role === 'admin'"
              src="@/assets/icons/plus.svg"
              class="w-[30px] ml-3 pb-2 cursor-pointer"
              alt="add-product"
              @click="createNewProduct"
            >
          </span>
          <h2 class="md:text-6 font-clash text-4xl leading-[44px] mb-4 text-violet-color">
            {{ product?.title }}
          </h2>
        </div>

        <div v-if="editMode" class="flex justify-start items-center mb-7 md:text-[20px] text-2xl ">
          <img src="@/assets/icons/pencil.svg" class="w-[15px] mr-3" alt="edit">
          <span class="pr-1">£</span>
          <input
            v-model="payload.price"
            type="text"
            class="text-[#12131A]"
          >
        </div>
        <span v-else class="md:text-[20px] block text-2xl mb-7 text-[#12131A]">£{{ product?.price }}</span>

        <div class="text-grey-violet space-y-3">
          <span class="font-clash text-violet-color mb-4 leading-5">Description</span>
          <div v-if="editMode" class="flex items-center">
            <img src="@/assets/icons/pencil.svg" class=" w-[15px] mr-3 mb-5" alt="edit">
            <input
              v-model="payload.description"
              type="textarea"
              class="w-full min-h-[50px] p-2 block mb-[20px] leading-[22px]"
              placeholder="A timeless design, with premium materials features as one of our most popular and
                iconic pieces. The dandy chair is perfect for any stylish living space with beech
                legs and lambskin leather upholstery."
            >
          </div>
          <div v-else>
            <p class="block mb-[20px] leading-[22px]">
              {{ product?.description }}
              A timeless design, with premium materials features as one of our most popular and
              iconic pieces. The dandy chair is perfect for any stylish living space with beech
              legs and lambskin leather upholstery.
            </p>
            <ul role="list" class="list-disc pl-5 space-y-1 leading-[22px]">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 mb-4">
          <span class="font-clash text-violet-color mb-4 leading-5">Dimensions</span>
          <div class="pt-6 flex justify-between max-w-[241px] text-violet-color">
            <div v-if="product?.width !== null" class="space-y-3">
              <span class="font-clash text-sm text-grey-violet">Width</span>
              <div v-if="editMode" class="flex">
                <img src="@/assets/icons/pencil.svg" class=" w-[10px] mr-1" alt="edit">
                <input
                  v-model="payload.width"
                  type="text"
                >
              </div>
              <p v-else>{{ product?.width }}</p>
            </div>

            <div v-if="product?.height !== null" class="space-y-3">
              <span class="font-clash text-sm text-grey-violet">Height</span>
              <div v-if="editMode" class="flex">
                <img src="@/assets/icons/pencil.svg" class=" w-[10px] mr-1" alt="edit">
                <input
                  v-model="payload.height"
                  type="text"
                >
              </div>
              <p v-else>{{ product?.height }}</p>
            </div>

            <div v-if="product?.depth !== null" class="space-y-3">
              <span class="font-clash text-sm text-grey-violet">Depth</span>
              <div v-if="editMode" class="flex">
                <img src="@/assets/icons/pencil.svg" class=" w-[10px] mr-1" alt="edit">
                <input
                  v-model="payload.depth"
                  type="text"
                >
              </div>
              <p v-else>{{ product?.depth }}</p>
            </div>
          </div>
        </div>
        <div v-if="editMode" class="sm:w-full w-[122px] h-[46px] mt-[26px] flex items-center">
          <img src="@/assets/icons/pencil.svg" class=" w-[10px] mr-1" alt="edit">
          <span class="sm:mt-0 w-[130px]  pr-[22px] leading-5">Quantity:</span>
          <input
            v-model="payload.qty"
            type="text"
          >
        </div>
        <div v-else class="sm:flex-col lg:mb-4 flex justify-between mt-[27px] space-y-3.5">
          <div class="sm:flex-col flex justify-left space-y-3.5 font-clash text-violet-color">
            <span class="sm:mt-0 pt-[13px] pr-[22px] mt-[13px] leading-5">Quantity:</span>
            <div class="sm:w-full w-[122px] h-[46px] flex justify-center items-center bg-light-grey">
              <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('minus')">-</span>
              <span class="mx-8"> {{ quantity }} </span>
              <span class="text-light-grey-icon cursor-pointer" @click="changeQuantity('plus')">+</span>
            </div>
          </div>
          <el-button
            :type="$elComponentType.primary"
            class="sm:w-full w-[143px] h-[56px] font-satoshi font-normal text-base cursor-pointer"
            @click=" accessToken ? basketStore.addProducts(product as IBasketProduct, quantity) : ElNotification({
              title: 'Not allow action',
              message: 'Please Log in. Sincerely yours, Avion',
              type: 'warning'
            })"
          >
            Add to cart
          </el-button>
        </div>
        <div v-if="editMode" class="flex justify-center mt-8">
          <img
            v-if="user?.user_role === 'admin'"
            src="@/assets/icons/cancel.svg"
            alt="cancel"
            class="cursor-pointer"
            @click="cancel"
          >
          <img
            v-if="user?.user_role === 'admin'"
            src="@/assets/icons/checkmark_green.svg"
            alt="update"
            class="cursor-pointer"
            @click="handleUpdate(product?.id as string)"
          >
        </div>
      </div>
    </div>
  </section>

  <div class="container md:p-6 pt-20 px-20">
    <div class="md:text-[20px] mb-[33px] font-clash text-violet-color text-3xl">You might also view</div>
    <ProductsCollection />
  </div>
  <AboutBrand />
  <section class="bg-light-grey">
    <div
      class="md:bg-transparent-color md:pt-[48px] sm:pl-6 md:pl-10 md:pr-[27px]
     container pt-[52px] pb-[65px] pl-[93px] pr-[74px]"
    >
      <div class="md:text-left bg-white-color text-center">
        <h2 class="md:text-xl font-clash text-4xl leading-[140%] text-violet-color pt-[68px] mb-4">
          Join the club and get the benefits
        </h2>
        <span class="leading-[150%] text-violet-color">
          <span class="md:inline block">Sign up for our newsletter and receive exclusive offers on new</span>
          ranges, sales, pop up stores and more
        </span>
        <div class="w-full flex justify-center mt-[72px] pb-[54px]">
          <el-input
            v-model="input"
            placeholder="your@email.com"
            class="w-full max-w-[354px] text-base bg-light-grey"
          />
          <el-button
            :type="$elComponentType.primary"
            class="xs:w-[123px] w-[143px] h-[56px] font-satoshi font-normal text-base"
          >
            Sign up
          </el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus/es'
import type { IBasketProduct, IUpdateProduct } from '@/types/products.types'
import { routeNames } from '@/router/route-names'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { router } from '@/router'

const route = useRoute()
const { $routeNames } = useGlobalProperties()
const productsStore = useProductsStore()
const basketStore = useBasketStore()
const { accessToken } = useAuthStore()
const { user } = useAuthStore()

const pending = ref(false)

const product = computed(() => productsStore.product)

const quantity = ref<number>(1)
const input = ref('')
const editMode = ref(false)

const changeQuantity = (type: string) => {
  if (type === 'minus') {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--
  }
  if (type === 'plus') {
    quantity.value === product.value?.qty ? (quantity.value = product.value?.qty) : quantity.value++
  }
}

const payload = computed(() => ({
  description: '',
  image_url: product.value?.image_url,
  title: product.value?.title,
  price: product.value?.price,
  qty: product.value?.qty,
  depth: product.value?.depth,
  height: product.value?.height,
  width: product.value?.width
}))

function cancel () {
  editMode.value = false
  Object.assign(payload.value, product.value)
}

async function handleUpdate (productId: string) {
  try {
    pending.value = true
    editMode.value = false
    await productsService.updateProduct(productId, payload.value as IUpdateProduct)
    router.go(0)
  } catch (err) {
    console.error(err)
  } finally {
    pending.value = false
  }
}

async function getProduct () {
  try {
    pending.value = true
    await productsStore.getProduct(route.params.id as string)
  } catch (e) {
    console.log(e)
  } finally {
    pending.value = false
    if (!product.value) await router.replace({ name: routeNames.error })
  }
}

function createNewProduct () {
  router.push({ name: $routeNames.addProduct, params: { adminProductsId: 'new' } })
}

onMounted(getProduct)
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 65px;
  padding: 0 55px 80px 0;
}

@media screen and (max-width: 1024px) {
  .product {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0;
  }
}

</style>
