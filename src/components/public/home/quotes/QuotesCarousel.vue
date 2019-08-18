<template>
  <v-carousel>
    <single-quote
      v-for="quote in quotes"
      :key="quote.id"
      :quote="quote"
    ></single-quote>
  </v-carousel>
</template>

<script lang="ts">
import { quotesCollection } from '@/main'
import SingleQuote from './SingleQuote.vue'


export default {
  components: {
    SingleQuote
  },

  data() {
    return {
      quotes: []
    }
  },
  firestore() {
    return {
      quotes: quotesCollection.orderBy('date')
    }
  }
}

</script>

<style lang="scss">

</style>
