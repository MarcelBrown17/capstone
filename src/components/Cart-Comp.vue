<template>
  <section class="page-container">
    <div class="cart-container" v-if="cart.length">
      <div v-for="item in cart" :key="item.prodID" class="cart">
        <div class="product-image">
          <img :src="item.prodUrl" :alt="item.prodName" id="image" />
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
      </div>
    </div>
    <div class="summary-container">
      <div class="summary">
        <h2>Cart Summary</h2>
        <div v-if="cart.length > 0">
          <ul>
            <li v-for="(item, index) in cart" :key="index">
              {{ item.prodName }} - R{{ item.price }} (Qty: {{ item.quantity }})
              <button
                @click="removeFromCart(item.prodID)"
                class="remove-button"
              >
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
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart;
    },
    cartTotal() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(product_id) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const updatedCart = cart.filter((item) => item.prodID !== product_id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // You might consider using Vue's reactivity to update the cart without reloading the page.
    },

    updateQuantity(updatedItem) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex(
        (item) => item.prodID === updatedItem.prodID
      );

      if (index !== -1) {
        cart[index].quantity = updatedItem.quantity;

        localStorage.setItem("cart", JSON.stringify(cart));
      }
    },

    checkout() {
      sweet('Success!', 'Items purchased successfully', 'success');

      localStorage.removeItem('cart');
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.page-container {
  display: flex;
  padding-top: 3rem;
  margin-top: 3rem;
  padding-bottom: 2rem;
  box-shadow: none !important;
}
body {
  background-color: black;
}
.summary {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 600px !important;
  height: 400px !important;
  text-align: center;
  padding: 20px;
  font-size: 25px !important;
  border-radius: 8px;
  margin-left: 11rem;
  box-shadow: none !important;
  
}
.summary-container{
  margin-top: 3rem;
}
.cart-container {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 600px !important;
  height: 400px !important;
  box-shadow: none !important;
}
.cart {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 800px !important;
  height: 400px !important;
  gap: 10px !important;
  box-shadow: none !important;
}
.product-image img {
  max-width: 300px;
  height: 250px;
  margin: auto !important;
}
.product-info {
  display: flex;
  gap: 1rem;
  margin: auto;
}
.product-info h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333333;
}
.product-info p {
  margin: 5px 0;
  color: #666666;
  font-size: 1.5rem;
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
  background-color: #000000;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #ffffff;
  border: 3px solid black;
  color: rgb(0, 0, 0);
}

@media only screen and (max-width: 300px) {
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 !important;
    box-shadow: none;
  }
  .cart {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: 100% !important;
    box-shadow: none;
    border: 3px solid black;
  }

  .cart-container {
    display: flex !important;
    flex-direction: column !important;
    width: 80% !important;
    height: 100% !important;
    margin-top: 5rem !important;
    margin: auto;
    box-shadow: none;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    box-shadow: none;
  }

  .summary-container {
    margin: auto !important;
    font-size: 10px !important;
    padding: 20px;
  }
  .summary {
    border: 3px solid black;
    margin: auto !important;
    display: flex;
    flex-direction: column;
    text-align: center !important;
    font-size: 15px !important;
    width: 90% !important;
    height: 100% !important;
    border-radius: 8px;
    padding: 10px;
  }

input {
  margin: auto !important;
  width: 99%;
}
  #image{
    width: 90% !important;
    height: 80%;
  }

  .remove-button{
    margin-left: 1rem !important;
  }
}
</style>
