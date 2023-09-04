<template>
    <div class="page-container">
      <div class="black-background"><h1 class="heading">Welcome to Envy Essentials</h1></div>
      <div class="image-container">
        <img src="your-image-url.jpg" alt="Background Image" />
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
    flex: 1;
    background-color: #000;
    color: white;
  }
  
  .image-container {
    flex: 1;
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
  </style>
  