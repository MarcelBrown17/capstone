<template>
  <header>
    <div class="nav-container">
      <nav class="navbar navbar-dark bg-black fixed-top p-3">
        <div class="container-fluid">
          <div class="navbar-brand">
            Envy Essentials
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title fs-3" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-4">
                <li class="nav-item">
                  <router-link to="/home" class="nav-link" aria-current="page"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >Products</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin" class="nav-link" v-show="isAdmin">Admin</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/profile" class="nav-link"
                    >Profile</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/cart" class="nav-link">Cart</router-link>
                </li>
                <li class="nav-item">
                  <button @click="logout" class="logout">Log out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    userRole() {
      const user = this.$store.state.user;
      return user ? user.userRole : null;
    },
    isAdmin() {
      return this.userRole === "Admin";
    },
    SignedIn() {
      const userData = localStorage.getItem("user");
      return !!userData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData);
    }
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.commit("setUser", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>

.navbar-brand{
    font-size: 2.4rem !important;
  }
  .logout{
    background-color: transparent;
    border: none;
    color: white;
    margin: 0 !important;
    margin-left: 1 !important;
    padding: 0 !important;
  }
@media only screen and (max-width: 300px) {
  .navbar-brand{
    font-size: 1.7rem !important;
  }
}
</style>
