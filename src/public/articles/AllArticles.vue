<template>
  <div>
    <article v-for="(article, idx) in articles" :key="idx">
      <h1>{{ article.title }}</h1>
      <h2>{{ article.content }}</h2>
    </article>
  </div>
</template>

<script>

import {db} from '../../main'

export default {
  data () {
    return {
      articles: []
    }
  },
  firestore: {
      articles: db.collection('articles').orderBy('date')
  },
  
}
</script>

<style>

</style>
