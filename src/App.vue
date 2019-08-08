<template>
  <div id="app">
    <page-header/>
    <router-view />
    <page-footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase' 
import PageHeader from './common/header/PageHeader.vue'
import PageFooter from './common/footer/PageFooter.vue'

export default Vue.extend({
  components:{
    PageHeader,
    PageFooter
  }

})
</script>

<style lang="scss">
</style>
