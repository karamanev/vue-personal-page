<template>
      <div class="login">
      <h1>Login</h1>
      <form>
        <label for="login">Email</label>
        <input type="email" v-model="$v.email.$model" id="login" placeholder="Ivan Ivanov" />
        <label for="password">Password</label>
        <input type="password" v-model="$v.password.$model" id="password" placeholder="******" />

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
    OnRegisterClick () {
      AuthenticationService.login(this.email, this.password).then(
        (user) => {
          alert('Oops. ' + user)
          console.log(user);
          
          //          this.$router.replace('home')
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
