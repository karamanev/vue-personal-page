<template>
  <v-container
    fluid
    grid-list-md
    pa-2
  >
    <v-layout wrap>
      <v-container v-if="articles.length > 0">
        <articles-header :article="mainArticle"/>
        <topics-chips/>
        <v-container v-for="(article, index) in secondaryArticles" :key="index">
          <big-news :article="article"/>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script lang="ts">

import { articlesCollection } from '../../../../main'
import { Article } from '../../../../core/models/ArticleInterface'
import TopicsChips from './TopicsChips.vue'
import BigNews from '../../../common/articles/BigNews.vue'
import ArticlesHeader from './ArticlesHeader.vue'

export default {
  components: {
    ArticlesHeader,
    BigNews,
    TopicsChips
  },
  data() {
    return {
      articles: [] as Article[]
    }
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date', 'desc')
    }
  },
  computed: {
    mainArticle: function () {
      return this.articles[0];
    },
    secondaryArticles: function () {
      var changed = this.articles.slice(1);
      return changed;
    }
  }
}
</script>

<style scoped lang="scss">


</style>
