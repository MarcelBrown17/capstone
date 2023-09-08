<template>
  <NavBarComp/>
  <div>
      <div class="product-cards" v-if="product">
        <div
          class="card"
        >
          <div class="card-img">
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="example-img"
            />
          </div>
          <div class="card-info">
            <div class="name">
              <h4>{{ product.prodName }}</h4>
            </div>
            <div class="price">
              <h5>R {{ product.amount }}</h5>
            </div>
            <div class="cart">
              <button type="button" class="cart-btn">Add to Cart</button>
              <button type="button" class="view-btn" @click="viewSingle(product.prodID)">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <spinner />
      </div>
    </div>
  <FooterComp/>
</template>

<script>
import NavBarComp from "../components/NavBar-Comp.vue";
import FooterComp from "../components/Footer-Comp.vue";
import SingleProductComp from "../components/Single-Product-Comp.vue"
import spinner from '@/components/SpinnerComp.vue'

export default {
    components: {spinner,NavBarComp, FooterComp ,SingleProductComp},
      computed: {
        product() {
          return this.$store.state.product
        },
      },

       mounted() {
        this.$store.dispatch('getProduct', this.$route.params.id)
      }
         
      }
</script>

<style scoped>
.product-page {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-images img {
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}

.product-details {
  flex: 1;
  padding: 20px;
}

.product-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
