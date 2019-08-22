<template>
  <div>
    <h1 class="topic py-6">За мен</h1>
    <v-layout
      mx-12
      row
      align-stretch
    >
      <v-flex md7>
        <div id="about" class="second--text text-center ma-10">
          <p>Радвам се, че се срещаме!</p>
          <p>Аз съм Георги Караманев, журналист и писател. Работя като програмист и ме вълнуват темите за словото в днешния ден, за това как технологиите променят живота ни...</p>
          <router-link class= "first--text" :to="{name:'home'}">Още за мен</router-link>
        </div>

      </v-flex>
      <v-spacer></v-spacer>
      <v-flex md5>
        <img class="rotate" src="../../../../assets/karamanev.jpg" width="100%">

      </v-flex>
    </v-layout>

  </div>
</template>

<script lang="ts">
export default { }

</script>

<style scoped lang="scss">
#about {
  font-family: 'Caveat' !important;
  font-size: 24pt;
  font-weight: 500;
}

</style>
