<template>
  <div class='party-wrapper'>
    <base-header circle style='border-bottom: solid 1px #66fcf150;'>
      <base-button outline secondary round class='mx-auto back-button left-align'
        :to="{name: 'parties'}" slot='before'>Back</base-button>

      <base-button outline secondary round class='mx-auto back-button right-align'
        :to="{ name: 'party-settings', params: { id } }" slot='after'>Settings</base-button>
    </base-header>

    <div class='party'>
      <p class='party__title'>{{ party ? party.name : '' }}</p>


 



      <v-divider style='color: white; width: calc(100% - 2rem); height: 2px; margin-right: 1rem; margin-left: 1rem;'></v-divider>

      <v-tabs slider-color="primary" color="transparent" grow class='tabs'>
        <v-tab ripple :key='queue' class='tabs__tab'>
          Queue
        </v-tab>
        <v-tab ripple :key='suggestions' class='tabs__tab'>
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
    },
    allParties() {
      this.$store.state.parties;
    }
  }
};
</script>

<style scoped lang="scss">
.party__title {
  // width: calc(100% - 2rem);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  text-transform: uppercase;
  margin-top: 3rem;
  color: rgba(#66fcf1, 0.85);
  letter-spacing: 0.3rem !important;
}
.left-align {
  margin-left: 0.5rem !important;
  margin-right: auto;
}
.right-align {
  margin-right: 0.5rem !important;
  margin-left: auto;
}
.tabs {
  margin: 0 1rem;
}
.tabs__tab {
  width: 50% !important;
  margin-bottom: 1rem;
}
</style>




