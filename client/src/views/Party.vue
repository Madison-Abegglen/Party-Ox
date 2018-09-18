<template>
  <div class='party-wrapper'>
    <base-header circle style='border-bottom: solid 1px #66fcf150;'>
      <base-button slot='before'>Back</base-button>
      <base-button slot='after'>Settings</base-button>
    </base-header>
    <div class='party'>
      <p class='party__title'>{{ party ? party.name : '' }}</p>

      <v-divider style='color: white; width: 100%; height: 2px; margin: 1rem;'></v-divider>

      <v-tabs grow>
        <v-tab ripple :key='queue'>
          Queue
        </v-tab>
        <v-tab ripple :key='suggestions'>
          Suggestions
        </v-tab>
        <v-tab-item :key='queue'>
          WOW
        </v-tab-item>
        <v-tab-item :key='suggestions'>
          NOT WOW
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    party() {
      return this.$store.state.parties.find(
        party => party._id === this.$props.id
      );
    }
  }
};
</script>

<style scoped lang="scss">
.party__title {
  width: calc(100% - 2rem);
  overflow: hidden;
  text-overflow: ellipsis;

  text-transform: uppercase;
  margin-top: 2rem;
  margin-left: 1.5rem;
  color: rgba(#66fcf1, 0.85);
  letter-spacing: 0.3rem !important;
}
</style>




