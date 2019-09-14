<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex md8>
        <v-card class="elevation-12">
          <v-toolbar dark >
            <v-toolbar-title class="text-primary" color="second">Редактирай публикация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="title" label="Заглавие" type="text" v-model="$v.article.title.$model"></v-text-field>
              <v-text-field name="subtitle" label="Подзаглавие" type="text" v-model="$v.article.subtitle.$model"></v-text-field>
              <v-textarea name="text" label="Текст" type="text" v-model="$v.article.text.$model"></v-textarea>
              <v-textarea name="images" label="Изображения (разделени със запетая)" type="text" v-model="$v.article.images.$model"></v-textarea>
              <v-textarea name="innerTitles" label="Вътрешни заглавия (разделени със запетая)" type="text" v-model="$v.article.innerTitles.$model"></v-textarea>
              <v-textarea name="imageTexts" label="Текстове към снимки (разделени със запетая)" type="text" v-model="$v.article.imageTexts.$model"></v-textarea>
              <v-textarea name="quotes" label="Цитати (разделени със запетая)" type="text" v-model="$v.article.quotes.$model"></v-textarea>
              <v-text-field name="topics" label="Рубрики (разделени със запетая)" type="text" v-model="$v.article.topics.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="second" :disabled="$v.article.$invalid" @click="OnEditArticle">Изпрати</v-btn>
          </v-card-actions>
          <p class="red" v-if="$v.article.$error">Формата не е полълнена коректно!</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue';
import { ArticleInput } from '@/core/models/ArticleInterface';
import { maxLength, minLength, required } from 'vuelidate/lib/validators';
import { articlesCollection } from '@/main';

export default Vue.extend({
  data() {
    return {
      article: {
        title: '',
        subtitle: '',
        text: '',
        images: '',
        innerTitles: '',
        imageTexts: '',
        quotes: '',
        topics: ''
      } as ArticleInput
    };
  },
  validations: {
    article: {
      title: { required, minLength: minLength(3), maxLength: maxLength(200) },
      subtitle: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(2000)
      },
      text: { required, minLength: minLength(3), maxLength: maxLength(20000) },
      images: { required },
      innerTitles: { required },
      imageTexts: { required },
      topics: { required },
      quotes: { required }
    }
  },
  methods: {
    OnEditArticle(): void {
      articlesCollection.doc(this.$route.params.id).update({
        title: this.article.title,
        subtitle: this.article.subtitle,
        text: this.article.text,
        images: (this.article.images + '').split(',').map(item => item.trim()),
        innerTitles: (this.article.innerTitles + '').split(',').map(item => item.trim()),
        imageTexts: (this.article.imageTexts + '').split(',').map(item => item.trim()),
        topics: (this.article.topics + '').split(',').map(item => item.trim()),
        quotes: (this.article.quotes + '').split(',').map(item => item.trim()),
        id: this.$route.params.id,
        date: new Date()
      })
        .then(() => {
          console.log('Document succesfully updated');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      this.$router.push('/admin');
    }
  },
  firestore() {
    return {
      article: articlesCollection.doc(this.$route.params.id)
    };
  }
});

</script>

<style scoped lang="scss">

</style>
