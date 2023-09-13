<template>
   <div class="signup-container">
    <h2 class="fw-bold display-5">Sign up to be first in line when Envy Essentials has sales.</h2>
    <form class="signup-form">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input
                        type="text"
                        id="firstName"
                        class="form-control"
                        v-model="payload.firstName"
                        required
                      />
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
                        type="text"
                        id="lastName"
                        class="lastname"
                        v-model="payload.lastName"
                        required
                      />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input
                        type="email"
                        id="emailAdd"
                        class="email"
                        v-model="payload.emailAdd"
                        required
                      />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                        type="password"
                        id="UserPass"
                        class="form-control"
                        v-model="payload.userPass"
                        required
                      />
        </div>
        <div class="form-group">
            <label for="role">Role</label>
            <input
                        type="text"
                        id="userRole"
                        class="form-control"
                        v-model="payload.userRole"
                        required
                      />
        </div>
        <div class="form-group">
            <label for="image">Image</label>
            <input
                        type="text"
                        id="lastName"
                        class="form-control"
                        v-model="payload.userImage"
                        required
                      />
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
    </form>
</div>

  </template>
  
  <script>
  import Spinner from './SpinnerComp.vue'
  export default {
    components:{Spinner},
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
  body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        font-size:20px;
    }
    .signup-container {
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color:#000;
        min-height: 100vh;
    }
    .signup-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .form-group label {
        font-weight: bold;
        margin-top: 34px;
    }
    .form-group input {
        padding: 10px;
        border: 0;
        border-radius: 0%;
        border-bottom: 2px solid #000;
        border-left: 2px solid #000;
        outline: none;
        background-color: #ffffff;
        margin-top:10px;
    }
    .form-group input:focus {
        border-color: grey;
    }
    .signup-button {
        grid-column: span 2;
        background-color: #000;
        color: #FFFFFF;
        border: 0;
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size:20px;
        margin-top: 55px;
    }
    .signup-button:hover {
        background-color: #ffffff;
        color:#000;
        font-weight:bold;
        border: 3px solid black;
    }
    label{
      font-size: 25px !important;
    }
  </style>


    