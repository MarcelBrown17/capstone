<template>
  <div class="container">
    <h2>Top sales this week</h2>
    <ul class="cards">
      <li class="card">
        <div class="img-con">
          <img
            src="https://i.postimg.cc/k4Gg5K1k/77736365-800-800.png"
            alt="Service 2 Image"
            class="card-image"
          />
          <!-- Add image here -->
          <h3 class="card-title">MKM Navy Blue Smart Zip Golfer</h3>
          <div class="card-content">
            <p class="card-price">R 280.00</p>
            <p class="card-category">Golfer</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <router-link to="/products" class="card-link"
            ><button class="btn">View Products</button></router-link
          >
        </div>
      </li>

      <li class="card">
        <div>
          <img
            src="https://i.postimg.cc/mrwcd76n/77555762-800-800.png"
            alt="Service 2 Image"
            class="card-image"
          />
          <!-- Add image here -->
          <h3 class="card-title">MKM Dark Grey Smart Birdseye Knit Shirt</h3>
          <div class="card-content">
            <p class="card-price">R 499.00</p>
            <p class="card-category">Shirt</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <router-link to="/products" class="card-link"
            ><button class="btn">View Products</button></router-link
          >
        </div>
      </li>

      <li class="card">
        <div>
          <img
            src="https://i.postimg.cc/Dz5WC24P/73689387-800-800.png',"
            alt="Service 2 Image"
            class="card-image"
          />
          <!-- Add image here -->
          <h3 class="card-title">MKM Natural Slim Stretch Suit Jacket</h3>
          <div class="card-content">
            <p class="card-price">R 1500.00</p>
            <p class="card-category">Suit</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <router-link to="/products" class="card-link"
            ><button class="btn">View Products</button></router-link
          >
        </div>
      </li>

      <li class="card">
        <div>
          <img
            src="https://i.postimg.cc/8zfbskz5/AllTerritories_OnBody_28109001_F_600x.webp"
            alt="Service 2 Image"
            class="card-image"
          />
          <!-- Add image here -->
          <h3 class="card-title">Marisa Plunge Neck Velvet Dress</h3>
          <div class="card-content">
            <p class="card-price">R 1899.00</p>
            <p class="card-category">Dress</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <router-link to="/products" class="card-link"
            ><button class="btn">View Products</button></router-link
          >
        </div>
      </li>
      <li class="card">
        <div>
          <img
            src="https://i.postimg.cc/zXnPVMg1/68667008-800-800.png"
            alt="Service 2 Image"
            class="card-image"
          />
          <!-- Add image here -->
          <h3 class="card-title">MKM Brown Slim Suit Trouser</h3>
          <div class="card-content">
            <p class="card-price">R 650.00</p>
            <p class="card-category">Pants</p>
          </div>
        </div>
        <div class="card-link-wrapper">
          <router-link to="/products" class="card-link"
            ><button class="btn">View Products</button></router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin-top: 6rem;
  font: 16px / 24px "Rubik", sans-serif;
  color: var(--black);
  margin: 50px 0;
}

.container {
  max-width: 1400px;
  padding: 0 10px;
  margin: auto;
}

h2 {
  font-size: 36px;
  margin-top: 1rem;
}

.cards {
  display: flex;
  padding: 25px 0px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  padding: 20px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 30%);
  scroll-snap-align: start;
  transition: all 0.2s;
  border: 5px solid black;
}
.img-con {
  margin: auto !important;
  justify-content: center !important;
}

img {
  justify-content: center !important;
  width: 100%;
  margin-bottom: 2rem;
  height: 19rem;
}

.card:not(:last-child) {
  margin-right: 10px;
}

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-link-wrapper {
  margin-top: auto;
}
.btn {
  background-color: black;
  color: white;
}
.btn:hover {
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
  color: black;
}

.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.card:hover .card-link {
  background: var(--darkred);
}

.cards::-webkit-scrollbar {
  height: 12px;
}

.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
}

.cards::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
}

.cards::-webkit-scrollbar-track {
  background-color: #7d7d7d;
}

@media only screen and (max-width: 300px) {
  .card {
    flex-basis: 80%;
  }
  img {
    height: 12rem;
  }

  .card:not(:last-child) {
    margin-right: 20px;
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
