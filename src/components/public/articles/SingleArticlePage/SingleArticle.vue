<template>
<div>{{article.title}}
</div>

</template>

<script lang="ts">

import { Article } from '../../../../core/models/ArticleInterface';
import { articlesCollection } from '../../../../main';

export default {
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

<style lang="scss">
h1{
  background-color: var(--v-primary-base) !important;
}
</style>
