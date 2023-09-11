<template>
  <div>
    <h1>Products</h1>
    <div class="flexed-display">
      <div class="sidebar">
        <h2>Sidebar</h2>
        <div class="navigation">
          <div class="sort">
            <label for="search">Sort by Price</label>
            <select name="sort" id="sort">
              <option value="lowest" id="lowest">Lowest</option>
              <option value="highest" id="highest">Highest</option>
            </select>
          </div>
          <div class="search">
            <!-- Search input and button -->
          </div>
        </div>
      </div>
      <div class="products-body">
        <div class="product-cards">
          <div class="container">
            <ul class="cards">
              <li
                class="card"
                v-for="product in products"
                :key="product.prodID"
              >
                <div>
                  <div class="image-container">
                    <img
                      :src="product.prodUrl"
                      :alt="product.prodName"
                      class="card-image"
                    />
                  </div>
                  <h3 class="card-title">{{ product.prodName }}</h3>
                  <p class="card-price">R {{ product.price }}</p>
                  <p class="card-category">{{ product.Category }}</p>
                  <!-- Add rating display here -->
                </div>
                <div class="card-link-wrapper">
                  <button class="view-btn" @click="viewProduct(product.prodID)">
                    View More
                  </button>
                  <button
                    class="add-to-cart-button"
                    @click="addToCart(product)"
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    viewProduct(prodID) {
      const selectedProduct = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSelectedProduct", selectedProduct);
      this.$router.push({ name: "single-product", params: { prodID: prodID } });
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
body {
  background-color: #ffffff;
}
h1 {
  margin-top: 6rem;
  margin-left: 2rem;
  color: #000000;
}
.flexed-display {
  display: flex;
  margin-top: 1.5rem;
}
.sidebar {
  position: relative;
  width: 20rem;
  background-color: #fbfbfb;
  padding: 20px;
  height: 40rem;
  margin-left: 2rem;
  border-radius: 10px;
  border: 5px solid black;
}

h2 {
  font-size: 32px;
  margin-bottom: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 25px;
  overflow-x: hidden;
}

.container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Create a grid with columns that adjust based on available space */
  gap: 20px;
}

.card {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  border: 3px solid black;
}

.card-image {
  margin: auto;
  max-width: 100%;
  height: 19rem;
}

.card-title {
  font-size: 20px;
}

.card-price {
  font-size: 18px;
  margin-top: 5px;
}
.card-category {
  font-size: 18px;
}

.card:hover {
  color: var(--white);
  background: var(--red);
}

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
}

.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  background: var(--red);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

button:hover {
  background-color: rgb(0, 0, 0);
  color: #ffffff;
}

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
  }
}

@media (min-width: 700px) {
  .card {
    flex-basis: calc(calc(100% / 3) - 20px);
  }
}

@media (min-width: 300px) {
  .card {
    flex-basis: calc(25% - 30px);
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center content text horizontally */
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center; /* Center image horizontally */
  align-items: center; /* Center image vertically */
  margin-bottom: 10px;
}
.add-to-cart-button {
  margin-left: 7px;
}
</style>
