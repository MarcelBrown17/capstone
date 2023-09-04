<template>
  <div class="products">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        await store.dispatch('fetchProducts');
        products.value = store.state.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
    };
  },
};
</script>
<style scoped>
.products{
  margin-top: 7rem;
  margin-bottom: 15rem;
}
</style>
<!-- <template>
    <body>
 <div class="flexed-display">
    <div class="sidebar">
    <h2>Sidebar</h2>
  </div>
  <div class="container">
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
        <h3 class="card-title">Service 5</h3>
        <div class="card-content">
          <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
        </div>
      </div>
      <div class="card-link-wrapper">
        <a href="" class="card-link">Learn More</a>
      </div>
    </li>
    
  </ul>
</div>
 </div>
</body>
</template>

<script>
export default {

}
</script>

<style scoped>


.flexed-display{
    display:flex;
}
  .sidebar {
    position: relative;
    width: 20rem;
    background-color: #000000;
    padding: 20px;
    height: 40rem;
    margin-left: 2rem;
    border-radius: 20px;
  }


h2 {
  font-size: 32px;
  margin-bottom: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 25px;
  overflow-x: hidden;
}

.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
}

.card-link{
    background-color:#c70000;
}


.card:hover {
  color: var(--white);
  background: var(--red);
}

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
}



.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  background: var(--red);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.card-link:hover  {
  background-color: rgb(66, 66, 66);
}

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
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

</style> -->