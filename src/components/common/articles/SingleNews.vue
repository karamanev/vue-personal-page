<template>
  <div v-if="article.images">

   <div class="grey--text text--darken-2">
		<span style="font-size:32px;" class="mx-4">{{ article.title }}</span>
		<div class="mt-3">
			<strong>{{ article.date | date }}</strong>
			<strong>{{ article.topics }}</strong>
		</div>
		<v-img :src="image" height="400px" class="mt-3"></v-img>
    	<v-card-text class="regular-text">{{ textFormated }}</v-card-text>
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
    }
  },
  updated() {
    console.log(this.article);
  },
  computed: {
    normalizedTopics: function () {
      return this.article.topics.join(', ');
    },
    image: function () {
      return this.article.images[0];
    },
    textFormated: function () {
      var a = this.article.text.split(/\n\r|\n|\r|\s\s/g).filter(item => item !== '')
      console.log(a);
      return this.article.text.replace(/\n\r|\n|\r/g, '\n');
    }
  }
}

</script>

<style scoped lang="scss">


</style>
