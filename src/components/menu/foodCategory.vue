<template>
  <body class="overflow-y-hidden pb-16">
    <div class="flex justify-center items-center">
      <div
        class="xl:mx-auto xl:container py-12 px-4 sm:px-6 xl:px-0 w-100%"
      >
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="flex flex-col justify-center items-center space-y-2">
            <h1
              class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-white"
            >
              Shop By Category
            </h1>
          </div>
          <div
            class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 w-full"
          >
            <Router-link to="/mains">
              <div
                class="relative group flex justify-center items-center h-full w-full"
              >
                <img
                  class="object-center object-cover h-full w-full"
                  src="https://crast.net/img/2022/04/iPhone-how-to-sync-the-image-library-with-Google-Photos.jpg"
                  alt="maines-image"
                />
                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Maines
                </button>
                <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"
                ></div>
              </div>
            </Router-link>
            <Router-link to="/pastry">
              <div
                class="relative group flex justify-center items-center h-full w-full"
              >
                <img
                  class="object-center object-cover h-full w-full"
                  src="https://crast.net/img/2022/04/iPhone-how-to-sync-the-image-library-with-Google-Photos.jpg"
                  alt="pastry-image"
                />
                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Pastry
                </button>
                <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"
                ></div>
              </div>
            </Router-link>
            <Router-link to="/drinks">
              <div
                class="relative group flex justify-center items-center h-full w-full"
              >
                <img
                  class="object-center object-cover h-full w-full"
                  src="https://crast.net/img/2022/04/iPhone-how-to-sync-the-image-library-with-Google-Photos.jpg"
                  alt="drinks-image"
                />
                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Drinks
                </button>
                <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"
                ></div>
              </div>
            </Router-link>
            <Router-link to="/dessert">
              <div
                class="relative group flex justify-center items-center h-full w-full"
              >
                <img
                  class="object-center object-cover h-full w-full"
                  src="https://crast.net/img/2022/04/iPhone-how-to-sync-the-image-library-with-Google-Photos.jpg"
                  alt="dessert-image"
                />
                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Dessert
                </button>
                <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"
                ></div>
              </div>
            </Router-link>
          </div>
        </div>
      </div>
    </div>
  </body>
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
