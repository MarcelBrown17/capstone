<template>
  <section class="page-container">
    <div class="cart-container">
      <div class="product-image">
        <img :src="product.prodUrl" :alt="product.prodName" />
      </div>
      <div class="product-info">
        <h2>{{ product.prodName }}</h2>
        <p>{{ product.Category }}</p>
      </div>
      <div class="product-amount">
        <p>R {{ product.price }}</p>
      </div>
    </div>
    <div class="greenwhich"></div>
    <div class="summary-container">
      <div class="summary">
        <h2>Cart Summary</h2>
        <div v-if="cart.length > 0">
          <ul>
            <li v-for="(item, index) in cart" :key="index">
              {{ item.prodName }} - $ {{ item.price }} (Qty:
              {{ item.quantity }})
              <button @click="removeFromCart(item.prodID)">Remove</button>
            </li>
          </ul>
          <p>Total: $ {{ calculateTotal() }}</p>
          <button @click="checkout">Checkout</button>
        </div>
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        prodName: "",
        Category: "",
        price: 0,
        prodUrl: "",
      },
      cart: [],
    };
  },
  methods: {
    async fetchCartData() {
      try {
        const response = await axios.get(
          "https://envyessentials.onrender.com/cart"
        );

        if (response.status === 200) {
          this.cart = response.data;
        } else {
          console.error("Failed to fetch cart data.");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    },
    addToCart(product) {
      const existingItem = this.cart.find(
        (item) => item.prodID === product.prodID
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(prodID) {
      const index = this.cart.findIndex((item) => item.prodID === prodID);

      if (index !== -1) {
        if (this.cart[index].quantity > 0) {
          this.cart[index].quantity--;
          if (this.cart[index].quantity === 0) {
            this.cart.splice(index, 1);
          }
        }
      }
    },
    calculateTotal() {
      return this.cart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
    async checkout() {
      try {
        const checkoutEndpoint = "https://envyessentials.onrender.com/cart";

        const orderData = {
          items: this.cart.map((item) => ({
            id: item.prodID,
            name: item.prodName,
            category: item.Category,
            price: item.price,
            quantity: item.quantity,
          })),
          total: this.calculateTotal(),
        };
        const response = await axios.post(checkoutEndpoint, orderData);

        if (response.status === 200) {
          alert("Checkout successful!");
          this.cart = [];
        } else {
          alert("Checkout failed. Please try again later.");
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        alert("An error occurred during checkout.");
      }
    },
  },
  created() {
    this.fetchCartData();
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  padding-top: 8rem;
  padding-bottom: 2rem;
  justify-content: center;
}

body {
  background-color: black;
}

.greenwhich {
  padding: 30px;
}

.summary {
  display: flex;
  flex-direction: column;
  background-color: #ffecec;
  width: 300px;
  height: 400px;
}

.cart-container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 900px;
  height: 250px;
}

.product-image img {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-info {
  flex-grow: 1;
}

.product-info h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333333;
}

.product-info p {
  margin: 5px 0;
  color: #666666;
}

.product-amount {
  text-align: right;
}

.product-amount p {
  margin: 0;
  font-size: 1.2rem;
  color: #333333;
}

/* Cart summary styles */
.cart-container {
  width: auto;
  height: auto;
  flex-direction: column;
}

.summary {
  width: auto;
  height: auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

button {
  background-color: #c70000;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #990000;
}
</style>
