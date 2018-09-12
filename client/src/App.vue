<template>
  <v-app dark id="app">
    <router-view/>
    <v-snackbar bottom right>{{ $store.state.snackbar }}</v-snackbar>
  </v-app>
</template>

<style lang="scss">
body, html {
  margin: 0;
  min-height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #c5c6c7;
  background-color: #0b0c10;
  --lighter-background: #1f2833;
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
