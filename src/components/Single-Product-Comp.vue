<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <!-- Carousel -->
        <div
          id="productCarousel"
          class="carousel"
          data-bs-ride="carousel"
          style="height: 25rem"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#productCarousel"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li
              data-bs-target="#productCarousel"
              data-bs-slide-to="1"
              class="Product Image2"
            ></li>
            <li
              data-bs-target="#productCarousel"
              data-bs-slide-to="2"
              class="Product Image3"
            ></li>
            <li
              data-bs-target="#productCarousel"
              data-bs-slide-to="3"
              class="Product Image4"
            ></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="$route.query.prodUrl"
                class="d-block w-100"
                id="Product Image"
              />
            </div>
            <div class="carousel-item">
              <img
                :src="$route.query.imageUrl2"
                class="d-block w-100"
                id="Product-Image2"
              />
            </div>
            <div class="carousel-item">
              <img
                :src="$route.query.imageUrl3"
                class="d-block w-100"
                id="Product-Image3"
              />
            </div>
            <div class="carousel-item">
              <img
                :src="$route.query.imageUrl4"
                class="d-block w-100"
                aid="Product-Image4"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-5" id="product-details">
        <!-- Product Details -->
        <div class="card" style="height: 25rem">
          <div class="card-heading"><h2>Product Details</h2></div>
          <div class="card-body">
            <h5 class="card-title">Name:{{ $route.query.prodName }}</h5>
            <p class="card-text">
              <span
                ><h5>Category:{{ $route.query.Category }}</h5></span
              >
            </p>
            <p class="card-text">
              <span
                ><h5>Price: R{{ $route.query.price }}</h5></span
              >
            </p>
          </div>
          <div class="card-footer">
            <router-link to="/products" class="btn">Back</router-link>
            <button class="btn" id="add" type="button" @click="addToCart()">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cart: [],
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    const prodID = this.$route.params.prodID;
    this.$store.dispatch("fetchProduct", this.$route.params.prodID);
    console.log("Fetching product data");
  },

  methods: {
    addToCart() {
      const product = {
        prodID: this.$route.query.prodID,
        prodName: this.$route.query.prodName,
        Category: this.$route.query.Category,
        price: this.$route.query.price,
        prodUrl: this.$route.query.prodUrl,
      };

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cart.findIndex((item) => item.prodID === product.prodID);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
},


  },
  }

</script>

<style scoped>
.d-block {
  justify-content: center !important;
}
.carousel-item {
  height: 35rem !important;
  width: 25rem !important;
  justify-content: center !important;
  align-items: center;
}
.container {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}

.container {
  flex: 1;
}

.card-heading {
  padding-top: 2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 17rem;
  margin-bottom: 4rem;
}

#product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  color: black;
  width: 30rem;
  height: auto;
  border: 3px solid #000000;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align card contents horizontally */
  text-align: center; /* Center align text inside the card */
  margin-left: "9rem";
  justify-content: center !important;
}

.card-title {
  margin-bottom: 1rem;
}

.card-text span {
  display: block;
  margin-bottom: 1rem;
}

.product-image {
  height: 20rem;
  width: 20rem;
  object-fit: cover; /* Ensure the image fills the container */
}

.btn {
  background-color: #000000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
}

.btn:hover {
  background-color: #ffffff;
  border: 3px solid black;
  color: #000000;
}

#add{
  margin-left: 1rem !important;
}

@media only screen and (max-width: 300px) {
  *{padding: 0;
  margin: 0;
}
  .carousel-item {
  height: 100% !important;
  width: 80% !important;
  justify-content: center !important;
  align-items: center;
}
  .carousel {
    margin: auto;
    height: 100% !important;
  width: 80% !important;
  justify-content: center !important;
  align-items: center;
  margin-bottom: 5rem !important;
}
  .container {
  justify-content: center !important;
  align-items: center;
}
  .carousel-inner {
    margin: auto !important;
    justify-content: center !important;
  margin-bottom: 5rem !important;
  height: 100% !important;
  width: 90% !important;
  margin-left: 2.2rem !important;
}
#product-details{
  padding: 0px !important;
  margin: auto !important;
}
img{
  justify-content: center !important;
  margin: auto !important;
}
.card {
  display: flex;
  flex-direction: column;
margin: auto !important;
  width: 80% !important;
}
.card-body {
  display: flex;
  flex-direction: column;
margin: auto !important;

}
#add{
  margin-top: 0.5rem !important;
  margin: 0.5rem !important;
}
.carousel-indicators{
margin-bottom: 3rem !important;
}
}

</style>
