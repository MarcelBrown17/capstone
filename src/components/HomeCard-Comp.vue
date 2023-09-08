<template>
    <div class="container">
  <h2>Top sales this week</h2>
  <ul class="cards">
    <li class="card">
      <div>
        <h3 class="card-title">Service 1</h3>
        <div class="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 2</h3>
        <div class="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 3</h3>
        <div class="card-content">
          <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 4</h3>
        <div class="card-content">
          <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 5</h3>
        <div class="card-content">
          <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    <li class="card">
      <div>
        <h3 class="card-title">Service 6</h3>
        <div class="card-content">
          <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {

}
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
  font-size: 32px;
  margin-bottom: 1em;
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

.card:not(:last-child) {
  margin-right: 10px;
}

.card:hover {
transform: scaleX(1.1);
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

.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  background: var(--red);
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
  background-color: #7D7D7D;
}

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
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