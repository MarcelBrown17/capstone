<template>
  <section class="page-container">
    <div class="cart-container" v-if="cart.length">
      <div v-for="item in cart" :key="item.prodID" class="cart">
        <div class="product-image">
          <img :src="item.prodUrl" :alt="item.prodName" />
        </div>
        <div class="product-info">
          <h2>{{ item.prodName }}</h2>
          <p>{{ item.Category }}</p>
        </div>
        <div class="product-quantity">
          <input
            type="number"
            v-model="item.quantity"
            @input="updateQuantity(item)"
            class="quantity-input"
          />
        </div>
        <div class="product-amount">
          <p>R{{ item.price }}</p>
        </div>
        <div class="product-remove">
          <button @click="removeFromCart(item.prodID)" class="remove-button">
            Remove
          </button>
        </div>
      </div>
      <div class="greenwhich"></div>
      <div class="summary-container">
        <div class="summary">
          <h2>Cart Summary</h2>
          <div v-if="cart.length > 0">
            <ul>
              <li v-for="(item, index) in cart" :key="index">
                {{ item.prodName }} - R{{ item.price }} (Qty: {{ item.quantity }})
                <button @click="removeFromCart(item.prodID)" class="remove-button">
                  Remove
                </button>
              </li>
            </ul>
            <p>Total: R{{ cartTotal }}</p>
            <button @click="checkout">Checkout</button>
          </div>
          <div v-else>
            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart;
    },
    cartTotal() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(product_id) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      const updatedCart = cart.filter((item) => item.prodID !== product_id);

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      // You might consider using Vue's reactivity to update the cart without reloading the page.
    },

    updateQuantity(updatedItem) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex((item) => item.prodID === updatedItem.prodID);

      if (index !== -1) {
        cart[index].quantity = updatedItem.quantity;

        localStorage.setItem('cart', JSON.stringify(cart));
      }
    },

    checkout() {
      // Implement your checkout logic here
    },
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
  height: auto; /* Updated height to fit content */
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
