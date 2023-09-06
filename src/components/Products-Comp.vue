<template>
  <body>
    <h1>Products</h1>
    <div class="flexed-display">
      <div class="sidebar">
        <h2>Sidebar</h2>
      </div>
      <div class="products-body">
        <div class="product-cards" v-if="filteredProducts.length > 0">
          <div class="container">
            <ul class="cards">
              <!-- Loop through your products and display each one using the card template -->
              <li class="card" v-for="product in filteredProducts" :key="product.prodID">
                <div>
                  <h3 class="card-title">{{ product.prodName }}</h3>
                  <div class="card-content">
                    <p>{{ product.description }}</p>
                  </div>
                </div>
                <div class="card-link-wrapper">
                  <!-- Link to a product detail page or any other action you want -->
                  <a @click="viewSingle(product.prodID)" class="card-link">Learn More</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <Spinner></Spinner>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import Spinner from '@/components/Spinner.vue';

export default {
  components: { Spinner },
  data() {
    return {
      products: [],
      selectedSort: "lowest",
      searchInput: "",
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
    sortProducts() {
      if (this.selectedSort === "lowest") {
        this.products.sort((a, b) => a.amount - b.amount);
      } else if (this.selectedSort === "highest") {
        this.products.sort((a, b) => b.amount - a.amount);
      }
    },
    filterProducts() {
      const searchQuery = this.searchInput.toLowerCase();
      this.products = this.products.filter(
        (product) =>
          product.prodName.toLowerCase().includes(searchQuery) ||
          product.Category.toLowerCase().includes(searchQuery)
      );
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

.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  border: 3px solid black;
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
