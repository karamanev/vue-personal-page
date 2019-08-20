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


    <v-chip class="ma-2">
      Default
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
    >
      Primary
    </v-chip>

    <v-chip
      class="ma-2"
      color="secondary"
    >
      Secondary
    </v-chip>

    <v-chip
      class="ma-2"
      color="red"
      text-color="white"
    >
      Red Chip
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
  mounted: () => {
    console.log(this.topics);
  }
}
</script>

<style scoped lang="scss">

</style>
