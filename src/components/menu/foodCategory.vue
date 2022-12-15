
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Food Menu</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
       <Router-link :to="{path:product.path }"><img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" /> </Router-link> 
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
            <!-- <div>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
            </div> -->
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
    name: 'Mains',
    href: '#',
     imageSrc: 'https://i2-prod.walesonline.co.uk/incoming/article22555452.ece/ALTERNATES/s1200c/0_EGR_231221_CurryHutCardiff_11.jpg',
    imageAlt: "Mains.",
    name:"mains"
   
   
  },
  {
    id: 2,
    name: 'pastry',
    href: '#',
    imageSrc: 'https://www.businessnews.lk/wp-content/uploads/2021/08/Bakery-Products.jpg',
    imageAlt: "pastry.",
    name:"pastry"
    
  },
  {
    id: 3,
    name: 'Drinks ',
    href: '#',
    imageSrc: 'https://i0.wp.com/www.reviewsrilanka.com/wp-content/uploads/2021/06/Elephant-House-min-1.jpg?resize=850%2C520&ssl=1',
    imageAlt:'Drinks',
    name:"drinks"
    
  
  },
  {
    id: 4,
    name: 'Desserts ',
    href: '#',
    imageSrc: 'https://www.harvestonline.lk/wp-content/uploads/2021/09/Elephant-House-Dairy-Icecream-Cup-80g.jpg',
    imageAlt:'Desserts',
    name:"dessert"

   
  }
  // More products...
]
</script>