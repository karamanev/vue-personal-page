<template>
  <div v-if="quote.text">
    <v-layout justify-center align-center>
      <v-flex md10 mb-6>
        <h2 class="main-subtitle my-3">{{quote.anouncement}}</h2>
        <p class="date my-6">{{quote.date | date}}</p>
      </v-flex>
    </v-layout>
    <v-layout row align-start justify-center>
      <v-flex md3 mr-12>
        <v-avatar class="avatar" size="80%">
          <img :src="getImageUrl(quote.image)" alt="Авторът на цитата">
        </v-avatar>
        <h3 class="quote-author first--text">{{quote.biography}}</h3>
      </v-flex>
      <v-flex md6>
        <v-container v-for="(paragraph, index) in textFormated" :key="index">
       	  <p class="regular-text md8" :class="index === 0 ? 'with-initial' : '' ">{{ paragraph }}</p>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Quote } from '../../../core/models/QuoteInterface';
export default {
  data() {
    return {
    }
  },
  props: {
    quote: {
      type: Object as () => Quote
    }
  },
  methods: {
    getImageUrl(url) {
      var images = require.context('../../../assets/', false, /\.jpg$/)
      return images('./' + url + ".jpg")
    }
  },
  computed: {
    textFormated: function () {
      return this.quote.text.split(/\n\r|\n|\r|\s\s/g).filter(item => item !== '')
    }
  }
}
</script>

<style scoped lang="scss">
.main-subtitle {
  font-size: 20pt;
}
.date {
  color: black;
  float: none;
}
</style>
