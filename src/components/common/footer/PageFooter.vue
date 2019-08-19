<template>
  <v-footer>
  	<v-layout row>
   	  <v-flex xs8 class="align-left">
        <v-btn class="footer-item text-capitalize" text :to="{name:'register'}">Начало</v-btn>
        <v-btn class="footer-item text-capitalize" text :to="{name:'articlesAll'}">Публикации</v-btn>
        <v-btn class="footer-item text-capitalize" text :to="{name:'register'}">И додето</v-btn>
        <v-btn class="footer-item text-capitalize" text :to="{name:'register'}">За мен</v-btn>
      </v-flex>
	    <v-spacer></v-spacer>
   	  <v-flex xs3>
    		<img class="mr-1 fbImg" src="../../../assets/icons/facebook.svg" href="#" />
    		<img class="mr-1 fbImg" src="../../../assets/icons/goodreads.svg" href="#" />
    		<img class="mr-1 fbImg" src="../../../assets/icons/instagram.svg" href="#" />
		    <img class="mr-1 fbImg" src="../../../assets/icons/linkedin.svg" href="#" />
  	  </v-flex>
      <v-flex xs1>
        <div>&copy; {{ new Date().getFullYear() }}</div>
  	  </v-flex>
  	</v-layout>
  </v-footer>
</template>

<script>
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

</style>
