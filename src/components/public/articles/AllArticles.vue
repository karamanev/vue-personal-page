<template>
  <div>
    <article v-for="(article, index) in articles" :key="index">
      <h1>{{ article.title }}</h1>
      <h2>{{ article.content }}</h2>
    </article>
  </div>
</template>

<script>

//import {db} from '../../main.ts'

export default {
  data () {
    return {
      articles: []
    }
  },
  firestore: {
 //     articles: db.collection('articles').orderBy('date')
  },
  
}
</script>

<style>

</style>
