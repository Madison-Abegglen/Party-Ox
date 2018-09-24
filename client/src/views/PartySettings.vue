<template>
  <div class='page-wrapper'>
    <base-header circle style='border-bottom: solid 1px #66fcf150;'>
    </base-header>

    <div class='page'>
      <!-- Party Code Here -->
      <h2 class="title uppercase primary--text">Party Settings</h2>

      <v-divider></v-divider>


      <div class='coming-soon'>
        <v-select :items='["Ox hosting", "Free-play"]' value='Ox hosting' outline label='Party mode' disabled>
        </v-select>
      </div>

      <v-divider></v-divider>

      <v-card class='d-flex align-center justify-space-between my-2 elevation-0' color='transparent'>
        <p class="headline primary--text uppercase display-members-title">
          <span style='opacity: 0.85;'>Party code</span>
        </p>

        <div class='d-flex' style='flex-grow: 0 !important'>
          <p class="headline primary--text uppercase display-members-title">
            {{party.code}}
          </p>

          <base-button style='padding: 0.5rem; margin: auto 0 auto 0.5rem;' circle flat type="button"
            v-clipboard:copy='party.code'
            v-clipboard:success='onCopy'
            v-clipboard:error="onError">
            <v-icon class="copyIcon">file_copy</v-icon>
          </base-button>
        </div>
      </v-card>

      <v-divider></v-divider>

      <div class='d-flex justify-space-between align-center my-2'>
        <h2 class='headline display-members-title uppercase'>Party members</h2>

        <p class='member-length' style='flex-grow: 0 !important;' :class='{ small: party.members.length >= 100 }'>
          {{ party.members.length < 100 ? party.members.length : '99+' }}
        </p>
      </div>

      <v-divider class='mb-2'></v-divider>

      <div>
        <ul v-if='party.members.length' style='list-style: none;'>
          <member-list-item v-for='memberData in party.members' :key='memberData._id' :data='memberData'></member-list-item>
        </ul>
        <h4 v-if='!party.members.length' class='title uppercase' style='font-weight: lighter;'>No Party Members</h4>
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
import MemberListItem from "@/components/MemberListItem";
export default {
  name: "PartySettings",
  props: ["id"],

  computed: {
    party() {
      return this.$store.state.parties.find(
        party => party._id === this.$props.id
      );
    }
  },

  methods: {
    onCopy() {
      this.$store.dispatch("newSnackbar", "Code copied");
    },
    onError() {
      this.$store.dispatch("newSnackbar", "Unable to copy code");
    }
  },

  components: {
    MemberListItem
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
  letter-spacing: 0.25rem;
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
    content: "";
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
    content: "Feature coming soon";
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
.justify-space-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
.uppercase {
  text-transform: uppercase;
}
</style>