<template>
  <v-layout wrap>
    <div>
      <p class="regular-text with-initial article-text pa-2">{{normalizedText}}</p>
    </div>
    <v-img
      :src="image"
      class="third--text mb-6"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
    </v-img>
    <div>
      <v-btn outlined class="text-capitalize text-underline mr-6" text :to="{ name:'singleArticle', params: {id}}">Нататък</v-btn>
    </div>
  </v-layout>
</template>

<script lang="ts">
import { Article } from '../../../../core/models/ArticleInterface';

export default {
  data() {
    return {
    }
  },
  props: {
    article: {
      type: Object as () => Article
    }
  },
  computed: {
    normalizedTopics: function () {
      return this.article.topics.join(', ');
    },
    normalizedText: function () {
      let maxLength = 450;
      this.article.text.trim();
      var trimmedString = this.article.text.substr(0, maxLength);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, (lastIndexOfRegex(/[.!?]/g, trimmedString) + 1)))
      return trimmedString;

      function lastIndexOfRegex(regex, text) {
        var match = text.match(regex);
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
}
</script>

<style scoped lang="scss">

</style>
