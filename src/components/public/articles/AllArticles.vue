<template>
  <div v-if="articles">
    <article v-for="(article, index) in articles" :key="index">
      <h1>{{ article.title }}</h1>
      <h2>{{ article.content }}</h2>
    </article>
  </div>
</template>

<script>

import {articlesCollection} from '../../../main.ts'

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

<style>

</style>
