<template>
  <div class="text-center">
    <v-chip
      class="ma-2 text-uppercase"
      color="second"
      text-color="white"
      v-for="(topic, index) in topics" :key="index"
      @click="filter(topic)"
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
      topics: [
        'Литература',
        'Технологии',
        'Наука',
        'Интервю',
        'Лично',
        'Фотография',
        'Пътеки',
        'От архива'
      ]
    }
  },
  methods: {
    filter(topic) {
      this.$emit('onFilter', topic);
    }
  }
}
</script>
