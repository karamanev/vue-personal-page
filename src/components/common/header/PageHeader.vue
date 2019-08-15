<template>
  <div>
    <v-app-bar color="secondary">
      <v-toolbar-title class="pl-2"><router-link id="logo" :to="{name:'home'}">Георги Караманев</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-if="isLogged === true" text color="white" :to="{name:'addArticle'}">Добави</v-btn>
        <v-btn text color="white" :to="{name:'allArticles'}">Всички статии</v-btn>
        <v-btn v-if="isLogged === false" text color="white" :to="{name:'register'}">Регистрация</v-btn>
        <v-btn v-if="isLogged === false" text color="white" :to="{name:'login'}">Вход</v-btn>
        <v-btn v-if="isLogged === true" text color="white" @click="logout">Изход</v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>
              <button @click="logout">Logout</button></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
import AuthenticationService from '../../admin/authentication/AuthenticationService'

export default {
  data() {
    return {
      isLogged: this.checkIfIsLogged()
    }
  },
  created() {
    this.$bus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    logout() {
      AuthenticationService.logout().then(() => {
        localStorage.removeItem('access_token')
        this.isLogged = this.checkIfIsLogged()
        this.$router.push('/home');
      },
      (err) => {
        alert('Oops. ' + err.message);
      }
      )
    },
    checkIfIsLogged() {
      let token = localStorage.getItem('access_token')
      if (token) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">

#logo {
  font-family: 'Caveat' !important;
  text-decoration: none;
  color: white;
}

</style>
