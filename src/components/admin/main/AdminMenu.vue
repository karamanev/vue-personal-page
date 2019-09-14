<template>
  <v-container>
    <h1>Публикации</h1>
    <div class="row my-12">
      <v-container v-for="(article, index) in articles" :key="index">
        <AdminItem :title="article.title" :id="article.id" :isArticle="true"/>
      </v-container>
    </div>
    <h1>Цитати</h1>
    <div class="row my-12">
      <v-container v-for="(quote, index) in quotes" :key="index">
        <AdminItem :title="quote.author" :id="quote.id" :isArticle="false"/>
      </v-container>
   </div>
  </v-container>
</template>


<script lang="ts">
import { Article } from '@/core/models/ArticleInterface';
import { Quote } from '@/core/models/QuoteInterface';
import { articlesCollection, quotesCollection } from '@/main';
import AdminItem from './AdminItem.vue';

export default {
  components: {
    AdminItem
  },
  data() {
    return {
      articles: [] as Article[],
      quotes: [] as Quote[]
    };
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date', 'desc'),
      quotes: quotesCollection.orderBy('date', 'desc')
    };
  }
};
</script>

