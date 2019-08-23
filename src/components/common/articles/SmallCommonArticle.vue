<template>

  <v-card flat class="ma-2">
    <v-card-text>
      <p class="inner-heading">{{article.title}}</p>
      <p class="date-topics mb-12">
        <span class="date">{{article.date | date}}</span>
        <span class="topics">{{normalizedTopics}}</span>
      </p>
      <p class="regular-text with-initial pa-2">{{normalizedText}}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="outlined first-button mr-6" text :to="{ name:'singleArticle', params: {id}}">Нататък</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Article } from '../../../core/models/ArticleInterface';

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
      let maxLength = 400;
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
    }
  }
}
</script>

<style scoped lang="scss">

.regular-text {
  overflow-y: hidden;
  text-overflow: ellipsis;
  height: 122pt;
  width: 100%;
  margin: 0;
}

</style>
