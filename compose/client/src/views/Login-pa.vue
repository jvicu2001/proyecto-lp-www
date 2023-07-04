<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-center">
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                outlined
              ></v-text-field>
              <v-btn
                type="submit"
                color="primary"
                block
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent ({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Perform login logic here
      console.log('Login clicked');
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      axios.post('http://server:3000/login', {
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
});
</script>