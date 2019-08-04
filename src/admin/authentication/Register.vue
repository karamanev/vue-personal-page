<template>
        <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="OnRegisterClick">
        <label for="username">Username</label>
        <input type="text" v-model="$v.username.$model" id="username" placeholder="Ivan Ivanov" />
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

export default {
  data() {
      return {
        username: '',
        password: '',
        email: '',
      }
  },
  validations: {
      username: {required, minLength: minLength(3), maxLength: maxLength(20)},
      email: {required, minLength: minLength(3), maxLength: maxLength(20), email},
      password: {required}
  },
    methods: {
    OnRegisterClick () {
       console.log('a');
       
    }
  },

}
</script>

<style>

</style>
