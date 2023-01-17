<template>
    <body class="bg-gray-800 overflow-y-hidden min-h-screen">
        <div v-if="!show" id="button" class="xl:container xl:mx-auto flex justify-center items-center md:py-12 md:px-6 px-4 py-9">
            <button @click="show=true" class="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded">Open Modal</button>
        </div>
        <div id="modal" v-if="show" class="xl:container xl:mx-auto flex justify-center items-center md:py-12 md:px-6 px-4 py-9">
            <div class="relative flex justify-center items-center flex-col bg-white p-4 md:p-6 lg:p-8">
                <div class="flex flex-col md:flex-row items-strech justify-center md:space-x-10 lg:py-10 lg:px-20">
                    <div class="w-full relative flex flex-col">
                        <div class="md:hidden my-4 flex w-full justify-end md:hidden">
                            <button onclick="closeModal()" aria-label="close modal" class="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <img class="w-full h-full object-cover object-center" src="https://i.ibb.co/LYMXRz2/pexels-ray-piedra-1464625-3.png" alt="shoes" role="img" />
                    </div>
                    <div class="lg:mt-0 w-full lg:w-1/2 mt-4 md:mt-0">
                        <div class="w-64 md:w-full">
                            <p class="text-sm text-gray-500 leading-3">WTC402078-10267084</p>
                            <h1 class="text-2xl font-semibold text-gray-800 mt-2 leading-6">White running shoes</h1>
                            <p class="mt-6 md:mt-4 text-xl md:text-2xl leading-5 md:leading-6 text-gray-800">$170</p>
                            <p class="mt-10 text-base leading-none text-gray-500">Colour</p>
                            <div class="flex flex-row justify-start space-x-2 mt-2">
                                <button aria-label="light gray" role="button" class="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-gray-300 rounded-full"></button>
                                <button aria-label="dark gray" role="button" class="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-gray-800 rounded-full"></button>
                                <button aria-label="Yellow" role="button" class="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-yellow-500 rounded-full"></button>
                                <button aria-label="Blue" role="button" class="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-blue-500 rounded-full"></button>
                            </div>
                            <p class="mt-6 text-base leading-none text-gray-500">Select a size</p>
                            <div class="flex justify-start items-start flex-row space-x-2 mt-2">
                                <button class="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">40</button>
                                <button class="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">41</button>
                                <button class="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">42</button>
                                <button class="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">43</button>
                                <button class="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">44</button>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center items-center mt-6 space-x-2">
                            <div class="w-full">
                                <button class="bg-gray-900 hover:bg-gray-800 text-base font-medium text-white text-center h-12 w-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Add to cart</button>
                            </div>
                            <div class="w-full">
                                <button class="bg-gray-900 hover:bg-gray-800 w-12 h-12 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button" aria-label="bookmark">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2916 14.7989L6.05348 17.142L6.86307 12.1792L3.42969 8.66491L8.16775 7.94284L10.2868 3.42773L12.4059 7.94284L17.144 8.66491L13.7106 12.1792L14.5202 17.142L10.2916 14.7989Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute top-6 right-6 le md:flex w-full justify-end hidden">
                    <button @click="show=false" aria-label="close modal" class="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>        
    </body>
</template>

<script>
export default {
    name: "component",
    data() {
        return {
            show: true,
        };
    },
    methods: {
        
    },
    mounted() {},
};
</script>

<style>

</style>
