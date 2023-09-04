<template>
  <NavBarComp />
  <div class="product-page">
    <div class="product-images">
      <img
        v-for="(image, index) in productImages"
        :key="index"
        :src="image"
        :alt="`Product Image ${index + 1}`"
      />
    </div>
    <div class="product-details">
      <div class="product-card">
        <!-- Product information goes here -->
        <h2>Product Name</h2>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Price: $99.99</p>
        <!-- Add more product details as needed -->
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import FooterComp from "../components/Footer-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";
export default {
  components: { NavBarComp, FooterComp },
};
</script>

<style scoped>
.product-page {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-images img {
  width: 100%;
  max-width: 300px; /* Adjust the maximum width as needed */
  margin-bottom: 10px; /* Space between images */
}

.product-details {
  flex: 1;
  padding: 20px;
}

.product-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

/* Add more styling for the product details as needed */
</style>
