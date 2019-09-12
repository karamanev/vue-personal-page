<template>
  <v-app id="app">
    <page-header app/>
    <v-content class="mt-12">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <page-footer app/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app';
import 'firebase/auth';

import PageHeader from './components/common/header/PageHeader.vue'
import PageFooter from './components/common/footer/PageFooter.vue'

export default Vue.extend({
  components: {
    PageHeader,
    PageFooter
  }

})
</script>

<style lang="scss">
  @import './scss/fonts.scss';
  @import './scss/variables.scss';
</style>
