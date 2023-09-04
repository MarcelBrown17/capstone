<template>
  <NavBarComp />
  <AdminComp />
  <FooterComp />
</template>

<script>
import AdminComp from "../components/Admin-Comp.vue";
import FooterComp from "../components/Footer-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";

export default {
  components: { NavBarComp, FooterComp, AdminComp },
};
</script>

<style scoped></style>
