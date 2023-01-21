<script>
import store from "../store";

export default {
  name: "CartItems",
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    listCreate() {
      this.cartItems = store.state.cartList;
      console.log("Cart List ", this.cartItems);
    },
  },
  mounted() {
    this.listCreate();
  },
  computed: {
    sum() {
      return this.cartItems.reduce(
        (total, cartItem) => total + cartItem.foodPrice * cartItem.Amount,
        0
      );
    },
  },
};
</script>
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>
      <form
        class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
      >
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul
            role="list"
            class="divide-y divide-gray-200 border-t border-b border-gray-200"
          >
            <li
              v-for="cartItem in cartItems"
              :key="cartItem.foodID"
              class="flex py-6 sm:py-10"
            >
              <div class="flex-shrink-0">
                <img
                  :src="cartItem.image_URL"
                  :alt="image"
                  class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div
                  class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                >
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <div
                          class="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {{ cartItem.foodName }}
                        </div>
                      </h3>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">
                      {{ cartItem.foodPrice }}
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <select
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>

                    <div class="absolute top-0 right-0">
                      <button
                        type="button"
                        class="-m-2 inline-flex p-2 text-red-400 hover:text-red-900"
                      >Remove
                        <span class="sr-only">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div v-for="cartItem in cartItems" :key="cartItem.foodID">
              <dt class="text-sm text-gray-600">
                {{ cartItem.foodName }}
                <div class="float-right">
                  {{ cartItem.Amount }}&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;{{
                    cartItem.foodPrice
                  }}
                </div>
              </dt>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">LKR {{ sum }}</dd>
            </div>
            <div
              class="flex items-center justify-between border-t border-gray-200 pt-4"
            >
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
              </dt>
              <dd class="text-sm font-medium text-gray-900">LKR 0.00</dd>
            </div>
            <div
              class="flex items-center justify-between border-t border-gray-200 pt-4"
            >
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">
                LKR {{ sum }}
              </dd>
            </div>
          </dl>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
