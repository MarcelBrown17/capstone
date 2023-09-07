<template>
  <div class="container">
    <div class="card">
      <div class="card-img">
        <img :src="product.prodUrl" :alt="product.prodName" class="example-img">
      </div>
      <div class="card-info">
        <div class="name">
          <h4>{{ product.prodName }}</h4>
        </div>
        <div class="price">
          <h5>R {{ product.amount }}</h5>
        </div>
        <div class="cart">
          <button @click="addToCart(product)" type="button" class="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchProductDetails() {
      const prodID = this.$route.params.prodID;
      try {
        const response = await axios.get(`https://envyessentials.onrender.com/product/${prodID}`);
        this.product = response.data.result;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      this.$emit('add-to-cart', product);
    },
  },
  created() {
    this.fetchProductDetails();
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>

  <style scoped>
  .container{
  margin-top:20rem;
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
  