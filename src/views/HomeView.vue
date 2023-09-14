<template>
<NavBarComp/>
 <HomeHeroComp />
  <HomeCardComp />
  <ReviewComp />
 <FooterComp/>
</template>

<style scoped>
*{
  font-family: 'Lato', sans-serif;
font-family: 'PT Serif', serif;
font-family: 'Raleway', sans-serif;
}


</style>

<script>
import ReviewComp from '../components/Review-Comp.vue';
import HomeHeroComp from '../components/HomeHero-Comp.vue';
import HomeCardComp from '../components/HomeCard-Comp.vue';
import FooterComp from '../components/Footer-Comp.vue';
import NavBarComp from '../components/NavBar-Comp';

export default {
  components: { HomeHeroComp, ReviewComp, HomeCardComp,NavBarComp, FooterComp},
};

</script>
