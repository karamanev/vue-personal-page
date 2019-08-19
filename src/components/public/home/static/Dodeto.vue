<template>
  <div>
    <h1 class="topic">И додето...</h1>
    <v-layout
      pt-6
      mx-12
      row
      align-stretch
    >
      <v-flex md5>
        <div class="dodeto second--text ma-10">
          <p>Дебютният роман на Георги Караманев, издаден през 2016 г., е магическа, но и съвсем реална приказка, разговор за изкуството, приятелството, за важните мигове в живота...</p>
        </div>
      </v-flex>
      <v-flex md2 class= "text-left">
        <img class="rotate" src="../../../../assets/koritsa_sm.jpg" width="100%">
        <router-link class="first--text text-left" :to="{name:'home'}">Още за романа</router-link>
      </v-flex>
      <v-flex md5>
        <div class="dodeto second--text ma-10">
          <p>На границата между биографичното и художественото книгата разказва историята на забравения майстор на българската фотография Йордан Йорданов - Юри (1944 - 2009 г.). </p>
        </div>
      </v-flex>
    </v-layout>

  </div>
</template>

<script lang="ts">
export default { }

</script>

<style scoped lang="scss">

.dodeto {
  font-family: 'Caveat' !important;
  font-size: 24pt;
  font-weight: 500;
}

.rotate {
  transform: rotate(20deg)
}

</style>
