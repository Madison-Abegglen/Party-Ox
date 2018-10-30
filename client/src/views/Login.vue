<template>
  <div class='page-wrapper'>
    <title-header title='PARTY-Ox' />

    <main class='page'>
      <section class='member'>
        <transition name='scale' mode='out-in'>
          <div v-if='!memberFormToggle' key='button'>
            <base-button outline @click='memberFormToggle = true; oxFormToggle = false'>Join</base-button>
            <p class='subheading'>Join an existing party</p>
          </div>

          <v-form
            v-else class="card member-content__form"
            key='form'
            elevation-10
            @submit.prevent='$store.dispatch("initMemberSocket", input.code.toUpperCase())'
          >
            <v-text-field
              box type="text"
              name="code"
              v-model="input.code"
              label="Enter code here"
              :rules='[rules.exact(5, "code")]'
              maxlength='5'
            />
            <base-button
              type="submit"
              primary
              raised
              :disabled='input.code.length !== 5'
            >Join</base-button>
          </v-form>
        </transition>
      </section>

      <section class='ox'>
        <transition name='scale' mode='out-in'>

          <div v-if='!oxFormToggle' key='button'>
            <base-button outline @click="oxFormToggle = true; memberFormToggle = false">Host</base-button>
            <p class='subheading'>Host a new party</p>
          </div>

          <v-form
            v-else
            @submit.prevent="signUpToggle ? signup() : login()"
            v-model='input.valid'
            class="login-content__form card elevation-10"
            key='form'
          >
            <transition name='max-height-6'>
              <v-text-field
                v-if="signUpToggle"
                v-model="input.name"
                :rules='[rules.required("name")]'
                type="text"
                label="Name"
                name='name'
                box
              />
            </transition>
            <v-text-field
              v-model="input.email"
              :rules='[rules.required("email")]'
              type="email"
              label="Email"
              name='email'
              box
            />
            <v-text-field
              :type="input.showPassword ? 'text' : 'password'"
              :append-icon="input.showPassword ? 'visibility_off' : 'visibility'"
              @click:append="input.showPassword = !input.showPassword"
              v-model="input.password"
              :rules='[rules.min(8, "password")]'
              hint='Password must be at least 8 characters'
              label="Password"
              name='password'
              box
              :loading='$store.state.loading'
            />
            <base-button :disabled='!input.valid' type="submit" primary raised v-if="!signUpToggle">Login</base-button>
            <base-button :disabled='!input.valid' type="submit" primary raised v-else>Signup</base-button>
            <base-button @click="signUpToggle = !signUpToggle" flat>or {{signUpToggle ? "login":"signup"}}</base-button>
          </v-form>

        </transition>
      </section>
    </main>
  </div>
</template>

<script>
import TitleHeader from "@/components/TitleHeader";

export default {
  name: "Login",
  mounted() {
    this.$store.dispatch("authenticate");
  },
  components: {
    TitleHeader
  },
  data() {
    return {
      input: {
        name: '',
        email: '',
        password: '',
        showPassword: false,
        valid: true,
        code: ''
      },
      rules: {
        required: name => v => !!v || `${name.capitalize()} is required`,
        min: (length, name) => v => v.length >= length || `${name.capitalize()} must be at least ${length} characters`,
        exact: (length, name) => v => v.length === length || `${name.capitalize()} must be exactly ${length} characters`
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
      this.input.loading = true;
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
.page-wrapper {
  overflow: hidden;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1 0;
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
}

.member-content__form :global(input) {
  text-transform: uppercase !important;
}

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.3s, transform 0.3s;
  will-change: opacity, transform;
}
form.scale-enter,
form.scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
div.scale-enter,
div.scale-leave-to {
  opacity: 0;
  transform: scale(1) translateX(-50%);
}

.scale-enter-to,
.scale-leave {
  opacity: 1;
  transform: scale(1);

  .member-content__form {
    transform: scale(1) translateY(-5rem) !important;
  }
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
</style>