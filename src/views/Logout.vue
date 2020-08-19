<template>
  <div>
    <h1 class="display-4 mt-4">Logout?</h1>
    <b-row class="justify-content-center">
      <b-col lg="7" md="9">
        <b-card class="mb-4 shadow p-3 bg-white rounded">
          <b-card-text class="lead">Do you really want to logout from Alpha Blog App?</b-card-text>
          <div class="mt-4">
            <b-card-text>
              <b-button @click="onLogout" variant="outline-danger" class="mx-2">Yes</b-button>
              <b-button @click="onCancel" variant="outline-primary">No</b-button>
            </b-card-text>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(["logout"]),
    onLogout() {
      this.logout();
      this.$router.push("/login");
    },
    onCancel() {
      this.$router.push("/");
    }
  }
};
</script>
