<template>
  <NavBarComp />
  <AdminComp />
  <FooterComp />
</template>

<script>

import FooterComp from "../components/Footer-Comp.vue";
import AdminComp from "../components/Admin-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";

export default {
  name: "Admin",
  components: { NavBarComp, FooterComp, AdminComp,},
};
</script>


