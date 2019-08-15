<template>
  <div id="app">
    <page-header/>
    <router-view/>
    <page-footer/>
  </div>
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
