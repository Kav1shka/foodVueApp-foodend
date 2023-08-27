<script>
export default {}
</script>

<template>
    <!-- component -->
<section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300 animate-fade animate-duration-[1000ms]">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.580972973649!2d79.8912325!3d6.820708500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b66800e4439%3A0x1098a6a07ff76e42!2sKDU%20cafeteria!5e0!3m2!1sen!2slk!4v1674432202937!5m2!1sen!2slk" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex animate-fade-left animate-duration-[1000ms]">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p class="leading-relaxed mb-5 text-gray-600">KDU Cafeteria</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Contact Number</label>
        <input type="text" disabled id="email" placeholder="+94 36########" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="message" disabled placeholder="General Sir John Kotelawala Defence University,Kandawala Road, Dehiwala-Mount Lavinia, 10390" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <p class="text-xs text-gray-500 mt-3">a</p>
    </div>
  </div>
</section>
</template>