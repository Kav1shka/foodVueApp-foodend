<script>
export default {};
</script>

<template>
  <div class="h-full">
    <div class="border-b-2 block md:flex">
      <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div class="flex justify-between">
          <span class="text-xl font-semibold block">User Profile</span>
          <button>
            <div
              class="-mt-2 text-md font-bold text-white bg-blue-700 rounded-full px-5 py-2 hover:bg-blue-800"
            >
              Edit
            </div>
          </button>
        </div>

        <span class="text-gray-600"
          >This information is secret so be careful</span
        >
        <div class="w-full p-8 mx-2 flex justify-center">
          <img
            id="showImage"
            class="max-w-xs w-70 items-center border"
            src="./images/free-user-icon-3294-thumb.png"
            alt=""
          />
        </div>
      </div>

      <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
        <span class="text-gray-600 pt-4 block opacity-70"
          >Personal login information of your account</span
        >
        <div class="rounded shadow p-6">
          <div class="pb-6">
            <label for="name" class="font-semibold text-gray-700 block pb-1"
              >Name</label
            >
            <div class="flex">
              <input
                disabled
                id="username"
                class="border-1 rounded-r px-4 py-2 w-full"
                type="text"
                value="Jane Name"
              />
            </div>
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1"
              >Email</label
            >
            <div class="flex">
              <input
                disabled
                id="email"
                class="border-1 rounded-r px-4 py-2 w-full"
                type="email"
                value="example@example.com"
              />
            </div>
            <br />

            <div class="pb-4">
              <label for="about" class="font-semibold text-gray-700 block pb-1"
                >KDU ID</label
              >
              <div class="flex">
                <input
                  disabled
                  id="email"
                  class="border-1 rounded-r px-4 py-2 w-full"
                  type="email"
                  value="KDU ID"
                />
              </div>
            </div>
            <div class="pb-4">
              <label for="about" class="font-semibold text-gray-700 block pb-1"
                >Phone number</label
              >
              <div class="flex">
                <input
                  disabled
                  id="email"
                  class="border-1 rounded-r px-4 py-2 w-full"
                  type="email"
                  value="+94########"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
