<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex md8>
        <v-card class="elevation-12">
          <v-toolbar dark >
            <v-toolbar-title class="text-primary" color="second">Добави цитат</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-textarea name="anouncement" label="Анонс" type="text" v-model="$v.quote.anouncement.$model"></v-textarea>
              <v-textarea name="text" label="Текст" type="text" v-model="$v.quote.text.$model"></v-textarea>
              <v-text-field name="author" label="Автор" type="text" v-model="$v.quote.author.$model"></v-text-field>
              <v-text-field name="image" label="Снимка" type="text" v-model="$v.quote.image.$model"></v-text-field>
              <v-text-field name="biography" label="Биография" type="text" v-model="$v.quote.biography.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="second" :disabled="$v.quote.$invalid" @click="OnAddQuote">Изпрати</v-btn>
          </v-card-actions>
          <p class="red" v-if="$v.quote.$error">Формата не е полълнена коректно!</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import { QuoteInput, Quote } from '../../../core/models/QuoteInterface'
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { quotesCollection } from '../../../main'

export default Vue.extend({
  data() {
    return {
      quote: {
        anouncement: '',
        text: '',
        author: '',
        image: '',
        biography: ''
      } as QuoteInput
    }
  },
  validations: {
    quote: {
      anouncement: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(200)
      },
      text: { required, minLength: minLength(3), maxLength: maxLength(2000) },
      author: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(2000)
      },
      image: { required, minLength: minLength(3), maxLength: maxLength(2000) },
      biography: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(2000)
      }
    }
  },
  methods: {
    OnAddQuote(): void {
      quotesCollection.add({
        ...this.quote,
        date: new Date()
      } as Quote)
        .then(function (docRef) {
          console.log(docRef);
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      this.$router.push('/admin')
    }
  }
})

</script>

<style scoped lang="scss">

</style>
