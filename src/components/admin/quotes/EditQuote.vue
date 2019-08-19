<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark >
            <v-toolbar-title class="text-primary" color="primary">Редактирай цитат</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field name="id" label="ID" type="text" v-model="$v.id.$model"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="$v.id.$error" @click="OnEditQuote">Изпрати</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'

export default Vue.extend({
  data() {
    return {
      id: ''
    }
  },
  validations: {
    id: { required }
  },
  methods: {
    OnEditQuote(): void {
      this.$router.push({ name: 'editQuoteForm', params: { id: this.id } })
    }
  }
})

</script>

<style scoped lang="scss">

</style>
