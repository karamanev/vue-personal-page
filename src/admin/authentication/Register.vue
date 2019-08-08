<template>
        <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="OnRegisterClick">
        <label for="email">Email</label>
        <input type="text" v-model="$v.email.$model" id="email" placeholder="ivan@gmail.com" />
        <label for="password">Password</label>
        <input type="password" v-model="$v.password.$model" id="password" placeholder="******" />
        <input type="submit" value="Register" :disabled="$v.$error" />
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
    OnRegisterClick () {
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
  },

}
</script>

<style>

</style>
