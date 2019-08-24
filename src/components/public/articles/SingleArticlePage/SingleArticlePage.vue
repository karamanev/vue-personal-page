<template>
  <div>
    <single-article-item :article="article" />
  </div>
</template>

<script lang="ts">

import { Article } from '../../../../core/models/ArticleInterface';
import { articlesCollection } from '../../../../main';
import SingleArticleItem from '../../../common/articles/SingleArticleItem.vue'

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

<style scoped lang="scss">


</style>
