<template>
  <div class="page-container">
    <div class="black-background">
      <h1 class="heading">Welcome to Envy Essentials</h1>
      <div class="text">
        <h3 class="font">Suits</h3>
        <h3 class="font">Dress</h3>
        <h3 class="font">Shirts</h3>
        <h3 class="font">Accessories</h3>
      </div>
      <div class="slogan">Elevate Your Everyday Elegance</div>
      <div class="buttons">
        <router-link to="/login"
          ><button class="loginBtn py-3 px-4 rounded-5">
            Login
          </button></router-link
        >
        <router-link to="/register"
          ><button class="signupBtn py-3 px-4 rounded-5">
            Sign Up
          </button></router-link
        >
      </div>
    </div>
    <div class="image-container">
      <img
        src="https://i.postimg.cc/xTnpDZTY/20170419061953-menwear.jpg"
        alt="Background Image"
      />
    </div>
  </div>
</template>

<script>
export default {
  // Your component logic here
};
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.black-background {
  flex: 2;
  background-color: #000;
  color: white;
  padding-left: 3rem;
  padding-top: 2rem;
}

.image-container {
  flex: 2.5;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  position: absolute;
}

.heading {
  font-weight: bold;
  font-size: 60px;
}

.text {
  margin-top: 1.5rem;
  padding-left: 1rem;
  font-weight: lighter;
}

.loginBtn {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}
.signupBtn {
  margin-left: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

button {
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
}
button:hover {
  background-color: antiquewhite;
  color: black;
}

.slogan {
  font-size: 40px;
  margin-top: 1.5rem;
}

@media only screen and (max-width: 300px) {
  .page-container {
    display: flex !important;
    flex-direction: column !important;
  }

  .slogan {
    font-size: 20px !important;
  }
  .heading {
    font-size: 20px !important;
  }
  .font {
    font-size: 20px !important;
  }
  .black-background {
    height: 70% !important;
  }
  .image-container {
    height: 30%;
  }
.buttons{
  padding-bottom: 3rem !important;
}
}
</style>
