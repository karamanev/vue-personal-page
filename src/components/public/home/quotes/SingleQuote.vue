<template>
    <v-carousel-item>
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


</template>


<script lang="ts">
export default {
  data() {
    return {
    }
  },
  props: []
}

</script>

<style lang="scss">

</style>