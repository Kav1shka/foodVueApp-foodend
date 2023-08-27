<script>
import store from "../store";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
var cardCVV;
export default {
  name: "CartItems",
  data() {
    return {
      cartItems: [],
      finalOrder: [],
      foodList: [],
      holderName: "",
      cardNumber: "",
      year: "",
      month: "",
      cvv: "",
      cardType: "",
      error: "",
      cardCVV:"",
      cardNum:"",
      cardDate:"",
      cardT:"",
    };
  },
  methods: {
    openMenu() {
      menu.classList.remove("w-0", "h-0", "opacity-0");
      menu.classList.add("w-screen", "h-screen", "opacity-95");
    },
    closeMenu() {
      menu.classList.remove("w-screen", "h-screen", "opacity-95");
      menu.classList.add("w-0", "h-0", "opacity-0");
    },

    listCreate() {
      this.cartItems = store.state.cartList;
      console.log("Cart List ", this.cartItems);
    },
    deleteItem() {
      console.log("test button");
    },
    show() {
      console.log("Updated List : ", cartItems);
    },
    updateAmount(id, amount) {
      const updatedList = this.cartItems;
      console.log(id, amount);
      store.dispatch("updateList", updatedList);
      console.log(this.cartItems);
    },
    cardvalidate() {
      //CARD TYPE CHECK
      this.error = "";
      if (document.getElementById("visa").checked) {
        this.cardType = document.getElementById("visa").value;
        var cardT = "OK";
      } else if (document.getElementById("master").checked) {
        this.cardType = document.getElementById("master").value;
        var cardT = "OK";
      } else {
        this.error = "You have not selected any card type!";
      }
      console.log(this.error, cardT);
      //CARD DATE CHECK
      var monthName = this.month;
      const sanitizedMonthName = monthName.trim().toLowerCase();
      var monthNumber;
      switch (sanitizedMonthName) {
        case "january":
          monthNumber = 1;
          break;
        case "february":
          monthNumber = 2;
          break;
        case "march":
          monthNumber = 3;
          break;
        case "april":
          monthNumber = 4;
          break;
        case "may":
          monthNumber = 5;
          break;
        case "june":
          monthNumber = 6;
          break;
        case "july":
          monthNumber = 7;
          break;
        case "august":
          monthNumber = 8;
          break;
        case "september":
          monthNumber = 9;
          break;
        case "october":
          monthNumber = 10;
          break;
        case "november":
          monthNumber = 11;
          break;
        case "december":
          monthNumber = 12;
          break;
        default:
          monthNumber = null;
      }
      const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
      const d = new Date();
      var name = months[d.getMonth()];
      var nowYear = d.getFullYear();
      if (nowYear < this.year) {
        var cardDate = "OK";
      } else if (nowYear == this.year && monthNumber > name) {
        cardDate = "OK";
      } else {
        this.error = "Card is expired!";
      }
      console.log(this.error, cardDate);
      // CARD NUMBBER CHECK

      var cardNumberLegth = this.cardNumber.toString().length;
      var defaultLength = 16;
      console.log(cardNumberLegth);
      if (
        cardNumberLegth == defaultLength &&
        this.cardNumber == 1111222233334444
      ) {
        var cardNum = "OK";
      } else {
        this.error = "Invalid Number!";
      }
      console.log(this.error, cardNum);

      //CVV CHECK
      var cvvLength = this.cvv.toString().length;
      console.log(cvvLength);
      var cvvdefault = 3;
      if (cvvLength == cvvdefault && this.cvv == 321) {
        cardCVV = "OK";
      } else {
        this.error = "Invalid CVV !";
      }
      console.log(this.error, cardCVV);

      console.log(
        this.error + monthNumber + this.year + name + " " + cardNumberLegth
      );
      if(this.error !== "")
      toast.error(this.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      this.setOrder();
    },
    setOrder() {
      if (this.error == "") {
        this.createOrder();
      } else {
        toast.error("Payment failed !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    createOrder() {
      this.finalOrder = this.cartItems;
      console.log(this.finalOrder);
      axios
        .post("http://localhost:8000/orderDetails/order/new", {
          itemList: this.finalOrder,
          CustomerName: store.state.userDataList.Name,
          Email: store.state.userDataList.Email,
          KDU_ID: store.state.userDataList.KDU_ID,
          totalprice: this.sum,
          isPaid: true,
          paidAt: Date,
          isPlaced: true,
        })
        .then((response) => {
          console.log(response);
          store.dispatch("clearCart");
          this.cartItems = [];
          if(response.request.status == 201){
            toast.success("Order Placed Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    this.listCreate();
    var menu = document.getElementById("menu");
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
  <!-- Implement the overlay menu -->
  <div
    id="menu"
    :class="'fixed z-20 w-0 h-0 flex justify-center items-center bg-gray-900 opacity-0 duration-700'"
  >
    <a
      href="javascript:void(0)"
      class="fixed top-6 right-8 text-orange-400 hover:text-blue-400 text-7xl font-semibold duration-300"
      @click="closeMenu()"
      >&times;</a
    >
    <div class="flex align-left items-center min-h-auto">
      <div class="z-40 h-auto w-auto bg-white p-5 rounded-lg">
        <p class="text-xl font-semibold">Payment Details</p>
        <form @submit.prevent="submitForm">
          <h3>Select Card Type</h3>
          <div class="grid grid-cols-2">
            <div class="items-center">
              <input type="radio" id="visa" name="cardType" value="VISA" />
              <label for="visa"
                ><img src="./images/visa.png" class="w-8 h-8"
              /></label>
            </div>
            <div>
              <input type="radio" id="master" name="cardType" value="MASTER" />
              <label for="master"
                ><img src="./images/master.png" class="w-12 h-12"
              /></label>
            </div>
          </div>
          <div class="input_text mt-6 relative">
            <label for="holdername">Cardholder Name</label>
            <input
              type="text"
              id="holdername"
              class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b"
              placeholder="John Row"
              v-model="holderName"
              required
            />
          </div>
          <div class="input_text mt-8 relative">
            <label for="cardnumber">Card Number</label>
            <input
              type="number"
              id="cardnumber"
              class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b"
              placeholder="0000 0000 0000 0000"
              data-slots="0"
              data-accept="\d"
              maxlength="16"
              v-model="cardNumber"
              required
            />
          </div>
          <div class="mt-8 flex gap-5">
            <div class="form-group" id="exdate">
              <label for="exdate">Expiry Date</label>
              <select name="month" id="month" v-model="month">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select name="year" id="year" v-model="year">
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
            </div>
            <div class="input_text relative w-full">
              <label for="cvv">CVV</label>
              <input
                id="cvv"
                type="number"
                class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b"
                placeholder="000"
                data-slots="0"
                data-accept="\d"
                maxlength="3"
                v-model="cvv"
                required
              />
            </div>
          </div>
          <p class="text-lg text-center mt-4 text-gray-600 font-semibold">
            Payment amount: LKR {{ sum }}
          </p>
          <div class="flex justify-center mt-4">
            <button
              type="submit"
              @click="cardvalidate()"
              class="outline-none pay h-12 bg-orange-400 text-white mb-3 hover:bg-blue-400 rounded-lg w-1/2 cursor-pointer transition-all"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>
      <form
        class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 animate-fade-up animate-duration-[1000ms]"
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
                      @change="updateAmount(cartItem.foodID, cartItem.Amount)"
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      v-model="cartItem.Amount"
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
              <dd class="text-base font-medium text-gray-900">LKR {{ sum }}</dd>
            </div>
          </dl>

          <div class="mt-6">
            <button
              @click="openMenu()"
              type="button"
              class="w-full rounded-md border border-transparent bg-orange-400 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
