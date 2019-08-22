<template>
  <v-row align="center" justify="center" class="mt-n12">
    <v-img
      min-height="250px"
      max-height="720px"
      src="../../../../assets/02.jpg"
      align="left"
      justify="left"
      id="welcome"
    >
  </v-img>
    <slot name="title"></slot>
    <slot name="date-topics"></slot>
  </v-row>
</template>

<script lang="ts">

export default {
  data() {
    return {
    }
  },
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
#welcome {
  opacity: 0.4;
}

#big-heading {
  font-family: 'Caveat' !important;
  position: absolute;
}

.date-topics {
  top: -20px;
}
</style>
