<template>
    <div>
      <welcome/>
      <quotes-carousel/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuotesCarousel from './quotes/QuotesCarousel.vue'
import Welcome from './Welcome.vue'

export default Vue.extend({
  components: {
    QuotesCarousel,
    Welcome
  }

})
</script>

<style lang="scss">

</style>
