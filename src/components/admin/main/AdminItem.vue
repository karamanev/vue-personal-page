<template>
  <div>
    <h2 class="">{{title}}</h2>
    <v-container v-if="article === true" class="col-12 d-flex flex-row justify-space-around">
      <v-btn color="first" class="third--text" :to="{ name:'editArticle', params: {id}}">Редактирай</v-btn>
      <v-btn color="first" class="third--text" @click="OnDeleteArticle">Изтрий</v-btn>
    </v-container>
    <v-container v-if="article === false" class="col-12 d-flex flex-row justify-space-around">
      <v-btn color="first" class="third--text" :to="{ name:'editQuote', params: {id}}">Редактирай</v-btn>
      <v-btn color="first" class="third--text" @click="OnDeleteQuote">Изтрий</v-btn>
    </v-container>
  </div>
</template>


<script lang="ts">
import { articlesCollection, quotesCollection } from '../../../main'

export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: String
    },
    article: {
      type: Boolean
    }
  },
  methods: {
    OnDeleteArticle(): void {
      articlesCollection.doc(this.id)
        .delete()
        .then(() => {
          console.log("Document deleted");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      this.$router.push('/admin')
    },
    OnDeleteQuote(): void {
      quotesCollection.doc(this.id)
        .delete()
        .then(() => {
          console.log("Document deleted");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      this.$router.push('/admin')
    }
  }
}
</script>
