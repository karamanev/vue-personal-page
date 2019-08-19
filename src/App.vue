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

.regular-text{
  color:black;
  text-align: left;
  &::first-letter{
    font-size: 53pt;
    color: $second;
    font-family: 'Caveat';
  }
}

.inner-heading{
    font-size: 24pt;
    color: $second;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    line-height: normal;
    text-overflow: ellipsis;
}

.overflow-hidden{
    overflow: hidden;
    white-space: nowrap;
    line-height: normal;
    text-overflow: ellipsis;
}

.topic {
  font-family: 'Caveat' !important;
  text-align: left;
  color: $first;
  font-size: 24pt;
  font-weight: 500;
}

.info {
  font-size: 15pt;
  font-weight: bold;
  display: inline-block;
}

.date, .topics {
  font-size: 0.75rem;
  font-weight: 1000;
  color: black;
}

.date{
  float:left;
}

.topics{
  float:right;
}

</style>
