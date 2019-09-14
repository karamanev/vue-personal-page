<template>
  <div>
    <ArticlesHeader v-if="mainArticle.date">
      <h1 slot="title" class="main-title">{{ mainArticle.title }}</h1>
      <div slot="date-topics" class="flex mb-12 mx-12 mt-n12 date-topics">
        <span class="first--text date">{{ mainArticle.date | date }}</span>
        <span class="first--text topics">{{ mainArticle.topics | topics }}</span>
      </div>
      <div slot="subtitle" class="main-subtitle">{{ mainArticle.subtitle }}</div>
    </ArticlesHeader>
    <v-container v-if="mainArticle.title">
      <TopArticle :article="mainArticle"/>
    </v-container>
    <h1 class="topic">Рубрики</h1>
    <TopicsChips @onFilter="filterArticles($event)" />
    <v-container v-if="articles === undefined">
      <loader/>
    </v-container>
    <v-container v-else-if="articles.length === 0">
      <h2 class="my-12">Няма публикации в избраната от вас категория.</h2>
    </v-container>
    <v-container v-else>
      <v-layout pt-6 mx-12 row align-stretch justify-center>
        <v-flex md5 mx-6 v-for="(article, index) in articles" :key="index">
          <BigCommonArticle :article="article"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script lang="ts">

import { articlesCollection } from '@/main';
import { Article } from '@/core/models/ArticleInterface';
import TopicsChips from './TopicsChips.vue';
import BigCommonArticle from '@/components/common/articles/BigCommonArticle.vue';
import ArticlesHeader from './ArticlesHeader.vue';
import TopArticle from './TopArticle.vue';


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
    };
  },
  methods: {
    filterArticles(event) {
      this.$bind('articles', articlesCollection.orderBy('date', 'desc').where('topics', 'array-contains', event));
      this.articles = this.articles.reverse();
    }
  },
  mounted() {
    articlesCollection.orderBy('date', 'desc').get().then((querySnapshot) => {
      const documents = querySnapshot.docs.map(doc => doc.data());
      this.mainArticle = documents[0];
      this.articles = documents.splice(1);
    });
  }
};
</script>
