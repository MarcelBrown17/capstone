<template>
  <NavBarComp />
  <ContactComp />
  <FooterComp />
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";
import ContactComp from "../components/Contact-Comp.vue";
export default {
  components: { NavBarComp, FooterComp, ContactComp },
};
</script>

<style scoped></style>
