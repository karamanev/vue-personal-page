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

#welcome {
  opacity: 0.4;
}

.date-topics {
  margin-top: -20px;
}

.main-title {
  position: absolute;
}

.main-subtitle {
  position: absolute;
  top:340pt;
  width: 40%;
}

</style>
