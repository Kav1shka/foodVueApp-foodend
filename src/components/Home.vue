<template>
    <div class="bg-white">
  <section>
  <br/>
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-full h-3 my-8 bg-blue-400 border-0 rounded dark:bg-gray-700 animate-fade animate-duration-[1000ms] ">
    <hr class="w-full h-3 my-8 bg-orange-400 border-0 rounded dark:bg-gray-700 animate-fade animate-duration-[1000ms]">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 animate-fade animate-duration-[1000ms]">
        <img src="https://res.cloudinary.com/dbblvdonh/image/upload/c_scale,w_100/v1674363289/project%20food%20app/Crest-KDU_rkmvxd.png">
    </div>
</div>

<br/><br/><br/><br/>
  </section>
  <div class="relative">
          <div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
          <div class="relative bg-gray-100 lg:bg-transparent animate-fade-right animate-duration-[2000ms]">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div class="lg:pr-16">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">KDU Cafeteria</h1>
                  <p class="mt-4 text-xl text-gray-600">We're here to serve only the best products for you.</p>
                  <div class="mt-6">
                  <button
                  @click="goToHome()">
                  
                    <a href="#" class="inline-block rounded-md border border-transparent bg-orange-400 py-3 px-8 font-medium text-white hover:bg-blue-400">Get Start</a>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 animate-fade-left animate-duration-[2000ms]">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674443813/z_T_C-p27-KDU_jjxiyi.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
        </div> 
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
          >
            Our facilities and Services
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1 animate-fade-up animate-duration-[1000ms]">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block delay-[300ms] duration-[600ms]"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674444373/6_gvhm9s.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674444224/banner2-scaled_yfnybp.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674443537/photo_2023-01-22_13-27-48_kq3psr.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674443537/photo_2023-01-22_13-27-50_x5ivbq.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674443537/photo_2023-01-22_13-27-45_qwszcj.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674444054/WhatsApp_Image_2023-01-22_at_18.54.44_wanv5k.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentSlide: 0,
      slides: [
        { img: 'https://res.cloudinary.com/dbblvdonh/image/upload/c_scale,h_450,w_970/v1674372395/project%20food%20app/132299162_100309565342733_8657912759306467146_n_mnnwk6.jpg' },
        { img: 'https://res.cloudinary.com/dbblvdonh/image/upload/c_scale,h_450,w_970/v1674372395/project%20food%20app/132299162_100309565342733_8657912759306467146_n_mnnwk6.jpg' },
        { img: 'https://example.com/image3.jpg' }
      ]
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/category");
    },
    gotoFeedBack() {
      this.$router.push("/feedback");
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
};
</script>

<style>

</style>
