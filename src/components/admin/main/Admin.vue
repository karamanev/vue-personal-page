<template>
  <div>
    <h1 class="my-12">
      Добре дошли в административния панел!
    </h1>
    <div class="col-12 d-flex flex-row justify-space-around my-12">
      <v-btn
        color="first"
        class="third--text"
        :to="{name:'adminMenu'}"
      >
        Начало
      </v-btn>
      <v-btn
        color="first"
        class="third--text"
        :to="{name:'addArticle'}"
      >
        Добави статия
      </v-btn>
      <v-btn
        color="first"
        class="third--text"
        :to="{name:'addQuote'}"
      >
        Добави цитат
      </v-btn>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default { };
</script>
