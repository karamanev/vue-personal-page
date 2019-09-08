<template>
  <div v-if="article.images">
    <v-layout justify-center>
      <v-flex md10 mb-6>
        <h1 class="main-title my-12">{{article.title}}</h1>
        <h2 class="main-subtitle">{{article.subtitle}}</h2>
      </v-flex>
    </v-layout>
    <p class="date-topics mx-6 mb-6">
      <span class="date">{{article.date | date}}</span>
      <span class="topics">{{article.topics | topics}}</span>
    </p>
		<v-img :src="mainImage" height="400px" class="mt-3"></v-img>

    <v-container v-for="(paragraph, index) in textFormated" :key="index">
      <v-layout row mx-12 align-center justify-center>
        <v-flex md6>
        	<p :class="getClass(paragraph, index)" class="regular-text md8">{{ paragraph }}</p>
        </v-flex>
        <v-flex md12>
    	  	<v-img v-if="hasImage(index)" :src="getImage(index)" height="400px" class="my-6"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
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
