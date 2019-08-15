import Vue from 'vue';

<template>
  <v-carousel>
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-layout
          align-center
          fill-height
          justify-center
        >
          <div class="display-3">Slide {{ i + 1 }}</div>
        </v-layout>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
export default {


}

</script>

<style lang="scss">

</style>
