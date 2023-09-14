<template>
    <!-- Footer -->
<footer class="text-center text-lg-start text-light bg-black">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Envy Essentials
          </h6>
          <p>
          Elevate your elegance.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" id="sec-nav">
          <!-- Links -->
          <div class="links">
            <h6 class="text-uppercase fw-bold mb-4">
            Navigation
          </h6>
          <p>
          <router-link to="/home" class="
          link">Home</router-link>
          </p>
          <p>
            <router-link to="products" class="link">Products</router-link>
          </p>
          <p>
            <router-link to="about" class="link">About</router-link>
          </p>
          <p>
            <router-link to="contact" class="link">Contact</router-link>
          </p>
          </div>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <div>
            <p class="text-reset">Formal Wear</p>
          </div>
          <div>
            <p class="text-reset">Delivery</p>
          </div>
          <div>
            <p class="text-reset">Quality Control</p>
          </div>
          <div>
            <p class="text-reset">Fashion</p>
          </div>
        
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Cape Town, South Africa</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            enyessentials@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2015Copyright:
    <span class="text-reset fw-bold" href="" id="rowan">EnvyEssentials</span>
  </div>
  <!-- Copyright -->
</footer>

</template>

<script>
export default{
    
}
</script>

<style scoped>
.link{
  text-decoration: none !important;
  color: white;
}

#rowan{
text-decoration: none !important;
}
</style>