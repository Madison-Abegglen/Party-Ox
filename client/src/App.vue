<template>
  <v-app dark id="app">
    <transition name='fade' mode='out-in'>
      <router-view />
    </transition>
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
  // App stuff

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

  // Global styles

  .page-wrapper {
    height: 100%;
    width: calc(100% - 2rem);
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    // padding-bottom: 5rem;
    padding-top: 64px;
    background-color: var(--dark-background);
    overflow-y: auto;

    .page {
      position: relative;
      width: 100%;
      max-width: 55rem;
      margin: 0 auto;
      flex: 1 0;
      display: flex;
      flex-direction: column;
    }
  }

  // Transitions

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.175s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  // Animations

  // @keyframes fade-in {
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // }
</style>