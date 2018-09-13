<template>
  <div class='login'>
    <title-header title='PARTY-Ox' />

    <main class='login-content'>
      <section class='member'>
        <transition name='fade' mode='out-in'>
            <div v-if='!memberFormToggle'>
            <base-button outline @click='memberFormToggle = true; oxFormToggle = false'>Join</base-button>
            <p class='subheading'>Join an existing party</p>
          </div>

          <div v-else class="card member-content__form">
            <v-text-field box type="text" name="code" v-model="input.code" label="Enter code here" autocomplete="off" />
            <base-button primary>Join</base-button>
          </div>
        </transition>
      </section>

      <section class='ox'>
        <transition name='opacity' mode='out-in'>

          <div v-if='!oxFormToggle'>
            <base-button outline @click="oxFormToggle = true; memberFormToggle = false">Host</base-button>
            <p class='subheading'>Host a new party</p>
          </div>

          <div class="login-content__form card elevation-2" v-else>
            <transition name='max-height-6'>
              <v-text-field v-if="signUpToggle" box type="text" name="name" v-model="input.name" label="Name"
              autocomplete="off" />
            </transition>
            <v-text-field box type="text" name="email" v-model="input.email" label="Email" autocomplete="off" />
            <v-text-field box type="password" name="password" v-model="input.password" label="Password" autocomplete="off" />
            <base-button primary raised @click="login()" v-if="!signUpToggle">Login</base-button>
            <base-button primary raised @click="signup()" v-else>Signup</base-button>
            <base-button @click="signUpToggle = !signUpToggle" flat>or {{ signUpToggle ? "login":"signup"}}</base-button>
          </div>

        </transition>
      </section>
    </main>
  </div>
</template>

<script>
import TitleHeader from "@/components/TitleHeader";

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
        name: "",
        email: "",
        password: ""
      },
      signUpToggle: false,
      oxFormToggle: false,
      memberFormToggle: false
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.input.email,
        password: this.input.password
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        name: this.input.name,
        email: this.input.email,
        password: this.input.password
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.login {
  height: 100%;
  overflow: hidden;
}

.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 3.975rem);
}

.card {
  color: var(--light-color);
  width: 45rem;
  max-width: calc(100vw - 6rem);
  border-radius: 0.1rem;
  padding: 3rem 3rem 1.5rem;
  background-color: var(--lighter-background);
}

.member {
  margin-bottom: 5rem;
  &-content__form {
    transform: translateY(-5rem);
  }
}
</style>

<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.max-height-6-enter-active,
.max-height-6-leave-active {
  transition: max-height 0.25s;
  max-height: 6rem;
  overflow: hidden;
}

.max-height-6-enter,
.max-height-6-leave-to {
  max-height: 0;
}

.max-height-20-enter-active,
.max-height-20-leave-active {
  transition: max-height 0.25s;
  max-height: 20rem;
  overflow: hidden;
}

.max-height-20-enter,
.max-height-20-leave-to {
  max-height: 0;
}
</style>