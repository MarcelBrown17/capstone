<template>
    <div class="spinner">
        Loading
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
   
    </div>
  </template>
  
  
  <style scoped>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 46%;
    width: 100px;
    height: 100px;
  }
  
  .dot {
    width: 15px;
    height: 15px;
    background-color: #333;
    border-radius: 50%;
    margin: 0 5px;
    animation: pulsate 1.5s infinite;
  }
  
  .dot1 {
    animation-delay: 0.2s;
  }
  
  .dot2 {
    animation-delay: 0.4s;
  }
  
  .dot3 {
    animation-delay: 0.6s;
  }
  
  @keyframes pulsate {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.7;
    }
  }
  </style>

  
  <script>
  export default {
    name: "Spinner",
  };
  </script>
  
  <style scoped>
  .spinner {
    text-align: center;
    padding: 1rem;
    font-size: 1.2rem;
  }
  </style>
  