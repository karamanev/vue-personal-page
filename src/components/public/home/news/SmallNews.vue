<template>
  <v-card height="250px">
    <v-card-title
      fill-height
      align-end
    ></v-card-title>
       <v-card-text>
      {{text}}
      {{normalizedTopics}}
      {{date}}
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
    }
  }
}
</script>

<style lang="scss">

</style>
