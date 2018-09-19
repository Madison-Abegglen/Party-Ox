<template>
  <div class='page-wrapper'>
    <base-header circle style='border-bottom: solid 1px #66fcf150;'>
    </base-header>

    <div class='page'>
      <h2 class="title uppercase primary--text">Party Settings</h2>

      <v-divider class='divider'></v-divider>

      <div class='coming-soon'>
        <v-select :items='["Ox hosting", "Free-play"]' value='Ox hosting' outline label='Party mode' disabled>
        </v-select>
      </div>

      <h2 class='display-members-title uppercase'>Party members</h2>

        <!--
        <div>
          <p class='member-length' :class='{ small: party.members.length >= 100 }'>
            {{party.members.length < 100 ? party.members.length : '99+'}}
          </p>
        </div>
        -->

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

<style lang='scss'>
  .coming-soon {
    position: relative;
    margin: 1rem 0;
    pointer-events: none;

    &::before {
      content: '';
      text-transform: uppercase;
      width: 100%;
      height: 100%;
      background-color: rgba(#66fcf1, 0.15);
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 0.35rem;
    }
    &::after {
      content: 'Feature coming soon';
      color: var(--primary);
      font-size: 1.25rem;
      text-shadow: 1px 1px 5px black;
      letter-spacing: 0.15rem;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      text-align: center;
      transform: translate(0, -50%);
      z-index: 2;
    }
    * {
      opacity: 0.85;
    }
    :global(.v-input__slot) {
      margin: 0;
    }
    :global(.v-text-field__details) {
      display: none;
    }
  }
</style>