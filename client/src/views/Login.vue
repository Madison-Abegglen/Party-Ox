<template>
  <div class='login'>
    <title-header title='PARTY-Ox' />
    <main class='login-content'>
      <section class='member'>
        <base-button>Join</base-button>
        <p class='subheading'>Join an existing party</p>
      </section>
      <section class='ox'>
        <v-form class="login-content__form elevation-2">
          <v-text-field box type="text" name="email" v-model="input.email" label="Email" autocomplete="off" />
          <v-text-field box type="password" name="password" v-model="input.password" label="Password" autocomplete="off" />
          <base-button primary raised @click="login()">Login</base-button>
          <base-button flat>or sign up</base-button>
        </v-form>
      </section>
    </main>
  </div>
</template>

<script>
  import TitleHeader from '@/components/TitleHeader'

  export default {
    components: {
      TitleHeader
    },
    data() {
      return {
        input: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
        // if (this.input.email != "" && this.input.password != "") {
        //   if (this.input.email == this.$parent.email && this.input.password == this.$parent.password) {
        //     this.$router.replace({ name: "OxHome" });
        //   } else {
        //     this.$store.dispatch("newSnackbar", "Invalid password")
        //   }
        // } else {
        //   this.$store.dispatch("newSnackbar", "Incorrect login information")
        // }
        // **Should dispatch to store**
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
    }
  }
</style>