<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark >
            <v-toolbar-title class="text-primary" color="primary">Редактирай цитат</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="anouncement" label="Анонс" type="text" v-model="$v.quote.anouncement.$model"></v-text-field>
              <v-text-field name="text" label="Текст" type="text" v-model="$v.quote.text.$model"></v-text-field>
              <v-text-field name="author" label="Автор" type="text" v-model="$v.quote.author.$model"></v-text-field>
              <v-text-field name="image" label="Снимка" type="text" v-model="$v.quote.image.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.quote.$error" @click="OnEditQuote">Изпрати</v-btn>
          </v-card-actions>
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
        image: ''
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
      image: { required, minLength: minLength(3), maxLength: maxLength(2000) }
    }
  },
  methods: {
    OnEditQuote(): void {
      quotesCollection.doc(this.$route.params.id).update({
        ...this.quote,
        date: new Date()
      } as Quote)
        .then(function (docRef) {
          console.log(docRef);
          console.log("Document succesfully updated");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      this.$router.push('/home')
    }
  },
  firestore() {
    return {
      quote: quotesCollection.doc(this.$route.params.id)
    }
  }

})

</script>

<style scoped lang="scss">

</style>
