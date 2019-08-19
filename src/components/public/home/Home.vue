<template>
  <div>
    <welcome/>
    <articles-homepage/>
    <about/>
    <dodeto/>
    <quotes-carousel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuotesCarousel from './quotes/QuotesCarousel.vue'
import Welcome from './welcome/Welcome.vue'
import ArticlesHomepage from './articles/ArticlesHomepage.vue'
import About from './static/About.vue';
import Dodeto from './static/Dodeto.vue';

export default Vue.extend({
  components: {
    QuotesCarousel,
    Welcome,
    ArticlesHomepage,
    About,
    Dodeto
  }

})
</script>

<style scoped lang="scss">

</style>
