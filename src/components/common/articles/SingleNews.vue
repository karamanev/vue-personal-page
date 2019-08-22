<template>
<div v-if="article.images.length > 0">


							<v-card flat class="grey--text text--darken-2">
								<span style="font-size:32px;" class="mt-3">{{ article.title }}</span>
								<div class="mt-3">
									<span style="color:grey">POSTED BY </span>
									<strong>{{ article.date }}</strong>
									<span style="color:grey"> ON </span>
									<strong>{{ article.topics }}</strong>
								</div>
								<v-card-media :src="image" height="400px" class="mt-3"></v-card-media>
								<v-card-text style="font-size:16px;">{{ concatStr(article.text) }}</v-card-text>
								<v-card-actions class="mb-3">
									<v-btn :href="article.id" flat style="color:#5277AC;">READ MORE</v-btn>
								</v-card-actions>
							</v-card>
				

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
      image: function () {
      return this.article.images[0];
	}
  }
}
</script>

<style scoped lang="scss">


</style>
