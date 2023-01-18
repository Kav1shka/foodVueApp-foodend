<template>
    <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Speedy Foods</h1>
            <p class="mt-4 text-xl text-gray-500">“You don’t need a silver fork to eat good food.”</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="https://d14kn77we9f8hg.cloudfront.net/wp-content/uploads/2021/07/sri-lankan-chicken-koththu.jpg" alt="koththu" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://st2.depositphotos.com/4404621/11338/i/950/depositphotos_113388938-stock-photo-sri-lankan-style-rice-and.jpg" alt="rice and curry" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://i0.wp.com/www.reviewsrilanka.com/wp-content/uploads/2021/06/Elephant-House-min-1.jpg?resize=850%2C520&ssl=1" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/65jXk1eKyuDpz9ezmKTq4U/24a6bdf8ae146ef2355d41eb4fa57405/AdobeStock_294378459.jpeg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-2-1.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://d14kn77we9f8hg.cloudfront.net/wp-content/uploads/2021/07/string-hopper-meal-fish.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://i.pinimg.com/originals/ad/83/55/ad8355c893173853a93b3bbd9b6a2b56.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- <p>
              <Router-link to="/category" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">start
              </Routerlink>
            </p> -->
            <div>
              <button @click="goToHome()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >GO</button>
            </div>
       
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </template>

<script>
import * as mdb from 'mdb-ui-kit';
export default{
  methods:{
    goToHome(){
      this.$router.push('/category')
    },
  },
};
</script>



 