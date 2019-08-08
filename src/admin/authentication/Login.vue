<template>
  <div class="login">
    <h1>Вход</h1>
    <form @submit.prevent="OnLoginClick">
      <label for="login">Имейл</label>
      <input type="email" v-model="$v.email.$model" id="login" placeholder="Имейл" />
      <label for="password">Парола</label>
      <input type="password" v-model="$v.password.$model" id="password" placeholder="Парола" />
      <input type="submit" value="Login" :disabled="$v.$error"/>
    </form>
  </div>
</template>

<script>
import {required, minLength, maxLength, email} from 'vuelidate/lib/validators';
import AuthenticationService from './AuthenticationService.ts'

export default {
  data() {
      return {
        password: '',
        email: '',
      }
  },
  validations: {
      email: {required, minLength: minLength(3), maxLength: maxLength(20), email},
      password: {required}
  },
    methods: {
    OnLoginClick () {
      AuthenticationService.login(this.email, this.password).then(
        (user) => {
          localStorage.setItem('username', user.user.email) 
          localStorage.setItem('token', user.user.refreshToken) 
          this.$router.push('/admin')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  },
}
</script>

<style>

</style>
