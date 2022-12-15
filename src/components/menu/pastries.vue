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
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Beverage Menu</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Rolls',
    href: '#',
    imageSrc: 'https://hungrylankan.com/wp-content/uploads/2020/05/rolls9-scaled.jpg',
    imageAlt: "fish rolls",
    price: 'Rs 100'
  },
  {
    id: 2,
    name: 'Fish Bun',
    href: '#',
    imageSrc: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/350040--01--1552238226.jpeg',
    imageAlt: "Fish Bun",
    price: 'Rs 100'
  },
  {
    id: 3,
    name: 'Pastry',
    href: '#',
    imageSrc: 'https://www.islandsmile.org/wp-content/uploads/2017/01/breakfast-pastry-hand-pies-with-egg-and-seeni-sambol-filling-0859-e1484495332750.jpg',
    imageAlt: "Pastry.",
    price: 'Rs 100'
  }
 
]
</script>