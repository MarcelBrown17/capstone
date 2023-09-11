<template>
    <section class="" style="background-color: #000000">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 mb-2 mx-1 mx-md-4 mt-2">Sign up</p>
  
                    <form class="mx-1 mx-md-4" @submit.prevent="register">
                      <div class="mb-4">
                        <label class="form-label" for="firstName">Your Name</label>
                        <input
                          type="text"
                          id="firstName"
                          class="form-control"
                          v-model="payload.firstName"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="lastName">Your Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          class="form-control"
                          v-model="payload.lastName"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="emailAdd">Your Email</label>
                        <input
                          type="email"
                          id="emailAdd"
                          class="form-control"
                          v-model="payload.emailAdd"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="userRole">UserRole</label>
                        <input
                          type="text"
                          id="userRole"
                          class="form-control"
                          v-model="payload.userRole"
                          required
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="UserPass">Password</label>
                        <input
                          type="password"
                          id="UserPass"
                          class="form-control"
                          v-model="payload.userPass"
                          required
                        />
                      </div>
                      <div class="form-check mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="agreeCheckbox"
                          required
                        />
                        <label class="form-check-label" for="agreeCheckbox">
                          I agree to the <a href="#!">Terms of Service</a>
                        </label>
                      </div>
  
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                  >
                    <img
                      src="https://i.postimg.cc/1z0VSJ5Z/3764936.jpg"
                      class="img-fluid"
                      alt="image"
                    />
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
  import spinner from './SpinnerComp.vue'
  export default {
    components:{spinner},
      data() {
          return {
              payload: {
                  firstName: "",
                  lastName: "",
                  emailAdd: "",
                  userRole:"",
                  userPass: "",
                  userImage: "https://i.postimg.cc/mrpKtmZG/Screenshot-2023-09-07-124437-removebg-preview.png"
              }
          }
      },
      methods: {
          register() {
              this.$store.dispatch('register', this.payload)
          }
      }
  }
  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
  
  label {
    font-family: "Cinzel", serif;
    color: white;
  }
  
  p {
    font-family: "Cinzel", serif;
    color: white;
  }
  
  .link {
    text-decoration: none;
  }
  
  input {
      font-family: "Cinzel", serif;
      color: black;
  }
  
  p {
    position: relative;
    bottom: 3%;
  }
  
  form {
      height: 100%;
  }
  .card {
    background-color: black;
  }
  body {
    background-color: black !important;
  }
  
  .btn {
    color: white;
    background-color: black;
    border: 1px solid white;
    font-family: "Cinzel", serif;
  }
  
  .btn:hover {
    transition: 0.3s;
    transform: scaleX(1);
    box-shadow: 0 0 4px white;
    background-color: white;
    color: black;
  }
  html {
      background-color: black !important;
        height: 100%;
        }
  
  
  
  
  
  </style>