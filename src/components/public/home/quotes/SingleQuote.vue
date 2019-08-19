<template>
  <v-carousel-item justify-center background="blue" color="blue">
      <v-sheet
        height="100%"
        tile
        id="sheet"
      >
        <v-layout
      pt-6
      mx-12
      row
      align-stretch
    >
    <v-flex md4>
    <span class="big-quote first--text mr-12">„</span>
    <v-avatar left size="120px">
      <img
        :src="getImageUrl(quote.image)"
        alt="Снимка"
      >
    </v-avatar>
    </v-flex>
    <v-flex md4>
		<p class="mt-2">{{ quote.anouncement }}</p>
    </v-flex>
    <v-flex md4>
		<p class="mt-2">{{ quote.author }}</p>
    </v-flex>
        </v-layout>

    <v-btn outlined class="text-capitalize text-underline mr-6" text :to="{ name:'singleQuote', params: { id: quote.id }}">Нататък</v-btn>
      </v-sheet>
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
  font-size: 150pt;
  font-family: 'Caveat';
  vertical-align: top;
}

#sheet{
  background-color: 102, 153, 204, 0.2;
}
</style>
