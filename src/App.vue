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
import firebase from 'firebase'
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

$first: #003B6D;
$second: #6699CC;
$third: #EBEDF3;
$forth: #BDBDBD;
$fifth: #676767;

#app {
  font-family: 'Repo', Arial, sans-serif;
  text-align: center;
}
.topic {
  font-family: 'Caveat' !important;
  text-align: left;
  color: $first;
  font-size: 24pt;
}
.info {
  font-size: 15pt;
  font-weight: bold;
  display: inline-block;
}

</style>
