<template>
  <div class="pt-12">
    <h1 class="topic">Най-нови публикации</h1>
    <v-layout
      pt-6
      mx-12
      row
      align-stretch
      justify-center
      v-if="articles.length === 3"
    >
      <v-flex md5 mx-6>
        <bigger-news
          :image="articles[0].images[0]"
          :text="articles[0].text"
          :id="articles[0].id"
          :title="articles[0].title"
          :date="articles[0].date"
          :topics="articles[0].topics"
        />
      </v-flex>

      <v-flex md5 mx-6>
        <small-news
          :text="articles[1].text"
          :id="articles[1].id"
          :title="articles[1].title"
          :date="articles[1].date"
          :topics="articles[1].topics"
        />
        <small-news
          :text="articles[2].text"
          :id="articles[2].id"
          :title="articles[2].title"
          :date="articles[2].date"
          :topics="articles[2].topics"
        />
      </v-flex>
    </v-layout>
  </div>
</template>


<!-- <template>
          xs6 и xs3
-->

<script lang="ts">

import { articlesCollection } from '../../../../main'
import Vue from 'vue';
import BiggerNews from '../../../common/articles/BiggerNews.vue'
import SmallNews from '../../../common/articles/SmallNews.vue'

export default Vue.extend({
  components: {
    BiggerNews,
    SmallNews
  },
  data() {
    return {
      articles: []
    }
  },
  firestore() {
    return {
      articles: articlesCollection.orderBy('date', 'desc').limit(3)
    }
  }
})
</script>

<style scoped lang="scss">

</style>
