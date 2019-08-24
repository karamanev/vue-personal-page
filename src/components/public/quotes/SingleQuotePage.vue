<template>
  <div>
    <welcome-quotes/>
    <single-common-item :article="article" :isQuote="true" />
  </div>
</template>

<script lang="ts">

import { Quote } from '../../../core/models/QuoteInterface';
import { quotesCollection } from '../../../main';
import SingleCommonItem from '../../common/articles/SingleCommonItem.vue'
import WelcomeQuotes from './WelcomeQuotes.vue'

export default {
  components: {
    SingleCommonItem,
    WelcomeQuotes
  },
  data() {
    return {
      article: {} as Quote
    }
  },
  firestore() {
    return {
      article: quotesCollection.doc(this.$route.params.id)
    }
  },
  updated() {
    console.log(this.article);
  }
}
</script>

<style scoped lang="scss">
</style>
