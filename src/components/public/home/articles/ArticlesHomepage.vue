<template>
  <div>
    <h1 class="topic py-6">
      Най-нови публикации
    </h1>
    <v-container v-if="articles === undefined || articles.length < 1">
      <loader />
    </v-container>
    <v-container v-else>
      <v-layout
        mx-12
        row
        align-stretch
        justify-center
      >
        <v-flex
          md5
          mx-6
        >
          <BigCommonArticle :article="articles[0]" />
        </v-flex>
        <v-flex
          md5
          mx-6
        >
          <div align-center>
            <SmallCommonArticle :article="articles[1]" />
            <SmallCommonArticle :article="articles[2]" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">

import { articlesCollection } from '@/main';
import Vue from 'vue';
import BigCommonArticle from '@/components/common/articles/BigCommonArticle.vue';
import SmallCommonArticle from '@/components/common/articles/SmallCommonArticle.vue';

export default Vue.extend({
  components: {
    BigCommonArticle,
    SmallCommonArticle
  },
  data() {
    return {
      articles: []
    };
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date', 'desc').limit(3)
    };
  }
});
</script>

<style scoped lang="scss">

</style>
