<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Page Loaded!");
  },
  data() {
    return {
      Name: "",
      Email: "",
      Phone: "",
      KDU_ID: "",
      password: "",
      cf_password: "",
      errors: "",
      };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/customer/register", {
          Name: this.Name,
          Email: this.Email,
          Phone: this.Phone,
          KDU_ID: this.KDU_ID,
          password: this.password,
          cf_password: this.cf_password,
        })
        .then((response) => {
          console.log(response);
          if (response.request.statusText) {
            this.statusText = response.request.statusText;
          this.$router.push({ name: "SignIn" });

          }
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response.data.message) {
            this.errors = errors.response.data.message;
          }
        });
      this.Name = "";
      this.Email = "";
      this.Phone = "";
      this.KDU_ID = "";
      this.password = "";
      this.cf_password = "";
    },
  },
};
</script>
<template>
  <div className="hero min-h-screen bg-base-200" style="background-image: url('https://res.cloudinary.com/dbblvdonh/image/upload/v1674444646/vintage-old-rustic-cutlery-dark_1220-4886_fmry9u.webp')">
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl text-white font-bold">Register now!</h1>
        <p className="py-6 text-white">Food app details!</p>
        <div v-if="errors" class="alert alert-error shadow-lg">
          <div>
            <span>😕 {{ errors }}</span>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                v-model="Name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                v-model="Email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="input input-bordered"
                v-model="Phone"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">KDU ID</span>
              </label>
              <input
                type="text"
                placeholder="KDU ID"
                className="input input-bordered"
                v-model="KDU_ID"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                v-model="cf_password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">SignUp</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
