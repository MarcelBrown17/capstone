<template>
  <NavBarComp />
  <ModalComp/>
  <AdminComp />
  <FooterComp />
</template>

<script>


import FooterComp from "../components/FooterComp.vue";
import AdminComp from "../components/Admin-Comp.vue";
import NavBarComp from "../components/NavBar-Comp.vue";
import ModalComp from "../components/add-modal-comp.vue";

export default {
  components: { NavBarComp, FooterComp, AdminComp, ModalComp,},
};
</script>


