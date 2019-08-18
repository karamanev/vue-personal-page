<template>
<div>{{article.title}}
</div>

</template>

<!--						<v-flex xs6 class="mr-5">
							<v-card flat v-for="post in posts" :key="post.title" class="grey--text text--darken-2">
								<span style="font-size:32px;" class="mt-3">{{ post.title }}</span>
								<div class="mt-3">
									<span style="color:grey">POSTED BY </span>
									<strong>{{ post.author }}</strong>
									<span style="color:grey"> ON </span>
									<strong>{{ cnvrtDate(post.date) }}</strong>
								</div>
								<v-card-media :src="post.image" height="400px" class="mt-3"></v-card-media>
								<v-card-text style="font-size:16px;">{{ concatStr(post.description) }}</v-card-text>
								<v-card-actions class="mb-3">
									<v-btn :href="post.link" flat style="color:#5277AC;">READ MORE</v-btn>
								</v-card-actions>
							</v-card>
						</v-flex>
-->

<script lang="ts">

import { Article } from '../../../../core/models/ArticleInterface';
import { articlesCollection } from '../../../../main';

export default {
  data() {
    return {
      article: {} as Article
    }
  },
  firestore() {
    return {
      article: articlesCollection.doc(this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  background-color: var(--v-primary-base) !important;
}
</style>
