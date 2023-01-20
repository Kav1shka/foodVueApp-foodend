<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white container mx-auto sm:px-6 lg:px-8">
    <br />
    <div class="flex justify-center">
      <span
        class="inline-block lg:h-44 lg:w-44 md:h-24 md:w-24 sm sm:h-14 sm:w-14 overflow-hidden rounded-full bg-gray-100"
      >
        <svg
          class="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
    </div>
    <div>
      <br />
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Applicant Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and application.
      </p>
    </div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ Name }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ Email }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-gray-500">Phone number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ Phone }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-gray-500">KDU Reg number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ KDU_ID }}
          </dd>
        </div>
      </dl>
    </div>
    <hr/>
    <br/>
  </div>
</template>

<script setup>
</script>
