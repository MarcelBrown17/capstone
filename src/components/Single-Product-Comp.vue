<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 image-container">
        <img :src="$route.query.prodUrl" class="product-image" alt="Product Image" />
      </div>
      <div class="col-md-6 details-container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ $route.query.prodName }}</h5>
            <p class="card-text">
              <span>{{ $route.query.Category }}</span>
            </p>
            <p class="card-text">
              <span>R{{ $route.query.price }}</span>
            </p>
          </div>
          <div class="card-footer text-body-secondary">
            <router-link to="/products" class="btn">Back</router-link>
            <router-link to="/checkout" class="btn">Add To Cart</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- New row for other image queries -->
    <div class="row">
      <div class="col-md-6">
        <img :src="$route.query.imageUrl2" class="product-image" alt="prodImage" />
      </div>
      <div class="col-md-6">
        <img :src="$route.query.imageUrl3" class="product-image" alt="prodImage" />
      </div>
    </div>
  </div>
</template>


<script>
 export default {
computed: {
  product() {
    return this.$store.state.product;
  },
},
mounted() {
  this.$store.dispatch('fetchProduct', this.$route.params.prodID);
  console.log('Fetching product data');
},
};
</script>


<style scoped>


.container {
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right:17rem;
  margin-bottom:4rem;
}

.details-container {
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
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align card contents horizontally */
  text-align: center; /* Center align text inside the card */
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

.card-footer {
  margin-top: 1rem;
}

.btn {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none; /* Remove underline from router-link */
}

.btn:hover {
  background-color: #0056B3;
}
</style>



