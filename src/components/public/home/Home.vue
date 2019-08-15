<template>
    <div>
        Home Page
      <quotes-carousel/>
    </div>
</template>

<script lang="ts">

import QuotesCarousel from './QuotesCarousel.vue'
import Vue from 'vue';
export default Vue.extend({
  components: {
    QuotesCarousel
  }

})
</script>

<style lang="scss">

</style>
