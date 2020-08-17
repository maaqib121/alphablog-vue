<template>
  <div id="login">
    <h1>Login to Alpha Blog App</h1>
    <b-row class="justify-content-center">
      <b-col lg="7" md="9">
        <div v-if="response && response.error">
          <b-alert show variant="danger">{{ response.error }}</b-alert>
        </div>

        <b-card class="mt-4">
          <b-form @submit="onLogin">
            <b-form-group
              class="ml-4 mr-4"
              id="email-group"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="email"
                v-model="login.email"
                type="email"
                required
                placeholder="Enter your email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="ml-4 mr-4 mt-4"
              id="password-group"
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="login.password"
                type="password"
                required
                placeholder="Enter your password"
              ></b-form-input>
            </b-form-group>
            <b-button class="ml-4 mr-4 mt-4" type="submit" variant="success">Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    onLogin(evt) {
      evt.preventDefault();
      axios
        .post("https://aaqib-alphablog.herokuapp.com/api/v1/login/", this.login)
        .then(response => {
          this.response = response.data;
          if ("token" in this.response) {
            localStorage.setItem("token", this.response.token);
            this.$router.push("/");
          }
        });
    }
  }
};
</script>