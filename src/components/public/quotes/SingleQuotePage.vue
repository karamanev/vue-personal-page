<template>

  <div>
    <v-container v-if="!quote">
     <loader/>
    </v-container>
    <v-container v-else>
      <welcome-quotes :author="quote.author"/>
      <single-quote-item :quote="quote"/>
    </v-container>

  </div>

</template>

<script lang="ts">

import { Quote } from '../../../core/models/QuoteInterface';
import { quotesCollection } from '../../../main';
import SingleQuoteItem from '../../common/articles/SingleQuoteItem.vue'
import WelcomeQuotes from './WelcomeQuotes.vue'

export default {
  components: {
    SingleQuoteItem,
    WelcomeQuotes
  },
  data() {
    return {
      quote: {} as Quote
    }
  },
  firestore() {
    return {
      quote: quotesCollection.doc(this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
