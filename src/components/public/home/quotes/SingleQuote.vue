<template>
  <v-carousel-item>
    <div class="display-3">Slide {{ quote.id }}</div>
    <div class="display-3"> {{ quote.text }}</div>
    <div class="display-3"> {{ quote.date | date }}</div>
    <div class="display-3"> {{ quote.author }}</div>
    <img v-bind:src="getImageUrl(quote.image)">
</v-carousel-item>
</template>

<script lang="ts">
import Vue from 'vue'
import { Quote } from '../../../../core/models/QuoteInterface'


export default Vue.extend({
  data() {
    return {
    }
  },
  methods: {
    getImageUrl(url) {
      var images = require.context('../../../../assets/', false, /\.jpg$/)
      return images('./' + url + ".jpg")
    }
  },
  props: {
    quote: {
      type: Object as () => Quote,
      default: () => ({})
    }
  },
  filters: {
    date: function (value) {
      var a = new Date(value.seconds * 1000);
      var months = [
        'Ян',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Юни',
        'Юли',
        'Авг',
        'Сеп',
        'Окт',
        'Ное',
        'Дек'
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
      return time;
    }
  }
})

</script>

<style lang="scss">

</style>
