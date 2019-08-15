<template>
  <div v-if="articles">
    <article v-for="(article, index) in articles" :key="index">
      <h1 color="light-primary">{{ article.title }}</h1>
      <h2>{{ article.content }}</h2>
    </article>
  </div>
</template>

<script lang="ts">

import {articlesCollection} from '../../../main'

export default {
  data () {
    return {
      articles: []
    }
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date')
    }
  }  
}
</script>

<style lang="scss">
h1{
  background-color: var(--v-primary-base) !important;
}
</style>
