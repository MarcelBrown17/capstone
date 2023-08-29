<template>
  <HomeHeroComp />
  <HomeCardComp />
  <ReviewComp />
</template>

<style></style>

<script>
import ReviewComp from '../components/Review-Comp.vue';
import HomeHeroComp from '../components/HomeHero-Comp.vue';
import HomeCardComp from '../components/HomeCard-Comp.vue';
export default {
  components: { HomeHeroComp, ReviewComp, HomeCardComp },
};
</script>
