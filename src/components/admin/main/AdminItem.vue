<template>
  <div>
    <h2>{{title}}</h2>
    <v-container v-if="isArticle === true" class="col-12 d-flex flex-row justify-space-around">
      <v-btn color="first" class="third--text" :to="{ name:'editArticle', params: {id}}">Редактирай</v-btn>
    </v-container>
    <v-container v-if="isArticle === false" class="col-12 d-flex flex-row justify-space-around">
      <v-btn color="first" class="third--text" :to="{ name:'editQuote', params: {id}}">Редактирай</v-btn>
    </v-container>
    <delete-card :id="id" :isArticle="isArticle" />
  </div>
</template>


<script lang="ts">
import { articlesCollection, quotesCollection } from '@/main'
import DeleteCard from './DeleteCard.vue'

export default {
  components: {
    DeleteCard
  },
  props: {
    title: {
      type: String
    },
    id: {
      type: String
    },
    isArticle: {
      type: Boolean
    }
  }
}
</script>
