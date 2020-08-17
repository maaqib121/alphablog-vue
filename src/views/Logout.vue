<template>
  <div id="logout">
    <h1>Logout from Alpha Blog App</h1>
    <b-row class="justify-content-center">
      <b-col lg="7" md="9">
        <b-card class="mt-4">
          <card-text>Do you really want to logout?</card-text>
          <div class="mt-4">
            <card-text>
              <b-button @click="logout" variant="danger" class="mr-2">Yes</b-button>
              <b-button @click="cancel" variant="primary">No</b-button>
            </card-text>
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