<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Mains Menu
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="product in products" :key="product._id">
          <div class="group relative">
            <div
              class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
            >
              <img
                :src="product.image_URL"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ product.description }}
                </p>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ product.cost }}
              </p>
            </div>
          </div>
          <div>
                <button
                  @click="addtocart(product._id)"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buy
                </button>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getMenu(){
      axios
        .get("http://localhost:8000/products/foods/category/mains")

        .then((response) => {
          this.products = response.data.foods;
          console.log(response.data);
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addtocart(id) {
      console.log(id)
     this.$store.dispatch('cart/addCartItem',id);
      //this.$router.push("/cart");
    },
  },
  beforeMount() {
    this.getMenu();
    // this.addtocart();
  },
};
</script>
