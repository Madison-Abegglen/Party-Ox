<template>
  <div class='settings-wrapper'>
    <base-header circle style='border-bottom: solid 1px #66fcf150;'>
    </base-header>

    <div class='settings'>
      <h2 class="title uppercase primary--text">Party Settings</h2>

      <v-divider class='divider'></v-divider>

      <div>
        <v-card-text class='uppercase party-mode'>Feature Coming Soon</v-card-text>
        <v-select :items='["Ox hosting", "Free-play"]' value='Ox hosting' outline label='Party mode' disabled></v-select>
      </div>

        <v-divider class='divider'></v-divider>

      <h2 class='display-members-title uppercase'>party members</h2>

         <!-- <div> 
            <p class='member-length' :class='{ small: party.members.length >= 100 }'>
            {{party.members.length < 100 ? party.members.length : '99+'}}

          </p>
        </div> -->

      <v-divider class='divider'></v-divider>

      <div>
        <!-- <v-card></v-card> -->
        <h4 class='title uppercase' style='font-weight: lighter;'>No Party Members</h4>
      </div>

      <footer class="footer">
        <base-button
          outline
          secondary
          round
          class='mx-auto'
          :to="{ name: 'party', params: { id } }"
        >
            <v-icon class='arrow-icon'>arrow_back_ios</v-icon>
          back to party
        </base-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartySettings",
  props: ["id"],

  computed: {
    party() {
      return this.$store.state.parties.find(
        party => party._id === this.$props.id
      );
    }
  }
};
</script>

<style scoped lang='scss'>
.settings-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  background-color: var(--dark-background);
  overflow-y: auto;
}
.settings {
  position: relative;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  flex: 1 0;
  display: flex;
  flex-direction: column;
}
// .divider {
//   margin-left: 1rem;
//   margin-right: 1rem;
// }
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--dark-background);
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  display: flex;
  width: calc(100% - 2rem);
}
.uppercase {
  text-transform: uppercase;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 0.25rem !important;
  font-weight: normal;
}
.display-members-title {
  margin-right: auto;
  margin-left: 1.2rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  color: rgba(#66fcf1, 0.85);
  font-weight: lighter;
}
.party-mode {
  color: rgba(#66fcf1, 0.75);
  font-weight: 500;
}
.form-button {
  height: 2rem;
  &.party-btn:hover {
    background-color: #111 !important;
  }
}
</style>