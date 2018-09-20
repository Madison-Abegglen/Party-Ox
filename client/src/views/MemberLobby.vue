<template>
  <div class='page-wrapper'>
    <base-header circle underline>
    </base-header>

    <div class='page'>
      <section class='lobby-body'>
        <h2 class='uppercase party-intro'>You are in the lobby for
          '{{party.name}}'</h2>

        <p class='uppercase party-intro-pt2'>Enter a name below to join the party</p>

        <v-divider class='funny-divider'></v-divider>

        <v-form
          class='name-form'
          @submit.prevent='$store.dispatch("joinParty", { partyCode: party.code, name: first })'
        >
          <v-flex xs12 sm6>
            <v-text-field
              v-model="first"
              label="Name "
              solo
            ></v-text-field>

          <base-button
            type='submit'
            outline
            secondary
            round
            class='mx-auto name-form-button'
            >Join Party</base-button>
          </v-flex>
        </v-form>

      </section>


    </div>
    <footer class="footer">
      <base-button
        outline
        secondary
        round
        class='mx-auto button'
        :to="{ name: 'login'}"
      >
        <v-icon class='arrow-icon'>arrow_back_ios</v-icon>
        back to login
      </base-button>
    </footer>
  </div>
</template>

<script>
// HERES A PARTY CODE TO TEST WITH: ' O4FKI '
export default {
  name: "MemberLobby",
  props: {
    code: {
      type: String,
      required: true
    }
  },
  mounted() {
    if (!this.party._id) {
      this.$store.dispatch("initMemberSocket", this.$props.code);
    }
  },
  computed: {
    party() {
      return this.$store.state.activeParty;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  background-color: var(--dark-background);
  overflow-y: auto;
  .page {
    position: relative;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    flex: 1 0;
    display: flex;
    flex-direction: column;
  }
}
.party-intro {
  margin-right: auto;
  margin-left: 1.2rem;
  margin-top: 4rem;
  margin-bottom: 0.8rem;
  color: rgba(#66fcf1, 0.85);
  font-weight: lighter;
  letter-spacing: 0.25rem;
}
.party-intro-pt2 {
  margin-top: 6rem;
  color: rgba(#66fcf1, 0.85);
  font-weight: lighter;
  display: flex;
  justify-content: center;
}
.funny-divider {
  margin-left: 2rem;
  margin-right: 2rem;
}
.name-form {
  margin-top: 2rem;
}
.name-form-button {
  display: flex;
  justify-content: center;
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--dark-background);
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>

<style lang="scss">
</style>
