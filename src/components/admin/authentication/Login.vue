<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar color="second">
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
            <v-btn color="second" :disabled="$v.$invalid" @click="OnLoginClick">Вход</v-btn>
          </v-card-actions>
          <p class="red" v-if="$v.$error && (user.password.length > 20 || user.password.length < 4)">Избраната парола трябва да бъде между 4 и 20 знака!</p>
          <p class="red" v-if="$v.$error && user.password.length < 20 && user.password.length > 4">Въведеният имейл е невалиден!</p>
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
      } as User
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
