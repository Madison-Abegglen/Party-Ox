<template>
  <div class="page-wrapper">
    <base-header circle underline>
    </base-header>

    <div class="page">
      <h2 class="headline uppercase primary--text" align='center'>{{ox.name}}'s parties</h2>

      <v-divider></v-divider>

      <div class="party-details">
        <p class="uppercase">Name</p>
        <p class="uppercase">Members</p>
      </div>
      <!-- V-FOR BELOW -->
      <v-card class="party-card elevation-10" v-for="party in allParties" :key="party._id">
        <v-card-title class="card-title" @click="$router.push({ name: 'party', params: { id: party._id } })">
          {{party.name}}
        </v-card-title>
        <div class='party-card-content'>
          <v-icon class="people-icon">people</v-icon>

          <p class='member-length' :class='{ small: party.members.length >= 100 }'>
            {{ party.members.length < 100 ? party.members.length : '99+' }}
          </p>

          <base-button class='trash-button' flat @click='partyToDelete = party; dialog = true'>
            <v-icon>delete_outline</v-icon>
          </base-button>
        </div>
      </v-card>
      <p class='title' align='center' v-if='allParties && !allParties.length'>No parties</p>
    </div>

    <v-dialog width='400' v-model="dialog">
      <v-card class='floaty-form error-overlay'>
        <v-card-title class='headline'>Warning</v-card-title>
        <v-card-text>
          Are you sure you want to delete
          <strong>{{partyToDelete.name || ''}}</strong>?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <square-button error class="form-button" @click="deleteParty(); dialog=false">DELETE</square-button>
        </v-card-actions>
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
.headline:not(:global(.v-card__title)),
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

.card-title {
  display: inline-block;
  color: var(--primary);
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
  border-radius: 0.5rem;
  margin: 0.5rem 1rem;
  background-color: #212121 !important;
  transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;

  &:not(:hover) {
    box-shadow: none !important;
  }
  &:hover {
    transform: translateY(-0.2rem);
    background-color: #313131 !important;
  }
}
.party-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.people-icon {
  margin-right: 1.5rem;
  transform: translateY(0.2rem);
}
.trash-button {
  min-width: unset !important;
  padding: 0;
  margin-right: 1.5rem;
  transform: translateY(0.15rem);
  width: 2.5rem;
  height: 2.5rem;
  line-height: 1rem;
  &:hover {
    opacity: 1;
    color: #ff5252 !important;
  }
}

.trash-button,
.people-icon,
.member-length {
  opacity: 0.75;
}
</style>

<style lang='scss'>
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
</style>