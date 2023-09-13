<template>
  <section class="body">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6" id="img-container">
          <img
            src="https://i.postimg.cc/Rhj0g1zn/ed4ae956086fac8e0cbf315cf140b34e.jpg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h1 class="heading" id="heading">Envy Essentials</h1>
          <label class="form-label" for="form1Example13">Email</label>
          <form method="post">
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form1Example13"
                class="form-control form-control-lg"
                v-model="payload.emailAdd"
                required
                placeholder="Email"
              />
             
            </div>
            <label class="form-label" for="form1Example23">Password</label>
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form1Example23"
                class="form-control form-control-lg"
                v-model="payload.userPass"
                required
                placeholder="Password"
              />
           
            </div>

            <!-- Submit button -->
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
              @click.prevent="login" :disabled="loading"
            >
              <span class="SignIn" v-if="!loading">Sign in</span>
              <spinner v-else></spinner>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Spinner from './SpinnerComp.vue';
export default {
  components:{Spinner},
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
      loading: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async login() {
      this.loading = true;

      try {
       await this.$store.dispatch('login', this.payload);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Well done');
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
<style scoped>
.SignIn{
  margin: auto;
}
.body {
  background-color: rgb(183, 177, 177);
}
#heading {
  margin-bottom: 4rem;
  font-weight: bold !important;
}
label {
  color: rgb(0, 0, 0);
}

.btn {
  color: rgb(255, 255, 255);
  background-color: black;
  border: 1px solid white;
  font-family: "Cinzel", serif;
}

.btn:hover {
  transition: 0.3s;
  transform: scaleX(1);
  box-shadow: 0 0 4px rgb(0, 0, 0);
  background-color: white;
  color: black;
  border: 2px solid black;
}
input {
  border: 3px solid black !important;
  background-color: rgb(183, 177, 177) !important;
}
.img-fluid {
  height: 40rem;
  width: 32rem;
}
@media only screen and (max-width: 300px) {
  form {
    height: 15.67rem !important;
  }

  .img-fluid {
    width: 17rem !important;
    height: 21rem;
    margin-top: 0;
    padding: 0;
    margin-bottom: 1rem;
  }
  #heading {
    margin-bottom: 0rem !;
  }
}
</style>
