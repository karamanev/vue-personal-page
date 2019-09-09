<template>
  <v-footer>
  	<v-layout row align-center>
   	  <v-flex xs8>
      	<v-layout row justify-space-around>
          <v-btn class="footer-item" text :to="{name:'register'}">Начало</v-btn>
          <v-btn class="footer-item" text :to="{name:'allArticles'}">Публикации</v-btn>
          <v-btn class="footer-item" text :to="{name:'dodeto'}">И додето</v-btn>
          <v-btn class="footer-item" text :to="{name:'dodeto'}">За мен</v-btn>
        </v-layout>
      </v-flex>
   	  <v-flex xs2>
    		<img class="mr-1 fbImg" src="@/assets/icons/facebook.svg" href="#" />
    		<img class="mr-1 fbImg" src="@/assets/icons/goodreads.svg" href="#" />
    		<img class="mr-1 fbImg" src="@/assets/icons/instagram.svg" href="#" />
		    <img class="mr-1 fbImg" src="@/assets/icons/linkedin.svg" href="#" />
  	  </v-flex>
      <v-flex xs2>
        <div class="copy">&copy; Георги Караманев {{ new Date().getFullYear() }}</div>
  	  </v-flex>
  	</v-layout>
  </v-footer>
</template>

<script lang="ts">

export default {

}
</script>

<style scoped lang="scss">

.footer-item  {
  font-weight: 300 !important;
  letter-spacing: 0;

  &:before{
    background-color: unset;
  }
}

.copy {
  font-size: 9pt;
}

</style>
