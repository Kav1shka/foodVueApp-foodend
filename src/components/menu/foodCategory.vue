<template>
 <div class="bg-gray-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 class="text-6xl font-bold text-gray-900">Category</h2><br/>

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
        <router-link to="/mains">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:scale-110 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674426562/project%20food%20app/Untitled_design_1_ggutl9.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center animate-fade-up animate-duration-[2000ms]">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900 animate-fade-down animate-duration-[2000ms]">Mains</p>
        </div>
        </router-link>

        <router-link to="/pastry">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:scale-110 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674427522/project%20food%20app/Untitled_design_2_iglqiy.png" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center animate-fade-up animate-duration-[2000ms]">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900 animate-fade-down animate-duration-[2000ms]">Pastrys</p>
        </div>
        </router-link>

        <router-link to="/drinks">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:scale-110 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674430648/project%20food%20app/1_xsfkvi.png" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center animate-fade-up animate-duration-[2000ms]">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900 animate-fade-down animate-duration-[2000ms]">Drinks</p>
        </div>
        </router-link>

      <router-link to="/dessert">
        <div class="group relative">
          <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:scale-110 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674430642/project%20food%20app/2_of6dsg.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center animate-fade-up animate-duration-[2000ms]">
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900 animate-fade-down animate-duration-[2000ms]">Desserts</p>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "component",
  data() {
    return {};
  },
};
</script>

<style></style>
