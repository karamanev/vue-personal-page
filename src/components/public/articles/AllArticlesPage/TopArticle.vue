<template>
<div>
  <v-layout
      mx-12
      row
      align-stretch
      justify-center
  >
    <v-flex md6>
      <p  class="regular-text with-initial pa-2 mb-6">{{ normalizedText }}</p>
      <v-btn class="outlined first-button mb-12" text :to="{ name:'singleArticle', params: {id} }">Нататък</v-btn>
    </v-flex>
  </v-layout>
    <div>
    <v-img
      :src="image"
      class="third--text mb-6"
      height="250px"
    >
    </v-img>
    </div>
    </div>

</template>

<script lang="ts">
import { Article } from '@/core/models/ArticleInterface';

export default {
  data() {
    return {
    };
  },
  props: {
    article: {
      type: Object as () => Article
    }
  },
  computed: {
    normalizedText: function () {
      const maxLength = 450;
      this.article.text.trim();
      let trimmedString = this.article.text.substr(0, maxLength);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, (lastIndexOfRegex(/[.!?]/g, trimmedString) + 1)));
      return trimmedString;

      function lastIndexOfRegex(regex, text) {
        const match = text.match(regex);
        return match ? text.lastIndexOf(match[match.length - 1]) : -1;
      }
    },
    id: function () {
      return this.article.id;
    },
    image: function () {
      return this.article.images[0];
    }
  }
};
</script>

<style scoped lang="scss">

</style>
