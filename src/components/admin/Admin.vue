<template>
  <div>
    <h1>Добре дошли в административния панел!</h1>
    <div class="col-12 d-flex flex-row justify-space-around">
      <v-btn :to="{name:'addArticle'}">Добави статия</v-btn>
      <v-btn :to="{name:'deleteArticle'}">Изтрий статия</v-btn>
      <v-btn :to="{name:'editArticle'}">Редактирай статия</v-btn>
      <v-btn :to="{name:'addQuote'}">Добави цитат</v-btn>
      <v-btn :to="{name:'deleteQuote'}">Изтрий цитат</v-btn>
      <v-btn :to="{name:'editQuote'}">Редактирай цитат</v-btn>
    </div>
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
export default {
}
</script>

<style scoped lang="scss">

</style>
