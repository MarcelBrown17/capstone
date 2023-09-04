<template>
  <body>
  <section class="page-container">
    <div class="cart-container">
    <div class="product-image">
      <img src="product-image.jpg" alt="Product Image">
    </div>
    <div class="product-info">
      <h2>Product Name</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="product-amount">
      <p>$99.99</p>
    </div>
  </div>
<div class="greenwhich"></div>
  <div class="summary-container">
    <div class="summary">
</div>
  </div>
</section>
</body>
</template>
<style scoped>
.page-container{
    display:flex;
    padding-top: 8rem;
    padding-bottom: 2rem;
    justify-content: center;
}

body {
  background-color: black;
}
.greenwhich{
    padding:30px
}
.summary{
    display: flex;
    flex-direction: column;
    background-color: #ffecec;
    width: 300px;
    height: 400px;
}
.cart-container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 900px;
height:250px;
}

.product-image img {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-info {
  flex-grow: 1;
}

.product-info h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333333;
}

.product-info p {
  margin: 5px 0;
  color: #666666;
}

.product-amount {
  text-align: right;
}

.product-amount p {
  margin: 0;
  font-size: 1.2rem;
  color: #333333;
}
</style>
<script>
export default{

}
</script>