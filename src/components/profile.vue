<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div className="hero min-h-screen" style="background-image: url('https://res.cloudinary.com/dxoyfttuj/image/upload/v1674356616/foods/profile_qchexl.jpg')">
    <div
      class="absolute sm:left-10 md:left-50 lg:left-80 max-w-lg p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
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
        <h3 class="text-lg font-medium leading-6 text-gray-900 text-center">User Profile</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 text-center">
          Personal details.
        </p>
      </div>
      <div class="mt-5 border-t border-gray-200">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              : {{ UserData.Name }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              : {{ UserData.Email }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
             : {{ UserData.Phone }}
            </dd>
          </div>
          <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt class="text-sm font-medium text-gray-500">KDU Reg number</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              : {{ UserData.KDU_ID }}
            </dd>
          </div>
        </dl>
        <br/>
        <button @click="gotoFeedback()" class="btn btn-warning absolute bottom-5 left-5 bg-orange-400 hover:bg-blue-400">Feedback</button>
        <button
        @click="Logout()"
         class="btn btn-error absolute bottom-5 right-5 bg-orange-400 hover:bg-blue-400">Log out</button>
      </div>
      <hr />
      <br />
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "UserData",
  data() {
    return {
      UserData: [],
    };
  },
  methods: {
    listCreate() {
      this.UserData = store.state.userDataList;
      console.log("User data ", this.UserData);
    },
    Logout(){
      store.dispatch("logout");
      this.$router.push('/SignIn');
    },
    gotoFeedback(){
      this.$router.push('/feedback');
    },
  },
  mounted() {
    this.listCreate();
  },
};
</script>
