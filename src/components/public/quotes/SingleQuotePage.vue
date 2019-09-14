<template>

  <div>
    <v-container v-if="!quote">
     <loader/>
    </v-container>
    <div v-else>
      <WelcomeQuotes :author="quote.author"/>
      <SingleQuoteItem :quote="quote"/>
    </div>

  </div>

</template>

<script lang="ts">

import { Quote } from '@/core/models/QuoteInterface';
import { quotesCollection } from '@/main';
import SingleQuoteItem from './SingleQuoteItem.vue';
import WelcomeQuotes from './WelcomeQuotes.vue';

export default {
  components: {
    SingleQuoteItem,
    WelcomeQuotes
  },
  data() {
    return {
      quote: {} as Quote
    };
  },
  firestore() {
    return {
      quote: quotesCollection.doc(this.$route.params.id)
    };
  }
};
</script>

<style scoped lang="scss">
</style>
