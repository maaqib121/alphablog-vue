<template>
  <div id="app">
    <div id="nav">
      <b-navbar class="bg-purple" toggleable="sm" type="dark">
        <b-navbar-brand class="text-light" href="/">Alpha Blog</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/">Home</router-link>
            </b-nav-item>

            <b-nav-item-dropdown text="Articles" right>
              <b-dropdown-item>
                <router-link v-if="isAuthenticated()" class="text-dark" to="/create">Create Article</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item v-if="!isAuthenticated()" href="#">
              <router-link to="/login">Login</router-link>
            </b-nav-item>

            <b-nav-item v-if="isAuthenticated()" href="#">
              <router-link to="/logout">Logout</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-container>
        <router-view />
      </b-container>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    isAuthenticated() {
      if ("token" in localStorage) {
        return true;
      }
      return false;
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: normal;
    color: #c7ccd4;

    &.router-link-exact-active {
      color: white;
      font-weight: bolder;
    }
  }
}

.bg-purple {
  background-color: #542d85;
}
</style>
