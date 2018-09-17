<template>
  <div class='party-code-wrapper'>
    <base-header circle primary style='border-bottom: solid 1px #66fcf150;'>
    </base-header>
    <div class='party-code'>
      <v-card class="party-code-card">
        <v-card-title class='headline card-title'>Your party code:</v-card-title>
        <v-divider></v-divider>
        <section>
          <p class="party-code display-1 primary--text">{{activeParty.code}}</p>
          <v-btn round flat type="button"
            v-clipboard:copy='activeParty.code'
            v-clipboard:success='onCopy'
            v-clipboard:error="onError">
            <v-icon class="copyIcon">file_copy</v-icon>
          </v-btn>
        </section>
      </v-card>
      <base-button
        raised
        outline
        secondary
        class="px-3 py-1 mx-auto"
        :to="{name: 'ox-home'}"
        bottom>
        <v-icon>arrow_back_ios</v-icon>
        Back to profile
      </base-button>
    </div>
  </div>
</template>



<script>
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
    }
  }
};
</script>

<style scoped lang='scss'>
.party-code-wrapper {
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
}
.party-code {
  position: relative;
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  flex: 1 0;
  display: flex;
  flex-direction: column;
}
.party-code-card {
  margin-top: 5rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 3rem;
  padding: 3rem;
}
.party-code {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}
.card-title {
  display: flex;
  justify-content: center;
}
</style>