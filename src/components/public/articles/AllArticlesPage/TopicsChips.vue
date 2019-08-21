<template>
  <div class="text-center">
    <v-chip
      class="ma-2"
      color="secondary"
      text-color="first"
      v-for="(topic, index) in topics" :key="index"
    >
      {{topic}}
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Topics } from '../../../../core/models/ArticleInterface'

export default {
  data() {
    return {
      topics: Topics
    }
  },
  updated: () => {
    console.log(this.topics);
  }
}
</script>

<style scoped lang="scss">

</style>
