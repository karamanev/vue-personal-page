<template>
  <div>
    <single-common-item :article="article" />
  </div>
</template>

<script lang="ts">

import { Article } from '../../../../core/models/ArticleInterface';
import { articlesCollection } from '../../../../main';
import SingleCommonItem from '../../../common/articles/SingleCommonItem.vue'

export default {
  components: {
    SingleCommonItem
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


</style>
