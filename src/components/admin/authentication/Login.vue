<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Влез в профила си</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="email" label="Имейл" type="email" v-model="$v.user.email.$model"></v-text-field>
              <v-text-field name="password" label="Парола" id="password" type="password" v-model="$v.user.password.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.$error" @click="OnLoginClick">Вход</v-btn>



<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Вляз
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            text
            @click="OnLoginClick"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>




          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>



  </v-container>
</template>

<script lang="ts">
import {
  required,
  minLength,
  maxLength,
  email
} from 'vuelidate/lib/validators'
import AuthenticationService from './AuthenticationService'
import { User } from '../../../core/models/UserInterface'

export default {
  data() {
    return {
      user: {
        password: '',
        email: ''
      } as User,
      dialog: false
    }
  },
  validations: {
    user: {
      email: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(40),
        email
      },
      password: { required }
    }
  },
  methods: {
    OnLoginClick(): void {
      AuthenticationService.login(this.user.email, this.user.password).then(
        (user: any) => {
          localStorage.setItem('access_token', user.token)
          this.$bus.$emit('logged', 'User logged')
          this.$router.push('/admin')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>

<style scoped lang="scss">

</style>
