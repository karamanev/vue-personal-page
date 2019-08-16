<template>
  <v-carousel-item>
    <div class="display-3">Slide {{ quote.id }}</div>
    <div class="display-3"> {{ quote.text }}</div>
    <div class="display-3"> {{ quote.date }}</div>
    <div class="display-3"> {{ quote.author }}</div>
    <img v-bind:src="getImageUrl(quote.image)">
</v-carousel-item>
</template>

<script lang="ts">
import Vue from 'vue'
import { Quote } from '../../../../core/models/QuoteInterface'

export default Vue.extend({
  data() {
    return {
    }
  },
  methods: {
    getImageUrl(url) {
      var images = require.context('../../../../assets/', false, /\.jpg$/)
      return images('./' + url + ".jpg")
    }
  },
  props: {
    quote: {
      type: Object as () => Quote,
      default: () => ({})
    }
  }
})

</script>

<style lang="scss">

</style>
