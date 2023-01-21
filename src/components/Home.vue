<template>
    <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48" >
      <div>
        <button @click="gotoFeedBack()" type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
          <svg height="30px" width="0px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 491.521 491.521" xml:space="preserve">
<polygon style="fill:#3A556A;" points="314.147,339.386 152.136,177.375 287.611,0.001 491.521,203.911 "/>
<polygon style="fill:#2F4859;" points="452.292,185.593 313.918,291.281 185.096,162.46 177.767,172.056 312.923,307.211 
	460.894,194.194 "/>
<polygon style="fill:#FCD462;" points="180.552,205.79 161.697,215.27 47.982,272.445 0,491.521 219.077,443.538 276.251,329.825 
	285.732,310.97 "/>
<g>
	<path style="fill:#F6C358;" d="M13.604,488.541l115.93-115.93c8.69,4.253,19.443,2.865,26.666-4.358
		c9.094-9.094,9.095-23.839,0.001-32.933c-9.094-9.094-23.839-9.093-32.933,0.001c-7.223,7.224-8.611,17.977-4.358,26.666
		L2.979,477.916L0,491.521L13.604,488.541z"/>
	<polygon style="fill:#F6C358;" points="180.551,205.79 161.696,215.27 276.251,329.826 285.732,310.97 	"/>
</g>
</svg>
 FeedBacks
</button>
      </div>
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
          
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Speedy Foods</h1>
            <p class="mt-4 text-xl text-gray-500">“You don’t need a silver fork to eat good food.”</p>
            <div class="px-5 py-24 mx-auto flex flex-wrap float-right">
            <img src="https://dummyimage.com/600x360">
            </div>
          </div>
          <div>

            <div>
              <button @click="goToHome()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >GO</button>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301">
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360">
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303">
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>

  </template>

<script>
export default{
  methods:{
    goToHome(){
      this.$router.push('/category')
    },
    gotoFeedBack(){
    this.$router.push('/feedback')
  }
  },
  
};
</script>



 