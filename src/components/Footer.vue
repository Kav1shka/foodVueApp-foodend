<template>
    <footer class="p-4 bg-gray-600 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://res.cloudinary.com/dbblvdonh/image/upload/v1674363289/project%20food%20app/Crest-KDU_rkmvxd.png" class="mr-3 h-8" alt="KDU Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://www.kdu.ac.lk/" class="mr-4 hover:underline md:mr-6 text-orange-400 hover:text-blue-400 ">KDU Web </a>
            </li>
            <li><router-link to="/team">
                <a href="#" class="hover:underline text-orange-400 hover:text-blue-400">Meet Dev</a>
            </router-link>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-blue-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">KDU</a>. All Rights Reserved.
    </span>
</footer>
</template>
<script>
export default {};
</script>