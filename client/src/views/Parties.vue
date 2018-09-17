<template>
  <div class="my-parties-wrapper">
    <base-header circle primary style='border-bottom: solid 1px #66fcf150; z-index: 22; position: fixed; top: 0;'>
    </base-header>
  
    <div class="party-list">
      <h2 class="title uppercase">{{ox.name}}'s parties</h2>
      <v-divider></v-divider>
      <div class="party-details">
        <p class="uppercase">Name</p>
        <p class="uppercase">Members</p>
      </div>
      <!-- V-FOR BELOW -->
      <v-card class="party-card" v-for="party in allParties" :key="party._id">
        <v-card-title @click="$router.push({ name: 'party', params: { id: party._id } })">
          {{party.name}}
          <v-icon>people</v-icon>
        </v-card-title>
      </v-card>
    </div>
    <base-button raised outline secondary round flat slot='before' class='mr-auto' style='min-width: unset;'>
      <v-icon class='arrowIcon'>arrow_back_ios</v-icon>
    </base-button>
  </div>
</template>

<script>
export default {
  name: "Parties",
  computed: {
    allParties() {
      return this.$store.state.parties;
    },
    ox() {
      return this.$store.state.ox;
    }
  }
};
</script>

<style scoped>
.my-parties-wrapper {
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  padding-top: 64px;
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
.party-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.party-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.9rem;
}
.arrowIcon {
  display: flex;
  align-items: flex-end;
}
.uppercase {
  text-transform: uppercase;
}
</style>