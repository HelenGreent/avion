<template>
  <section class="container">
    <template v-if="editMode">
      <div
        v-loading="pending"
        class="product"
      >
        <div class="w-full flex justify-center">
          <img :src="product?.image_url" :alt="product?.title" class="max-h-[600px]">
        </div>

        <div class="sm:px-6 lg:px-14 lg:pt-[28px] px-10">
          <input
            v-model="payload.title"
            type="text"
            class="md:text-6 font-clash text-4xl leading-[44px] mb-4 text-violet-color"
          >
          <div class="flex justify-start items-center mb-7 md:text-[20px] text-2xl ">
            <span class="pr-1">£</span>
            <input
              v-model="payload.price"
              type="text"
              class="text-[#12131A]"
            >
          </div>
          <div class="text-grey-violet space-y-3">
            <span class="font-clash text-violet-color mb-4 leading-5">Description :</span>
            <input
              v-model="payload.description"
              type="textarea"
              class="w-full min-h-[50px] p-2 block mb-[20px] leading-[22px]"
              placeholder="A timeless design, with premium materials features as one of our most popular and
              iconic pieces. The dandy chair is perfect for any stylish living space with beech
              legs and lambskin leather upholstery."
            >
          </div>
          <div class="mt-12 mb-4">
            <span class="font-clash text-violet-color mb-4 leading-5">Dimensions :</span>
            <div class="pt-6 flex justify-between max-w-[241px] text-violet-color">
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Width :</span>
                <input
                  v-model="payload.width"
                  type="text"
                >
              </div>
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Height :</span>
                <input
                  v-model="payload.height"
                  type="text"
                >
              </div>
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Depth :</span>
                <input
                  v-model="payload.depth"
                  type="text"
                >
              </div>
            </div>
          </div>
          <div class="sm:flex-col lg:mb-4 flex justify-between mt-[27px] space-y-3.5">
            <div class="sm:flex-col flex justify-left space-y-3.5 font-clash text-violet-color">
              <span class="sm:mt-0 w-[130px] pt-[13px] pr-[22px] mt-[13px] leading-5">Quantity:</span>
              <div class="sm:w-full w-[122px] h-[46px] flex justify-center items-center">
                <input
                  v-model="payload.qty"
                  type="text"
                >
              </div>
            </div>
            <el-button
              :type="$elComponentType.primary"
              class="sm:w-full w-[143px] h-[56px] font-satoshi font-normal text-base"
              @click="basketStore.addProducts(product as IBasketProduct, quantity)"
            >
              Add to cart
            </el-button>
          </div>
          <div class="mt-2">
            <el-button
              :icon="Edit"
              class="text-link-color border-link-color"
              @click="triggerEditMode()"
            >
              Edit
            </el-button>
          </div>
        </div>
      </div>

      <div class="flex justify-end mt-2 mr-[80px]">
        <el-button type="danger" class="rounded-sm" @click="$router.back">
          Back
        </el-button>
        <el-button
          class="text-link-color border-link-color"
          @click="handleUpdate(product?.id as string)"
        >
          Update
        </el-button>
      </div>
    </template>

    <template v-else>
      <div
        class="product"
      >
        <div class="w-full flex justify-center">
          <img :src="product?.image_url" :alt="product?.title" class="max-h-[600px]">
        </div>
        <div class="sm:px-6 lg:px-14 lg:pt-[28px] px-10">
          <h2 class="md:text-6 font-clash text-4xl leading-[44px] mb-4 text-violet-color">{{ product?.title }}</h2>
          <span class="md:text-[20px] block text-2xl mb-7 text-[#12131A]">£{{ product?.price }}</span>
          <div class="text-grey-violet space-y-3">
            <span class="font-clash text-violet-color mb-4 leading-5">Description</span>
            <p class="block mb-[20px] leading-[22px]">
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
          <div class="mt-12 mb-4">
            <span class="font-clash text-violet-color mb-4 leading-5">Dimensions</span>
            <div class="pt-6 flex justify-between max-w-[241px] text-violet-color">
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Width</span>
                <p>{{ product?.width }}</p>
              </div>
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Height</span>
                <p>{{ product?.height }}</p>
              </div>
              <div class="space-y-3">
                <span class="font-clash text-sm text-grey-violet">Depth</span>
                <p>{{ product?.depth }}</p>
              </div>
            </div>
          </div>
          <div class="sm:flex-col lg:mb-4 flex justify-between mt-[27px] space-y-3.5">
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
              class="sm:w-full w-[143px] h-[56px] font-satoshi font-normal text-base"
              @click="basketStore.addProducts(product as IBasketProduct, quantity)"
            >
              Add to cart
            </el-button>
          </div>
          <div class="mt-2">
            <el-button
              :icon="Edit"
              class="text-link-color border-link-color"
              @click="triggerEditMode()"
            >
              Edit
            </el-button>
          </div>
        </div>
      </div>
    </template>
  </section>
  <div class="container md:p-6 pt-20 px-20">
    <div class="md:text-[20px] mb-[33px] font-clash text-violet-color text-3xl">You might also like</div>
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
import type { IBasketProduct } from '@/types/products.types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { router } from '@/router'
import { Edit } from '@element-plus/icons-vue'

const route = useRoute()
const { $routeNames } = useGlobalProperties()
const productsStore = useProductsStore()
const basketStore = useBasketStore()
const { pending, updateProduct } = productsStore

const products = computed(() => productsStore.products)

const product = computed(() => products.value?.find((product) => product.id === route.params.id))

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

function triggerEditMode () {
  editMode.value = true
}

const payload = reactive<any>({
  description: '',
  image_url: product.value?.image_url,
  title: product.value?.title,
  price: product.value?.price,
  qty: product.value?.qty,
  depth: product.value?.depth,
  height: product.value?.height,
  width: product.value?.width
})

function handleUpdate (productId: string) {
  updateProduct(productId, payload)
  router.push({ name: $routeNames.productList })
}

// onBeforeMount(() => {
//   if (!product.value) router.push({ name: routeNames.error })
// })
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
