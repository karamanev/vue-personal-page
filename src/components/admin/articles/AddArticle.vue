<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрирай се</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="email" label="Имейл" type="email" v-model="$v.email.$model"></v-text-field>
              <v-text-field name="password" label="Парола" id="password" type="password" v-model="$v.password.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.$error" @click="OnRegisterClick">Изпрати</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>

export default {
  data() {
  },
  methods: {
    OnAddArticle () {
      if (this.$refs.form.validate()) {
      AuthenticationService.register(this.email, this.password).then(
        (user) => {
          localStorage.setItem('username', user.email) 
          localStorage.setItem('token', user.refreshToken) 
          this.$router.push('/admin')        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
      }
    }
  },

}
</script>

<style>

</style>
