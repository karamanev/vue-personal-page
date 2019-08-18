<template>
  <div>
    <v-app-bar fixed color="secondary" class="justify-center" src="../../../assets/bar.jpg">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>
      <v-toolbar-title class="pr-4">
        <router-link id="logo" class="text-capitalize forth--text" text :to="{name:'home'}">Георги Караманев</router-link>
      </v-toolbar-title>

      <v-toolbar-items class="justify-center">
        <v-btn class="menu third--text text-capitalize" text :to="{name:'allArticles'}">Публикации</v-btn>
        <v-btn class="menu third--text text-capitalize" text :to="{name:'register'}">И додето</v-btn>
        <v-btn v-if="isLogged === false" class="menu third--text text-capitalize" text :to="{name:'register'}">Регистрация</v-btn>
        <v-btn v-if="isLogged === false" class="menu third--text text-capitalize" text :to="{name:'login'}">Вход</v-btn>
        <v-btn v-if="isLogged === true" class="menu third--text text-capitalize" text :to="{name:'admin'}">Админ</v-btn>
        <v-btn v-if="isLogged === true" class="menu third--text text-capitalize" text @click="logout">Изход</v-btn>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
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

<!--
  <v-toolbar clipped-left>
    <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      id = "drawer"
    >
    </v-navigation-drawer>

     drawer: false
-->

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
  font-family: 'Caveat';
  text-decoration: none;
  font-size: 40pt;
  font-weight: 400;
}

.menu {
  font-weight: 300 !important;
  font-size: 17pt;
  letter-spacing: 0;
}

</style>
