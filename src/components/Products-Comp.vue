<template>
  <h1>Products</h1>
  <div class="flexed-display">
    <!-- Sidebar starts here -->
    <div class="sidebar">
      <h2>Filter</h2>
      <div class="navigation">
        <div class="search-bar mb-0 p-0">
          <label for="search">Search</label>
          <input
            type="text"
            class="type-s"
            placeholder="Name of item"
            v-model="searchInput"
          />
          <button type="submit" class="btn" @click="filterProducts()"></button>
        </div>
        <div class="sort mt-0 pt-0">
          <label for="search">Sort by Price</label>
          <select
            name="price"
            id="price"
            v-model="selectedSort"
            @change="sortProducts"
          >
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div class="sort">
          <label for="search">Filter</label>
          <select name="Category" id="Category" class="Category" v-model="selectedCategory" @change="filterProductsByCategory">
              <option value="">All Categories</option>
              <option value="jacket">Suit</option>
              <option value="golfer">Golfer</option>
              <option value="pants">Pants</option>
              <option value="dress">Dress</option>
              <option value="shirt">Shirt</option>
            </select>
        </div>
        <div class="Categories">
          <h2>Categories</h2>
          <p>Pants</p>
          <p>Golfer</p>
          <p>Shirt</p>
          <p>Jacket</p>
          <p>Dress</p>
        </div>
      </div>
      <!-- Sidebar ends here-->
    </div>
    <div class="products-body">
      <div class="product-cards">
        <div>
          <div class="container">
            <ul class="cards" v-if="productsList && productsList.length > 0">
              <li
                class="card"
                v-for="product in filteredProductList"
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
                  <router-link
                    class="text-black"
                    id="view-more"
                    :to="{
                      name: 'product',
                      params: { prodID: product.prodID },
                      query: {
                        prodName: product.prodName,
                        price: product.price,
                        Category: product.Category,
                        prodUrl: product.prodUrl,
                        imageUrl2: product.imageUrl2,
                        imageUrl3: product.imageUrl3,
                        imageUrl4: product.imageUrl4,
                      },
                    }"
                    ><button class="view-more">View More</button>
                  </router-link>

                 <router-link id="view-more"
                    :to="{
                      name: 'product',
                      params: { prodID: product.prodID },
                      query: {
                        prodName: product.prodName,
                        price: product.price,
                        Category: product.Category,
                        prodUrl: product.prodUrl,
                        imageUrl2: product.imageUrl2,
                        imageUrl3: product.imageUrl3,
                        imageUrl4: product.imageUrl4,
                      },
                    }"><button
                    class="add-to-cart-button"
                    
                  >
                    Add to Cart
                  </button></router-link>
                </div>
              </li>
            </ul>
            <spinner v-else></spinner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "./SpinnerComp.vue";

export default {
  components: { Spinner },
  data() {
    return {
      searchInput: "",
      selectedCategory: "",
      selectedSort: "lowest",
    };
  },
   computed: {
    productsList() {
      return this.$store.state.products;
    },
    filteredProductList() {
      const searchQuery = this.searchInput.toLowerCase();
      let filteredList = this.productsList.filter((product) => {
        const prodName = product.prodName.toLowerCase();
        const Category = product.Category.toLowerCase();
        return (
          (prodName.includes(searchQuery) || Category.includes(searchQuery)) &&
          (this.selectedCategory === "" || Category === this.selectedCategory)
        );
      });

      if (this.selectedSort === "lowest") {
        filteredList = filteredList.sort((a, b) => a.price - b.price);
      } else if (this.selectedSort === "highest") {
        filteredList = filteredList.sort((a, b) => b.price - a.price);
      }

      return filteredList;
    },
  },
  methods: {
    sortProducts() {
    },
    filterProductsByCategory() {
    },
    getBrands() {
      const CategorySet = new Set();
      this.productsList.forEach((product) => {
        CategorySet.add(product.Category);
      });
      return Array.from(CategorySet);
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
  min-height: 100vh;
}
h1 {
  margin-top: 8rem;
  margin-left: 2rem;
  color: #000000;
}
.search-bar {
  margin-bottom: 0.5rem !important;
}
input {
  border: 1px solid black;
}
select {
  border: 1px solid black;
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
  display: flex;
  flex-direction: column; /* Stack child elements vertically */
  justify-content: flex-start; /* Align children at the top */
}

h2 {
  font-size: 32px;
  margin-bottom: 1rem;
  align-self: center; /* Center the heading horizontally within the sidebar */
}

label {
  margin-right: 6px !important;
}
.navigation {
  flex-grow: 1; /* Allow the navigation section to grow and occupy available space */
}

.search-bar,
.sort,
.Categories {
  margin-bottom: 0.5rem;
}

label {
  font-size: 18px;
}

.Categories p {
  margin: 0;
  padding: 0;
  font-size: 19px;
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

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
}

.card .card-link-wrapper {
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  background: var(--red);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}
.card button {
  border-radius: 5px !important;
  padding: 6px !important;
  color: #ffffff;
  background-color: rgb(0, 0, 0);
}
.card button:hover {
  background-color: rgb(255, 255, 255);
  color: #000000;
  border: 3px solid black;
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
#view-more {
  text-decoration: none;
}

@media only screen and (max-width: 300px) {
  .card {
    flex-basis: 80% !important;
  }

  .flexed-display {
    display: flex;
    flex-direction: column;
    margin: auto !important;
  }
  .sidebar {
    width: 80%;
  }
  .cards {
    display: flex;
    flex-direction: column;
    padding: 25px;
    overflow-x: hidden;
    list-style-type: none;
  }

  .container {
    display: block;
  }

  .card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    border: 3px solid black;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  img{
    height: 16rem !important;
  }
  .add-to-cart-button {
    margin:auto !important;
    margin-top: 5px !important;
  
  }
  #view-more {
    margin-bottom: 2rem !important;
    text-decoration: none;
  }
}
</style>
