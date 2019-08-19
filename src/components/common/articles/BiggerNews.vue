<template>
  <v-card flat height="70%" class="ma-2">
    <v-img
      :src="image"
      class="third--text"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
    </v-img>
    <v-card-text>
      <p class="inner-heading">{{title}}</p>
      <p class="date-topics mb-12">
        <span class="date">{{date | date}}</span>
        <span class="topics">{{normalizedTopics}}</span>
      </p>
      <p class="regular-text article-text pa-2">{{normalizedText}}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined class="text-capitalize text-underline mr-6" text :to="{ name:'singleArticle', params: {id}}">Нататък</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">

export default {
  data() {
    return {
    }
  },
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    id: {
      type: String
    },
    date: {
      type: Object
    },
    topics: {
      type: Array
    }
  },
  computed: {
    normalizedTopics: function () {
      return this.topics.join(', ');
    },
    normalizedText: function () {
      let maxLength = 450;
      this.text.trim();
      var trimmedString = this.text.substr(0, maxLength);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, (trimmedString.lastIndexOf(".") + 1)))
      return trimmedString;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
