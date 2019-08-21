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
        <big-news :article="articles[0]"/>
      </v-flex>

      <v-flex md5 mx-6>
        <div align-stretch>
          <small-news :article="articles[1]"/>
          <small-news :article="articles[2]"/>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">

import { articlesCollection } from '../../../../main'
import Vue from 'vue';
import BigNews from '../../../common/articles/BigNews.vue'
import SmallNews from '../../../common/articles/SmallNews.vue'

export default Vue.extend({
  components: {
    BigNews,
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
