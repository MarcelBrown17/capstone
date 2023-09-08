<template>
  <div>
    <h1>Products</h1>
    <div class="flexed-display">
      <div class="sidebar">
        <h2>Sidebar</h2>
        <div class="navigation">
    <div class="sort">
      <label for="search">Sort by Price</label>
      <select
        name="sort"
        id="sort"
        v-model="selectedSort"
        @change="sortProducts"
      >
        <option value="lowest" id="lowest">Lowest</option>
        <option value="highest" id="highest">Highest</option>
      </select>
    </div>
    <div class="search">
      <div class="icon">
        <img
          src="https://i.postimg.cc/Qd5jtmBR/icons8-search-50-removebg-preview.png"
          alt="icon"
          class="icon"
        />
      </div>
      <div class="search-bar">
        <label for="search">Search</label>
        <input
          type="text"
          class="type-s"
          placeholder="Name of item"
          v-model="searchInput"
        />
        <button type="submit" class="btn" @click="filterProducts()">
          <img
            src="https://i.postimg.cc/Qd5jtmBR/icons8-search-50-removebg-preview.png"
            alt="search-img"
            class="search-img"
          />
        </button>
      </div>
    </div>
  </div>

      </div>
      <div class="products-body">
        <div class="product-cards" v-if="filteredProducts.length > 0">
          <div class="container">
            <ul class="cards">
              <!-- Loop through your products and display each one using the card template -->
              <li
              class="card"
        v-for="product in products"
        :key="product.prodID"
        :product="product"
              >
                <div>
                  <img
                    :src="product.prodUrl"
                    alt="product.prodName"
                    class="card-image"
                  />
                  <h3 class="card-title">{{ product.prodName }}</h3>
                  <p class="card-price">$ {{ product.price }}</p>
                  <!-- Add rating display here -->
                </div>
                <div class="card-link-wrapper">
                  <button class="view-btn">
                    <router-link
                      class="single"
                      :to="{
                        name: 'single-product',
                        params: { id: product.prodID },
                      }"
                    >
                      View More
                    </router-link>
                  </button>
                  <button
                    @click="addToCart(product)"
                    class="add-to-cart-button"
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <spinner>
          <p>Loading...</p>
        </spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import spinner from "./SpinnerComp.vue";

export default {
  components: { spinner },
  data() {
    return {
      products: [],
      searchInput: "",
      cart: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://envyessentials.onrender.com/products"
        );
        this.products = response.data.results;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    addToCart(product) {
      if (!this.cart) {
        this.cart = [];
      }

      const existingItem = this.cart.find((item) => item.prodID === product.prodID);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      console.log('Product added to cart:', this.cart);
    },
    viewSingle(prodID) {
      const singleProduct = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSingleProduct", singleProduct);
      this.$router.push({ name: "single-product", params: { prodID: prodID } });
    },
  },
  computed: {
    filteredProducts() {
      if (this.searchInput) {
        return this.products.filter((product) =>
          product.prodName
            .toLowerCase()
            .includes(this.searchInput.toLowerCase())
        );
      } else {
        return this.products;
      }
    },
  },
  mounted() {
    this.fetchProducts();
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
  gap: 20px; /* Add some spacing between cards */
}

.card {
  /* No specific width needed for each card; they'll automatically adjust within the grid */
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  border: 3px solid black;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.card-title {
  font-size: 20px;
}

.card-price {
  font-size: 18px;
  margin-top: 5px;
}

.card-link {
  background-color: #c70000;
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

.card-link:hover {
  background-color: rgb(66, 66, 66);
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

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(25% - 30px);
  }
}
</style>
