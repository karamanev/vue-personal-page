<template>
<div>
    <v-row align="center" justify="center" class="mt-n12">
      <v-img
      min-height="250px"
      max-height="720px"
      src="../../../../assets/01.jpg"
      align="left"
      justify="left"
      id="welcome"
    >
    </v-img>
    </v-row>
  <v-row align="center" justify="center" class="mt-n12">

    <h1 class="big-heading">{{article.title}}</h1>
  </v-row>
  <v-layout wrap>
     <v-img
      :src="image"
      class="third--text"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
    </v-img>
    <div>
      <p class="date-topics mb-12">
        <span class="date">{{article.date | date}}</span>
        <span class="topics">{{normalizedTopics}}</span>
      </p>
      <p class="regular-text article-text pa-2">{{normalizedText}}</p>
    </div>
    <div>
      <v-spacer></v-spacer>
      <v-btn outlined class="text-capitalize text-underline mr-6" text :to="{ name:'singleArticle', params: {id}}">Нататък</v-btn>
    </div>
    </v-layout>
  </div>
</template>

<!--      <h1 class="forth--text font-weight-thin">Окрилени<br>от бъдещето</h1>
      <h2 class="third--text font-weight-thin">(Историята зад тази снимка)</h2>


-->

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
#welcome {
  opacity: 0.4;
}

h1 {
  padding-left: 5%;
  padding-top: 18%;
  font-size: 55pt;
  line-height: 55pt;
}
</style>
