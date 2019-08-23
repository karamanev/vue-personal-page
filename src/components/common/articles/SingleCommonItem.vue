<template>
  <div v-if="article.images">
    <div class="grey--text text--darken-2">
      <p class="inner-heading">{{article.title}}</p>
        <p class="date-topics mb-12">
          <span class="date">{{article.date | date}}</span>
          <span class="topics">{{normalizedTopics}}</span>
        </p>
  		<v-img :src="mainImage" height="400px" class="mt-3"></v-img>
      <v-card-text width="40%">
        <v-container v-for="(paragraph, index) in textFormated" :key="index">
        	<p :class="getClass(paragraph, index)" class="regular-text md8 ">{{ paragraph }}</p>
      		<v-img v-if="hasImage(index)" :src="getImage(index)" height="400px" class="mt-3"></v-img>
        </v-container>
      </v-card-text>
	  </div>
  </div>
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
    },
    isQuote: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClass(paragraph, index) {
      if (index === 0) {
        return 'with-initial'
      }

      if (paragraph.length <= 40) {
        return 'small-heading'
      }
    },
    hasImage(index) {
      if (index !== 0 && index % 5 === 0) {
        if (this.article.images.length > index / 5) {
          return true;
        }
      }
      return false;
    },
    getImage(index) {
      return this.article.images[index / 5]
    }
  },
  computed: {
    normalizedTopics: function () {
      return this.article.topics.join(', ');
    },
    mainImage: function () {
      return this.article.images[0];
    },
    textFormated: function () {
      return this.article.text.split(/\n\r|\n|\r|\s\s/g).filter(item => item !== '')
    }
  }
}

</script>

<style scoped lang="scss">

</style>
