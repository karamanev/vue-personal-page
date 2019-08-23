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

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-DemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Repo';
    src: url('~@/assets/fonts/Repo/Repo-ExtraBlack.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

$first: #003B6D;
$second: #6699CC;
$third: #EBEDF3;
$forth: #BDBDBD;
$fifth: #676767;

#app {
  font-family: 'Repo', 'Cormorant Infant', Arial, serif;
  text-align: center;
}

.regular-text{
  color:black;
  text-align: left;
}

.with-initial {
  &::first-letter{
    font-size: 53pt;
    color: $second;
    font-family: 'Caveat';
  }
}

.inner-heading, .small-heading {
  font-size: 24pt;
  color: $second;
  overflow: hidden;
  white-space: nowrap;
  line-height: normal;
  text-overflow: ellipsis;
}

.inner-heading {
  font-size: 24pt;
  text-align: left;
}

.small-heading {
  font-size: 18pt;
  text-align: center;
}

.overflow-hidden {
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
  float: left;
}

.topics {
  float: right;
}

</style>
