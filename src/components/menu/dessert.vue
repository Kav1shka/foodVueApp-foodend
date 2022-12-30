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
            
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                Buy now
              </button>

            </div>
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
  
  <!-- <script setup> 
  const products = [
    {
      id: 1,
      name: 'chicken fried rice',
      href: '#',
      imageSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-thaifriedrice-047-ls-1611613162.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rs 400'
    },
    {
      id: 2,
      name: 'Rice and curry',
      href: '#',
      imageSrc: 'https://previews.123rf.com/images/cokemomo/cokemomo1606/cokemomo160600067/58771379-sri-lankan-rice-and-curry-dish-isolated-on-white-background.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rs 300'
    },
    {
      id: 3,
      name: 'Milo',
      href: '#',
      imageSrc: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115798--01--1644507260.jpeg',
      imageAlt: "Milo.",
      price: 'Rs 100'
    }
   
  ]
  </script> -->

  <script>
    export default {
        data() {
            return {
                product: {},
                category: {}
            }
        },
        props: ["baseURL", "products", "categories"],
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find((product) => product.id == this.id)
            this.category = this.categories.find(category =>
                category.id == this.product.categoryId)
        }
    }
</script>