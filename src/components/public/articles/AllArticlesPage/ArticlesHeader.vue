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
    <h1 class="first--text font-weight-thin" id="big-heading">{{title}}</h1>
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

h1 {
  padding-left: 5%;
  padding-top: 18%;
  font-size: 55pt;
  line-height: 55pt;
}

#big-heading {
  font-family: 'Caveat' !important;
  position: absolute;
}

</style>
