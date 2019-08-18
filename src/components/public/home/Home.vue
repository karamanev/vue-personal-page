<template>
  <div>
    <welcome/>
    <news-homepage/>
    <about/>
    <dodeto/>
    <quotes-carousel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuotesCarousel from './quotes/QuotesCarousel.vue'
import Welcome from './welcome/Welcome.vue'
import NewsHomepage from './news/NewsHomepage.vue'
import About from './static/About.vue';
import Dodeto from './static/Dodeto.vue';

export default Vue.extend({
  components: {
    QuotesCarousel,
    Welcome,
    NewsHomepage,
    About,
    Dodeto
  }

})
</script>

<style scoped lang="scss">

</style>
