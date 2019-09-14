<template>
  <v-row
    align="center"
    justify="center"
    class="mt-n12"
  >
    <v-img
      min-height="250px"
      max-height="720px"
      :src="require('@/assets/wall_main.jpg')"
      align="left"
      justify="left"
    >
      <h1 class="forth--text font-weight-thin">
        Окрилени<br>от бъдещето
      </h1>
      <h2 class="third--text font-weight-thin">
        (Историята зад тази снимка)
      </h2>
    </v-img>
  </v-row>
</template>

<script lang="ts">

export default {};

</script>

<style scoped lang="scss">

h1 {
  padding-left: 5%;
  padding-top: 18%;
  font-size: 55pt;
  line-height: 55pt;
}

h2 {
  font-family: 'Caveat' !important;
  padding-left: 5%;
  padding-top: 12%;
}
</style>
