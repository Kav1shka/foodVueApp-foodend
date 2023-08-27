<template>
  <nav class="bg-gray-700 border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
  <router-link to="/">
      <a href="" class="flex items-center">
        <img
          src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674363289/project%20food%20app/Crest-KDU_rkmvxd.png"
          class="h-10 mr-3 sm:h-9"
          alt="KDU Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >KDU Cafeteria</span
        >
      </a>
  </router-link>
      <div class="flex items-center">
        <a
          href="tel:5541251234"
          class="mr-6 text-sm font-medium text-orange-400 dark:text-white hover:text-blue-400"
          >(555) 412-1234</a
        >
        <router-link to="/contact">
        <a
          href="#"
          class="text-sm font-medium text-blue-700 dark:text-blue-500 hover:text-orange-400"
          >Contact</a
        >
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="vl"></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/profile">
        <a
          href="#"
          class="text-sm font-medium text-blue-700 dark:text-blue-500 hover:text-orange-400"
          ><div
            class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
          >
            <svg
              class="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg></div
        ></a>
      </router-link>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-600 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li><router-link to="/">
            <a
              href="#"
              class="text-white dark:text-white hover:text-orange-400"
              aria-current="page"
              >Home</a
            >
            </router-link>
          </li>
          <li><router-link to="/category">
            <a href="#" class="text-white dark:text-white hover:text-orange-400"
              >Category</a
            >
          </router-link>
          </li>
          <li><router-link to="/cart">
            <a href="#" class="text-white dark:text-white hover:text-orange-400"
              >Cart</a
            >
          </router-link>
          </li>
          <li><router-link to="/SignIn">
            <a href="#" class="text-white dark:text-white hover:text-orange-400"
              >Login</a
            >
          </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
.vl {
  border-left: 5px solid rgb(47, 44, 213);
  height: 40px;
}
</style>
