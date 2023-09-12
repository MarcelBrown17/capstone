<template>
  <header>
    <div class="nav-container">
      <nav class="navbar navbar-dark bg-black fixed-top p-4">
        <div class="container-fluid">
          <div class="navbar-brand">
            <img
              src="https://i.postimg.cc/pr7ydDZp/Screenshot-2023-09-12-111142.png"
              class="logo"
            />
            <h1 class="navbar-brand1">Envy Essentials</h1>
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
                  <router-link to="/" class="nav-link" aria-current="page"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/products" class="nav-link"
                    >Products</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin" class="nav-link">Admin</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link"
                    >Contact</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/cart" class="nav-link">Cart</router-link>
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
export default {};
</script>

<style scoped>
.logo {
  height: 4rem;
  width: 4rem;
  float: left;
}
.navbar-brand {
  display: flex;
  text-align: left !important;
  float: left;
  gap: 3px;
  align-items: center !important;
}
.navbar-brand1 {
  padding-left: 1.5rem;
}
</style>
