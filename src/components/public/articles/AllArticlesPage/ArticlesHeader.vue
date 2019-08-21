<template>
    <v-row align="center" justify="center" class="mt-n12">
      <v-img
      min-height="250px"
      max-height="720px"
      src="../../../../assets/01.jpg"
      align="left"
      justify="left"
      id="welcome"
    >
    </v-img>
      <h1 class="big-heading mt-n12">{{title}}</h1>
  </v-row>
</template>

<!--      <h1 class="forth--text font-weight-thin">Окрилени<br>от бъдещето</h1>
      <h2 class="third--text font-weight-thin">(Историята зад тази снимка)</h2>


-->

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

</style>
