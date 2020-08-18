<template>
  <div id="logout">
    <h1 class="display-4 mt-4">Logout?</h1>
    <b-row class="justify-content-center">
      <b-col lg="7" md="9">
        <b-card class="mb-4 shadow p-3 bg-white rounded">
          <b-card-text class="lead">Do you really want to logout from Alpha Blog App?</b-card-text>
          <div class="mt-4">
            <b-card-text>
              <b-button @click="logout" variant="outline-danger" class="mx-2">Yes</b-button>
              <b-button @click="cancel" variant="outline-primary">No</b-button>
            </b-card-text>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
