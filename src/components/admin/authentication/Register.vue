<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar color="second">
            <v-toolbar-title>Регистрирай се</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="email" label="Имейл" type="email" v-model="$v.user.email.$model"></v-text-field>
              <v-text-field name="password" label="Парола" id="password" type="password" v-model="$v.user.password.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="second" :disabled="$v.$invalid" @click="OnRegisterClick">Изпрати</v-btn>
          </v-card-actions>
          <p class="red" v-if="$v.$error && (user.password.length > 20 || user.password.length < 4)">Избраната парола трябва да бъде между 4 и 20 знака!</p>
          <p class="red" v-if="$v.$error && user.password.length <= 20 && user.password.length >= 4">Въведеният имейл е невалиден!</p>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar vertical absolute :color="snackbar.color" v-model="snackbar.show" :timeout="snackbar.timeout">{{ snackbar.text }}</v-snackbar>
  </v-container>
</template>


<script lang="ts">
import {
  required,
  minLength,
  maxLength,
  email
} from 'vuelidate/lib/validators';
import AuthenticationService from './AuthenticationService'
import { User } from '../../../core/models/UserInterface'

export default {
  data() {
    return {
      user: {
        password: '',
        email: ''
      } as User,
      snackbar: {
        color: 'red',
        show: false,
        timeout: 3000,
        text: ''
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    OnRegisterClick(): void {
      this.snackbar.text = 'Благодарим ви, че се регистрирахте успешно!';
      this.snackbar.color = 'green';
      this.snackbar.show = true;
      AuthenticationService.register(this.user.email, this.user.password).then(
        (user: any) => {
          localStorage.setItem('access_token', user.token);
          this.$bus.$emit('logged', 'User logged');
          setTimeout(this.$router.push('/admin'), 3000);
        },
        (err) => {
          this.snackbar.text = `Опитайте отново! Възникна следната грешка: ${err.message}`;
          this.snackbar.color = 'red';
          this.snackbar.show = true;
        }
      );
    }
  }

}
</script>

<style scoped lang="scss">

</style>
