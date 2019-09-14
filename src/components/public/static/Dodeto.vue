<template>
  <div>
    <v-row
      align="center"
      justify="center"
      class="mt-n12"
    >
      <v-img
        id="welcome"
        min-height="250px"
        max-height="720px"
        :src="require('@/assets/01.jpg')"
        align="left"
        justify="left"
      />
      <h1
        id="big-heading"
        class="first--text font-weight-thin"
      >
        „И додето се раждат лъчите“
      </h1>
    </v-row>
  </div>
</template>

<script lang="ts">

export default { };
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
