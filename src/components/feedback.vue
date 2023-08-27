<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!-- //   <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
//     <div class="sm:mx-auto sm:w-full sm:max-w-md">
//       <h2
//         class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
//       >
//         Give a FeedBack
//       </h2>
//     </div>

//     <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//       <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//         <form @submit.prevent="submitComment">
//           <div>
//             <label
//               for="password"
//               class="block text-sm font-medium text-gray-700"
//               >Add Your Comment</label
//             >
//             <div class="mt-1">
//               <textarea
//                 rows="4"
//                 name="comment"
//                 id="comment"
//                 class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div class="flex items-center justify-between"></div>
//           <div>
//             <button
//               type="submit"
//               class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div> -->
  <section>
    <div class="bg-white text-black py-20">
      <div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
        <div class="flex flex-col w-full lg:w-1/3 p-8">
          <p class="ml-6 text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
          <p class="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
            Leave us a feedback!
          </p>
          <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                Please provide your valuable feedback...
          </p>
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center ">
          <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center ">
              <div class="w-full lg:w-6/12 px-4">
                <div
                  class=" bg-slate-300 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
                >
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl mb-4 text-black font-semibold">
                      Have a suggestion?
                    </h4>
                    <form id="feedbackForm" action="" method="">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="email"
                          >Topic</label
                        ><input
                          type="text"
                          name="topic"
                          id="topic"
                          class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-200 placeholder-gray-500 text-gray-800 outline-none focus:bg-gray-400"
                          placeholder="Specific the item or service"
                          style="transition: all 0.15s ease 0s"
                          v-model="topic"
                          required
                        />
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="message"
                          >Message</label
                        ><textarea
                          maxlength="300"
                          name="feedback"
                          id="mfeedback"
                          rows="4"
                          cols="80"
                          class="border-0 px-3 py-3 bg-gray-200 placeholder-gray-500 text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                          placeholder="Enter your message"
                          v-model="mfeedback"
                          required
                        ></textarea>
                      </div>
                      <div class="text-center mt-6">
                        <button
                        @click="submitComment()"
                          id="feedbackBtn"
                          class="bg-orange-400 hover:bg-blue-400 text-black text-center mx-auto text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style="transition: all 0.15s ease 0s"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Page Loaded!");
  },
  data() {
    return {
      topic:"",
      mfeedback: "",
    };
  },

  methods: {
    submitComment() {
      axios
        .post("http://localhost:8000/feedback/feedbackPost", {
          topic: this.topic,
          mfeedback: this.mfeedback,

        })
        .then((response) => {
          console.log(response);
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response.data.errors) {
            this.errors = errors.response.data.errors;
          }
        });
      this.mfeedback = "";
      this.topic ="";
    },
  },
};
</script>
