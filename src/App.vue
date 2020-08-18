<template>
  <div id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/">Home</router-link>
        </b-nav-item>

        <b-nav-item-dropdown text="Articles" right>
          <b-dropdown-item>
            <router-link to="/create">Create Article</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">
          <router-link to="/login">Login</router-link>
        </b-nav-item>

        <b-nav-item href="#">
          <router-link to="/logout">Logout</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
