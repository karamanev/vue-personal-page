<template>
  <v-carousel-item justify-center background="blue" color="blue">
    <v-sheet height="100%" id="sheet">
      <v-layout pt-6 mx-12 row align-end>
        <v-flex md2 height="100%">
          <span class="big-quote first--text mr-12">„</span>
        </v-flex>
        <v-flex md3 height="100%">
          <v-avatar class="a" left size="170px">
            <img :src="getImageUrl(quote.image)" alt="Авторът на цитата">
          </v-avatar>
        </v-flex>
        <v-flex md7>
          <p class="mt-2 first--text">{{ quote.anouncement }}</p>
        </v-flex>
      </v-layout>
        <p class="mt-2 mr-12 text-right text--second">{{ quote.author }}</p>
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
  background-color:  rgba(102, 153, 204, 0.5);
}

.a{
  height: 100%;
  vertical-align: middle;
}
</style>
