<script>
import axios from "axios";
import store from "../store";
import Swal from 'sweetalert2';
export default {
  mounted() {
    console.log("component mounted");
  },
  data() {
    return {
      email: "",
      password: "",
      response: "",
      errors: "",
    };
  },

  beforeRouteEnter (to, from, next){
    console.log(from.query.redirectFrom);
    if (to.query.redirectFrom === "/dashboard"){
      next(Swal.fire(
          'Sorry!!!',
          'You have to signIn first',
          'warning'
        ))
    }
    else{
      next()
    }
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/customer/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          const success = response.data.success;
          this.response = response;
          localStorage.setItem('accessToken',response.data.token);
          store.dispatch("fetchAccessToken");
          store.dispatch("setaccessToken");
          this.$router.push({ name: "category" });

        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response.data.errors) {
            this.errors = errors.response.data.errors;
          }
        });
      this.email = "";
      this.password = "";
    },
    goToSignup() {
      this.$router.push({ name: "SignUp" });
    },

    logAlert:function(){
      store.dispatch('signInVisited');
      if(store.state.isLoggedIn === true){
        Swal.fire(
          'Already Loged in!',
          'Go to Dashboard',
          'success'
        )
      }
    }
  },
  beforeMount(){
  this.logAlert();
}
};
</script>

<template>
  <div className="hero min-h-screen" style="background-image: url('https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl text-white font-bold">Login now!</h1>
        <p className="py-6 text-white">Healthy foods to eat everyday!</p>
        <hr />
        <p className="text-white">Don't have an account?</p>
        <button className="btn btn-primary" @click="goToSignup()">Sign Up</button>
        <div v-if="errors">
        <br/>
        <div class="alert alert-error shadow-lg">
          <div>
            <span>😕 <b>{{ errors }}</b></span>
          </div>
        </div>
      </div>
      </div>
      <form @submit.prevent="submitForm">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                v-model="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                v-model="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">SignIn</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
