<template>
  <div class='login'>
    <title-header title='PARTY-Ox' />

    <main class='login-content'>
      <section class='member'>
        <div>
          <base-button outline>Join</base-button>
          <p class='subheading'>Join an existing party</p>
        </div>

        <div>
          <v-text-field box type="text" name="code" v-model="input.code" label="Code" autocomplete="off" />
        </div>

      </section>

      <section class='ox'>
        <transition name='fade' mode='out-in'>
          <div v-if='!oxFormToggle'>
            <base-button outline @click="oxFormToggle = true">Host</base-button>
            <p class='subheading'>Host a new party</p>
          </div>

          <div class="login-content__form elevation-2" v-else>
            <v-text-field v-if="signUpToggle" box type="text" name="name" v-model="input.name" label="Name"
              autocomplete="off" />
            <v-text-field box type="text" name="email" v-model="input.email" label="Email" autocomplete="off" />
            <v-text-field box type="password" name="password" v-model="input.password" label="Password" autocomplete="off" />

            <base-button primary raised @click="login()">Login</base-button>
            <base-button @click="signUpToggle = !signUpToggle" flat>or sign up</base-button>
          </div>

        </transition>
      </section>
    </main>
  </div>
</template>

<script>
  import TitleHeader from '@/components/TitleHeader'

  export default {
    mounted() {
      // this.$store.dispatch('newSnackbar', 'Wow I work maybe?')
    },
    components: {
      TitleHeader
    },
    data() {
      return {
        input: {
          email: "",
          password: ""
        },
        signUpToggle: false,
        oxFormToggle: false
      }
    },
    methods: {
      login() {
        this.$store.dispatch("login", this.creds)
      }
    }
  }
</script>

<style scoped lang='scss'>
  .login {
    height: 100%;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 3.975rem);

    &__form {
      width: 45rem;
      max-width: calc(100vw - 6rem);
      background-color: var(--lighter-background);
      color: var(--light-color);
      padding: 2rem 3rem;
      border-radius: 0.1rem;
    }
  }

  .member {
    margin-bottom: 1rem;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>