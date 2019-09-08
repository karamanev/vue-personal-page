<template>
  <span>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red" class="third--text" v-on="on">
          Изтрий
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Сигурен ли си?
        </v-card-title>
        <v-card-text>Данните няма да могат да бъдат възстановени!</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="second" text @click="OnDelete">Изтрий</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>


<script lang="ts">
import { articlesCollection, quotesCollection } from '@/main'
export default {
  props: {
    isArticle: {
      type: Boolean
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    OnDelete(): void {
      this.dialog = false
      console.log(this.isArticle);
      if (this.isArticle) {
        articlesCollection.doc(this.id)
          .delete()
          .then(() => {
            console.log("Document deleted");
            this.$router.push('/admin')
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        quotesCollection.doc(this.id)
          .delete()
          .then(() => {
            console.log("Document deleted");
            this.$router.push('/admin')
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    }
  }
}
</script>
