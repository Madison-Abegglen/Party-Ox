<template>
  <div class="my-parties-wrapper">
    <base-header circle primary style='border-bottom: solid 1px #66fcf150; z-index: 22;'>
      <base-button round flat slot='before' class='mr-auto' style='min-width: unset;'>
        <v-icon style='transform: translateX(0.25rem)'>arrow_back_ios</v-icon>
      </base-button>
    </base-header>
    <div class="party-list">
      <h4 class="">Your Parties</h4>
      <v-divider></v-divider>
      <p>Name</p>
      <p>Members</p>
      <!-- V-FOR BELOW -->
      <v-card class="party-card">
        <v-card-title @click="$router.push({ name: 'party', params: { id: 'blahblah' } })">
          {{allParties.name}}
        </v-card-title>
        <v-icon class="copyIcon">people</v-icon>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parties",
  computed: {
    allParties() {
      return this.$store.state.parties;
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
</style>