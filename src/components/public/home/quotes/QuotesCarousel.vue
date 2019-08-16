<template>
  <v-carousel>
    <single-quote
      v-for="quote in quotes"
      v-bind:key="quote.id"
      v-bind:quote="quote"
    ></single-quote>
  </v-carousel>
</template>

<script lang="ts">
export default {
  data() {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ]
    }
  }
}

</script>

<style lang="scss">

</style>
