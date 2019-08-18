<template>
  <v-carousel-item justify-center>
          <v-avatar size="120px">
         <span class="big-quote first--text">„</span>
      <img
        :src="getImageUrl(quote.image)"
        alt="John"
      >
   </v-avatar>
		<p class="mt-2">{{ quote.anouncement }}</p>
		<p class="mt-2">{{ quote.author }}</p>

    <v-btn outlined class="text-capitalize text-underline mr-6 second--text" text :to="{ name:'singleQuote', params: { id: quote.id }}">Нататък</v-btn>
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

<style scoped lang="scss">

.big-quote{
  font-size: 100pt;

  font-family: 'Caveat';
}

</style>
