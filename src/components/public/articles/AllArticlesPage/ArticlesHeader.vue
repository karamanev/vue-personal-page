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
    <slot name="subtitle"></slot>
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

.main-title {
  font-size: 55pt;
  line-height: 55pt;
  font-family: 'Caveat' !important;
  position: absolute;
}

.main-subtitle {
  font-size: 25pt;
  line-height: 55pt;
  text-align: center;
  position: absolute;
  top:340pt;
  width: 40%;
  line-height: 1.3;
  font-weight: 600 !important;
}

#welcome {
  opacity: 0.4;
}

.date-topics {
margin-top: -20px
}

</style>
