<template>
  <div class="card-container">
    <section class="column-1">
      <div class="card-1">
        <div class="card-body1">
          <div class="card-info">
            <h3>Formal Wear</h3>
          </div>
        </div>
      </div>
      <div class="card-2">
        <div class="card-body2">
          <div class="card-info">
            <h3>New Products coming soon</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="flex-col">
      <div class="card-3">
        <div class="card-body3">
          <div class="card-info-3">
            <h3>Welcome to Envy Essential</h3>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="card-4">
          <div class="card-body4">
            <div class="card-info">
              <h3>Monthly Sales</h3>
            </div>
          </div>
        </div>
        <div class="card-5">
          <div class="card-body5">
            <div class="card-info">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="column-1">
      <div class="card-6">
        <div class="card-body6">
          <div class="card-info">
            <h3>Learn more about us</h3>
          </div>
        </div>
      </div>
      <div class="card-7 rounded-5">
        <div class="card-body7">
          <div class="card-info">
            <h3>Unisex Wear</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  color: rgb(0, 0, 0);
}
.flex-1 {
  display: flex;
  gap: 7px;
  margin: 6px;
}
.flex-col {
  margin: 6px;
}
.card-body1 {
  background-color: rgb(255, 255, 255);
  width: 23rem;
  height: 27rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid black;
  background-image:url(https:i.postimg.cc/HW96LzHM/95559ca9a79f7da23522cb702e5eb2e8.jpg);
  background-position-x:center;
  background-repeat:no repeat;
}
.card-body2 {
  background-color: rgb(255, 255, 255);
  width: 23rem;
  height: 12rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid black;
  background-image:url(https:i.postimg.cc/50ZfGJ7h/wp1853889.webp);
  background-repeat:no-repeat;
  background-size:cover;
  color:#fff;
}
.card-body3 {
  background-color: rgb(255, 255, 255);
  width: 44.5rem;
  height: 20rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid black;
  background-image:url(https:i.postimg.cc/PfcXpX21/19-11-12-205-1-min-1024x684.jpg);
  background-position: center;
  background-repeat:no-repeat;
  background-size:cover;
}
.card-body4 {
  background-color: rgb(255, 255, 255);
  width: 22rem;
  height: 19rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid rgb(0, 0, 0);
  background-image:url(https:/i.postimg.cc/zvYnn0HT/138256028-special-offer-sale-banner-on-black-background-sale-up-to-70-percent-off-big-sale-end-of-se.jpg);
  background-position: center;
  background-repeat:no-repeat;
  background-size:cover;
}
.card-body5 {
  background-color: rgb(255, 255, 255);
  width: 22rem;
  height: 19rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid rgb(0, 0, 0);
  background-image:url(https:/i.postimg.cc/L4JFJvmn/business-laptop-computer-flatlay.jpg);
  background-repeat:no-repeat;
  background-size:cover;
}
.card-body6 {
  background-color: rgb(255, 255, 255);
  width: 23rem;
  height: 12rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid rgb(0, 0, 0);
  background-image:url(https:i.postimg.cc/FRB0BTLf/photo-1611348586755-53860f7ae57a.jpg);
  background-position: center;
  background-repeat:no-repeat;
}
.card-body7 {
  background-color: rgb(255, 255, 255);
  width: 23rem;
  height: 27rem;
  border-radius: 12px;
  padding: 1rem;
  border: 5px solid black;
  background-image:url(https:/i.postimg.cc/x8JQY1Ff/V-107-2.webp);
  background-position: center;
  background-repeat:no-repeat;
}
.card-1 {
  margin: 6px;
}
.card-2 {
  margin: 6px;
}
.card-3 {
  margin: 6px;
}
.card-3 {
  margin: 6px;
}
.card-6 {
  margin: 6px;
}
.card-7 {
  margin: 6px;
}
.column-1 {
  margin: 6px;
}
</style>





