<template>
  <v-card height="500px" px-12>
    <v-img
      :src="image"
      class="white--text"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title
        class="fill-height align-end"
        v-text="title"
      ></v-card-title>
    </v-img>
       <v-card-text>
      {{normalizedText}}
      {{normalizedTopics}}
      {{date | date}}
      <router-link :to="{ name:'singleArticle', params: {id}}">Четете</router-link>
       </v-card-text>
  <v-card-actions>
      <v-spacer></v-spacer>
     <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
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
      return this.topics.join();
    },
    normalizedText: function () {
      let maxLength = 150;
      var trimmedString = this.text.substr(0, maxLength);
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
      return trimmedString;
    }
  }
}
</script>

<style lang="scss">

</style>
