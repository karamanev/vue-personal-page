<template>
  <div>
    <articles-header v-if="mainArticle.date">
      <h1 slot="title" class="first--text font-weight-thin main-title" id="big-heading">{{ mainTitle }}</h1>
      <p slot="date-topics" class="date-topics mb-12">
        <span class="date">{{mainArticle.date | date}}</span>
        <span class="topics">{{normalizedTopics}}</span>
      </p>
    </articles-header>
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
        <big-common-article :article="article"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">

import { articlesCollection } from '../../../../main'
import { Article } from '../../../../core/models/ArticleInterface'
import TopicsChips from './TopicsChips.vue'
import BigCommonArticle from '../../../common/articles/BigCommonArticle.vue'
import ArticlesHeader from './ArticlesHeader.vue'
import TopArticle from './TopArticle.vue'


export default {
  components: {
    ArticlesHeader,
    BigCommonArticle,
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
      this.$bind('articles', articlesCollection.orderBy('date', 'desc').where('topics', 'array-contains', event))
      this.articles = this.articles.reverse();
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
    },
    normalizedTopics: function () {
      return this.mainArticle.topics.join(', ');
    }
  }
}
</script>

<style scoped lang="scss">
.main-title {
  padding-left: 5%;
  padding-top: 18%;
  font-size: 55pt;
  line-height: 55pt;
}
</style>
