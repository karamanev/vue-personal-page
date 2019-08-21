<template>
  <v-container fluid>
    <articles-header :title="mainTitle"/>
    <v-container v-if="mainArticle.title">
      <top-article :article="mainArticle"/>
    </v-container>
    <h1 class="topic">Рубрики</h1>
    <topics-chips @onFilter="filterArticles($event)" />
    <v-layout
      pt-6
      mx-12
      row
      align-stretch
      justify-center
    >
      <v-flex md5 mx-6 v-for="(article, index) in articles" :key="index">
        <big-news :article="article"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">

import { articlesCollection } from '../../../../main'
import { Article } from '../../../../core/models/ArticleInterface'
import TopicsChips from './TopicsChips.vue'
import BigNews from '../../../common/articles/BigNews.vue'
import ArticlesHeader from './ArticlesHeader.vue'
import TopArticle from './TopArticle.vue'


export default {
  components: {
    ArticlesHeader,
    BigNews,
    TopicsChips,
    TopArticle
  },
  data() {
    return {
      articles: [] as Article[],
      mainArticle: {} as Article
    }
  },
  methods: {
    filterArticles(event) {
      this.$bind('articles', articlesCollection.where('topics', 'array-contains', event))
    }
  },
  mounted() {
    articlesCollection.orderBy('date', 'desc').get().then((querySnapshot) => {
      const documents = querySnapshot.docs.map(doc => doc.data())
      this.mainArticle = documents[0]
      this.articles = documents.splice(1)
    })
  },
  computed: {
    mainTitle() {
      if (this.mainArticle) {
        return this.mainArticle.title
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
