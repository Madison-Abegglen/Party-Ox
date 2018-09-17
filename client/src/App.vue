<template>
  <v-app dark id="app">
    <router-view />
    <v-snackbar dark bottom right :value='$store.state.snackbar.open' :timeout='3000' absolute>
      {{ $store.state.snackbar.text }}
      <square-button flat small @click='$store.dispatch("closeSnackbar")'>Close</square-button>
    </v-snackbar>
  </v-app>
</template>

<script>
import SquareButton from "@/components/SquareButton.vue";

export default {
  components: {
    SquareButton
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  min-height: 100vh;
  width: 100vw;
}

body::-webkit-scrollbar {
  width: 6px;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  color: #c5c6c7;
  --dark-background: hsl(228, 19%, 8%);
  --light-color: #c5c6c7;
  --lighter-background: #1f2833;
  --primary: #66fcf1;
  background-color: var(--dark-background);
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