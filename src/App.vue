<template>
  <v-app id="app">
    <page-header app/>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <page-footer app/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase' 
import PageHeader from './components/common/header/PageHeader.vue'
import PageFooter from './components/common/footer/PageFooter.vue'

export default Vue.extend({
  components:{
    PageHeader,
    PageFooter
  }

})
</script>

<style lang="scss">
#app {
  font-family: 'Repo', Arial, sans-serif;
  text-align: center;
}
</style>
