<template>
  <div>
    <single-news :article="article" />
  </div>
</template>

<script lang="ts">

import { Article } from '../../../../core/models/ArticleInterface';
import { articlesCollection } from '../../../../main';
import SingleNews from '../../../common/articles/SingleNews.vue'

export default {
  components: {
    SingleNews
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
  },
  updated() {
    console.log(this.article);
  }
}
</script>

<style scoped lang="scss">
h1{
  background-color: var(--v-primary-base) !important;
}
</style>
