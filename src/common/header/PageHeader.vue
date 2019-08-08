<template>
    <div>
        Това е хедър
        <button @click="logout">Logout</button>
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
