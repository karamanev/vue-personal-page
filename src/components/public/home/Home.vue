<template>
    <div>
      <welcome/>
      <news-homepage/>
      <quotes-carousel/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuotesCarousel from './quotes/QuotesCarousel.vue'
import Welcome from './welcome/Welcome.vue'
import NewsHomepage from './news/NewsHomepage.vue'

export default Vue.extend({
  components: {
    QuotesCarousel,
    Welcome,
    NewsHomepage
  }

})
</script>

<style lang="scss">

</style>
