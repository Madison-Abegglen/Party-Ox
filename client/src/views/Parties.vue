<template>
  <div class="my-parties-wrapper">
    <base-header circle primary style='border-bottom: solid 1px #66fcf150; z-index: 22; position: fixed; top: 0; right: 0;'>
    </base-header>

    <div class="party-list">
      <h2 class="title uppercase primary--text">{{ox.name}}'s parties</h2>

      <v-divider></v-divider>

      <div class="party-details">
        <p class="uppercase">Name</p>
        <p class="uppercase">Members</p>
      </div>
      <!-- V-FOR BELOW -->
      <v-card class="party-card" v-for="party in allParties" :key="party._id">
        <v-card-title class="card-title" @click="$router.push({ name: 'party', params: { id: party._id } })">
          {{party.name}}
        </v-card-title>
        <div class='party-card-content'>
          <v-icon class="peopleIcon">people</v-icon>

          <p class='member-length' :class='{ small: party.members.length >= 100 }'>
            {{party.members.length < 100 ? party.members.length : '99+'}}
          </p>

          <base-button class='trash-button' flat @click='partyToDelete = party; dialog = true'>
            <v-icon>delete_outline</v-icon>
          </base-button>
        </div>
      </v-card>
      <p class='title' v-if='allParties && !allParties.length'>No parties</p>
    </div>

    <v-dialog width='400' v-model="dialog">
      <v-card class='floaty-form error-overlay'>
        <v-card-title class='headline'>Warning</v-card-title>
        <v-card-text>Are you sure you want to delete {{partyToDelete.name || ''}}?</v-card-text>

        <v-divider></v-divider>

        <square-button error class="form-button" @click="deleteParty(); dialog=false">DELETE</square-button>
      </v-card>
    </v-dialog>

    <footer class="footer">
      <base-button outline secondary round class='mx-auto back-button'
        :to="{name: 'ox-home'}">
         <v-icon class='arrow-icon'>arrow_back_ios</v-icon>
        back to profile
      </base-button>
    </footer>
  </div>
</template>

<script>
import SquareButton from "@/components/SquareButton";

export default {
  name: "Parties",
  components: {
    SquareButton
  },
  data() {
    return {
      dialog: false,
      partyToDelete: {}
    };
  },
  computed: {
    allParties() {
      return this.$store.state.parties;
    },
    ox() {
      return this.$store.state.ox;
    }
  },
  methods: {
    deleteParty() {
      this.$store.dispatch("deleteParty", this.partyToDelete._id);
    }
  }
};
</script>

<style scoped lang='scss'>
.my-parties-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  padding-top: 64px;
  background-color: var(--dark-background);
  overflow-y: auto;
}
.party-list {
  position: relative;
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  flex: 1 0;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 0.25rem !important;
  font-weight: normal;
}
.party-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2.5rem;
  margin-top: 0.9rem;
}
.arrow-icon {
  display: flex;
  align-items: flex-end;
}
.uppercase {
  text-transform: uppercase;
}
.back-button {
  display: flex;
  align-items: flex-end;
  margin: 1rem;
  line-height: 2.5rem;
  max-width: 15rem;
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: var(--dark-background);
  padding-right: 1rem;
  padding-left: 1rem;
}
.card-title {
  display: inline-block;
  color: var(--primary);
  text-decoration: underline;
  cursor: pointer !important;
  width: calc(100% - 5rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.party-card {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 1rem;
  margin-top: 0.5rem;
}
.party-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.member-length {
  transform: translateY(0.75rem);
  color: black;
  border-radius: 100%;
  background-color: white;
  width: 1.6rem;
  height: 1.6rem;
  line-height: 1.6rem;
  &.small {
    font-size: 0.75rem;
  }
  text-align: center;
  margin-right: 0.5rem;
}
.peopleIcon {
  margin-right: 1.5rem;
  transform: translateY(0.2rem);
  opacity: 0.6;
}
.trash-button {
  min-width: unset !important;
  padding: 0;
  margin-right: 1.5rem;
  transform: translateY(0.15rem);
  opacity: 0.6;
  &:hover {
    opacity: 1;
    color: #ff5252 !important;
  }
}
</style>

<style lang='scss'>
</style>