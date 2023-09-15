<template>
          <NavBarComp/>
          <AboutComp/>
  <FooterComp/>
</template>
<script>
import AboutComp from '../components/About-Comp.vue'
import FooterComp from '../components/FooterComp.vue';
import NavBarComp from '../components/NavBar-Comp.vue';
export default {
components: {NavBarComp, FooterComp, AboutComp}
}
</script>

<style scoped>

</style>