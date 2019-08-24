<template>
  <div>
    <h1 class="topic">Срещи</h1>
    <v-container v-if="quotes === undefined || quotes.length < 1">
      <loader/>
    </v-container>
    <v-container v-else>
      <v-carousel>
        <single-quote v-for="quote in quotes" :key="quote.id" :quote="quote"></single-quote>
      </v-carousel>
    </v-container>
  </div>
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
      quotes: quotesCollection.orderBy('date', 'desc')
    }
  }
}

</script>

<style lang="scss">

</style>
