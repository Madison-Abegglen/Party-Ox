<template>
  <div class='page-wrapper'>
    <base-header circle primary underline>
    </base-header>
    <div class='page'>
      <section class='party-code headline primary--text px-4 py-2'>
        <p class='party-code__label'>PARTY CODE</p>
        <p class='party-code__code' align='right'>{{activeParty.code}}</p>
      </section>
      <section class='share-buttons'>
        <square-button icon
          v-clipboard:copy='activeParty.code'
          v-clipboard:success='onCopy'
          v-clipboard:error="onError"
        >
          <v-icon class="copyIcon">file_copy</v-icon>
        </square-button>
        <square-button icon @click='shareFacebook'>
          <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" class="svg-inline--fa fa-facebook-f fa-w-9 fa-2x"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" class=""></path></svg>
        </square-button>
        <square-button icon @click='shareTwitter'>
          <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-2x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
        </square-button>
      </section>
    </div>
    <footer class='footer'>
      <base-button
        raised
        outline
        secondary
        class="px-3 py-1 mx-auto"
        :to="{name: 'ox-home'}"
        bottom
      >
        <v-icon>arrow_back_ios</v-icon>
        Back to profile
      </base-button>
    </footer>
  </div>
</template>

<script>
import SquareButton from '@/components/SquareButton'

export default {
  name: "PartyCode",
  mounted() {
    if (!this.activeParty.code) {
      this.$router.push({ name: "ox-home" });
    }
  },
  computed: {
    activeParty() {
      return this.$store.state.activeParty;
    }
  },
  methods: {
    onCopy() {
      this.$store.dispatch("newSnackbar", "Code copied");
    },
    onError() {
      this.$store.dispatch("newSnackbar", "Unable to copy code");
    },
    shareFacebook() {
      window.open(`https://facebook.com/dialog/share?app_id=1089409351247456&display=popup&href=${encodeURIComponent(`${window.location.origin}/#/lobby/${this.activeParty.code}`)}`)
    },
    shareTwitter() {
      window.open(`https://twitter.com/intent/tweet?text=Join%20my%20party%20on%20Party%20Ox%20with%20this%20code%3A%20${this.activeParty.code}%0A%23partyox`)
    }
  },
  components: {
    SquareButton
  }
};
</script>

<style lang='scss'>
.party-code {
  display: flex;
  width: 40rem;
  max-width: 100%;
  margin: 3rem auto 0;
  background-color: var(--lighter-background);

  &__label,
  &__code {
    margin: 0;
  }

  &__label {}
  &__code {
    margin-left: auto;
  }
}
.share-buttons {
  display: flex;
  flex-direction: row-reverse;
  width: 40rem;
  max-width: 100%;
  margin: 0.25rem auto 0;

  & > button {
    background-color: var(--lighter-background) !important;
    margin-right: 0.125rem;

    &:last-child {
      margin-right: 0;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
}
</style>