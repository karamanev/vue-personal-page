<template>
  <div>
    <v-container v-if="!article">
      <loader/>
    </v-container>
    <v-container v-else>
      <single-article-item :article="article"/>
    </v-container>
  </div>
</template>

<script lang="ts">

import { Article } from '@/core/models/ArticleInterface';
import { articlesCollection } from '@/main';
import SingleArticleItem from './SingleArticleItem.vue'

export default {
  components: {
    SingleArticleItem
  },
  data() {
    return {
      article: {} as Article
    }
  },
  firestore() {
    return {
      article: articlesCollection.doc(this.$route.params.id)
    }
  }
}
</script>
