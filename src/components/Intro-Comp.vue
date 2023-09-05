<template>
  <div class="page-container">
    <div class="black-background">
      <h1 class="heading">Welcome to Envy Essentials</h1>
      <div class="text">
        <h3 class="font">sdfgbgfdf</h3>
        <h3 class="font">sdfgbgfdf</h3>
        <h3 class="font">sdfgbgfdf</h3>
        <h3 class="font">sdfgbgfdf</h3>
      </div>
      <div class="slogan">
        Elevate Your Everyday Elegance
      </div>
      <div class="buttons">
        <a href="#"><button class="loginBtn py-3 px-4 rounded-5">Login</button></a>
        <a href="#"><button class="signupBtn py-3 px-4 rounded-5">Sign Up</button></a>
      </div>
    </div>
    <div class="image-container">
      <img
        src="https://i.postimg.cc/QxdJjD11/Screenshot-2023-09-05-120442.png"
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
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

.loginBtn{
  background-color: transparent;
  color: white;
  border: 1px solid white;
}
.signupBtn {
  margin-left: 5px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

button {
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
}

.slogan{
  font-size: 40px;
  margin-top: 1.5rem;
}

</style>
