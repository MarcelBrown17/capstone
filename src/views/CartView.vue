<template>
  <NavBarComp />
  <CartComp />
  <FooterComp />
</template>

<script>
import FooterComp from "../components/Footer-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";
import CartComp from "../components/Cart-Comp.vue";
export default {
  components: { CartComp, NavBarComp, FooterComp },
};
</script>

<style scoped></style>
