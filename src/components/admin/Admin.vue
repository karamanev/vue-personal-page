<template>
  <div>
    <h1>Добре дошли в административния панел!</h1>
    <div class="col-12 d-flex flex-row justify-space-around">
      <v-btn :to="{name:'addArticle'}">Добави статия</v-btn>
      <v-btn :to="{name:'deleteArticle'}">Изтрий статия</v-btn>
      <v-btn :to="{name:'addQuote'}">Добави цитат</v-btn>
      <v-btn :to="{name:'deleteQuote'}">Изтрий цитат</v-btn>
    </div>
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'


export default Vue.extend({

})

</script>

<style lang="scss">

</style>
