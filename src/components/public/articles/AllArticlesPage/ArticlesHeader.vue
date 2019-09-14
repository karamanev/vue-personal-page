<template>
  <v-row
    align="center"
    justify="center"
    class="mt-n12"
  >
    <v-img
      id="welcome"
      min-height="250px"
      max-height="720px"
      :src="require('@/assets/02.jpg')"
      align="left"
      justify="left"
    />
    <slot name="title" />
    <slot name="subtitle" />
    <slot name="date-topics" />
  </v-row>
</template>

<script lang="ts">

export default {
  props: {
    title: {
      default: '',
      type: String
    }
  },
  data() {
    return {
    };
  }
};
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
  top: 340pt;
  width: 40%;
}

</style>
