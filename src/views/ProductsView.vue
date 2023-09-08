<template>
  <NavBarComp />
  <ProductsComp />
  <FooterComp />
</template>

<script>
import FooterComp from "../components/Footer-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";
import ProductsComp from "../components/Products-Comp.vue";
export default {
  components: { ProductsComp, NavBarComp, FooterComp},
};
</script>

<style scoped></style>
