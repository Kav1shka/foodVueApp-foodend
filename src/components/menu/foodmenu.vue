
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Food Menu</h2>

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
    name: 'chicken kottu',
    href: '#',
    imageSrc: 'https://st2.depositphotos.com/4404621/11594/i/950/depositphotos_115943092-stock-photo-sri-lankan-kottu-roti.jpg',
    imageAlt: "koththu roti.",
    price: 'Rs.400 ',
   
  },
  {
    id: 2,
    name: 'Rice and curry',
    href: '#',
    imageSrc: 'https://www.kapruka.com/cdn-cgi/image/width=700,quality=93,f=auto/shops/specialGifts/productImages/1641286121961_RiceCurryChicken_M.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs.250'
    
  },
  {
    id: 3,
    name: 'Fried Rice ',
    href: '#',
    imageSrc: 'http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-LK/chinese-fried-rice_43_1.1.147_326X580.Jpeg',
    imageAlt:'',
    price: 'Rs.250'
  
  },
  {
    id: 4,
    name: 'pastry ',
    href: '#',
    imageSrc: 'https://images.food52.com/brilX5Z9lyJciIDhjr7nih-wB-w=/1930x1286/e9a760b9-dba8-4f21-9bac-75fc76d91e4a--2021-0211_yeasted-puff-pastry_bake-it-up-a-notch_3x2_rocky-luten_015.jpg',
    imageAlt:'',
    price: 'Rs.250'
   
  },
  {
    id: 1,
    name: 'chicken kottu',
    href: '#',
    imageSrc: 'https://st2.depositphotos.com/4404621/11594/i/950/depositphotos_115943092-stock-photo-sri-lankan-kottu-roti.jpg',
    imageAlt: "koththu roti.",
    price: 'Rs.400 ',
   
  },
  {
    id: 2,
    name: 'Rice and curry',
    href: '#',
    imageSrc: 'https://www.kapruka.com/cdn-cgi/image/width=700,quality=93,f=auto/shops/specialGifts/productImages/1641286121961_RiceCurryChicken_M.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rs.250'
    
  },
  {
    id: 3,
    name: 'Fried Rice ',
    href: '#',
    imageSrc: 'http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-LK/chinese-fried-rice_43_1.1.147_326X580.Jpeg',
    imageAlt:'',
    price: 'Rs.250'
  
  }

  // More products...
]
</script>