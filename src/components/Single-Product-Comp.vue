<template>
  <div class="single-product">
    <h1>{{ selectedProduct.prodName }}</h1>
    <div class="product-details">
      <div class="product-image">
        <img :src="selectedProduct.prodUrl" :alt="selectedProduct.prodName" />
      </div>
      <div class="product-info">
        <p><strong>Price:</strong> R {{ selectedProduct.price }}</p>
        <p><strong>Category:</strong> {{ selectedProduct.Category }}</p>
        <!-- Add other product details here -->
        <button @click="addToCart(selectedProduct)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedProduct() {
      return this.$store.state.selectedProduct;
    },
  },
  methods: {
    addToCart(product) {
      // Implement your cart logic here
      // You can dispatch an action to add the product to the cart in your Vuex store
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles for the single product view here */
.product-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>

<style scoped>
body {
  min-height: 100vh;
  margin-top: 20rem !important;
}
.container {
  margin-top: 20rem;
}
.card {
  margin-top: 10rem;
  color: black;
  width: 30rem;
  height: 20rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
}
.card-img {
  flex: 1;
  padding: 1rem;
}
.product-image{
  height: 10rem;
  width: 10rem;
}
.example-img {
  max-width: 100%;
  max-height: 100%;
}
.card-info {
  flex: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.name {
  margin-bottom: 1rem;
}
.price {
  margin-bottom: 1rem;
}
.cart-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.cart-btn:hover {
  background-color: #0056b3;
}
</style>
