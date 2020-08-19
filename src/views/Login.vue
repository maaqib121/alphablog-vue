<template>
  <div>
    <h1 class="display-4 mt-4">Login</h1>
    <b-row class="justify-content-center">
      <b-col lg="8" md="10">
        <div v-if="response && response.error">
          <b-alert show variant="danger">{{ response.error }}</b-alert>
        </div>

        <b-card class="mb-4 shadow p-3 bg-white rounded">
          <b-form @submit="onLogin">
            <b-form-group class="mx-4" label="Email address:" label-for="email">
              <b-form-input
                id="email"
                v-model="credentials.email"
                type="email"
                required
                placeholder="Enter your email"
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mx-4 mt-4" label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="credentials.password"
                type="password"
                required
                placeholder="Enter your password"
              ></b-form-input>
            </b-form-group>
            <b-button class="ml-4 mr-4 mt-4" type="submit" variant="outline-success">Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { login } from "../store/api";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      response: ""
    };
  },

  methods: {
    ...mapActions(["login"]),
    onLogin(evt) {
      evt.preventDefault();
      login(this.credentials).then(response => {
        this.response = response;
        if ("token" in this.response) {
          this.login(this.response.token);
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
