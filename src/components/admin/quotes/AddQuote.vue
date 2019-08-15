<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark >
            <v-toolbar-title class="text-primary" color="primary">Добави публикация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="email" label="Заглавие" type="text" v-model="$v.article.title.$model">Заглавие</v-text-field>
              <v-text-field name="email" label="Подзаглавие" type="text" v-model="$v.article.subtitle.$model"></v-text-field>
              <v-text-field name="email" label="Текст" type="text" v-model="$v.article.text.$model"></v-text-field>
              <v-text-field name="email" label="Изображения (разделени с ;)" type="text" v-model="$v.article.images.$model"></v-text-field>
              <v-text-field name="email" label="Вътрешни заглавия (разделени с ;)" type="text" v-model="$v.article.innerTitles.$model"></v-text-field>
              <v-text-field name="email" label="Текстове към снимки (разделени с ;)" type="text" v-model="$v.article.imageTexts.$model"></v-text-field>
              <v-text-field name="email" label="Цитати (разделени с ;)" type="text" v-model="$v.article.quotes.$model"></v-text-field>
              <v-text-field name="email" label="Рубрики (разделени с ;)" type="text" v-model="$v.article.topics.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.article.$error" @click="OnAddArticle">Изпрати</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import {ArticleInput} from '../../../core/models/ArticleInterface'
import {required, minLength, maxLength} from 'vuelidate/lib/validators';
import {articlesCollection} from '../../../main'

export default Vue.extend({
  data() {
    return {
      article: {
        title:'',
        subtitle: '',
        text: '',
        images: '',
        innerTitles: '',
        imageTexts: '',
        quotes: '',
        topics: ''
    } as ArticleInput
  }},
  validations: {
    article : {
      title: {required, minLength: minLength(3), maxLength: maxLength(2000)},
      subtitle: {required, minLength: minLength(3), maxLength: maxLength(2000)},
      text: {required, minLength: minLength(3), maxLength: maxLength(2000)},
      images: {required},
      innerTitles: {required},
      imageTexts: {required},
      topics: {required},
      quotes: {required},
    }, 
  },
  methods: {
    OnAddArticle (): void {
      articlesCollection.add({
      title: this.article.title,
      subtitle: this.article.subtitle,
      text: this.article.text,
      images: this.article.images.split(';').map(item => item.trim()),
      innerTitles: this.article.innerTitles.split(';').map(item => item.trim()),
      imageTexts: this.article.imageTexts.split(';').map(item => item.trim()),
      topics: this.article.topics.split(';').map(item => item.trim()),
      quotes: this.article.quotes.split(';').map(item => item.trim()),
      date: new Date()
      })
      .then(function(docRef) {
        console.log(docRef);
        
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      this.article = {
        title:'',
        subtitle: '',
        text: '',
        images: '',
        innerTitles: '',
        imageTexts: '',
        quotes: '',
        topics: ''
    } as ArticleInput

    }
  },
})

</script>

<style lang="scss">

</style>
