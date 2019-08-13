<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn :to="'/register'">Регистрация</v-btn>
        <v-btn :to="'/login'">Вход</v-btn>
        <v-btn :to="'/admin'">Админ</v-btn>
        <v-btn @click="logout">Изход</v-btn>
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

  methods: {
    logout: function() {
        AuthenticationService.logout().then(() => {
          localStorage.clear();
          this.$router.push('/home');        },
        (err) => {
          alert('Oops. ' + err.message);
        }
    )}
  }
}
</script>

<style>

</style>
