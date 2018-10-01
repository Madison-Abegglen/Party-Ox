<template>
  <div class='page-wrapper'>
    <base-header circle underline>
    </base-header>

    <div class='page'>
      <p class='party__title headline'>{{ party ? party.name : '' }}</p>

      <v-divider style='divider'></v-divider>

      <v-tabs slider-color="primary" color="transparent" grow class='tabs'>
        <v-tab ripple key='queue' class='tabs__tab'>
          Queue
        </v-tab>
        <v-tab ripple key='suggestions' class='tabs__tab'>
          Suggestions
        </v-tab>
        <v-tab-item key='queue-list'>
          <!-- <base-button @click='party.queue.forEach(song => clearSong(song._id))' flat class='ml-auto'>Clear <v-icon class='ml-2'>done_all</v-icon></base-button> -->
          <song v-for='song in party.queue' :key='song._id' :data='song'>
            <base-button circle flat @click='clearSong(song._id)'><v-icon>check</v-icon></base-button>
          </song>
        </v-tab-item>
        <v-tab-item key='suggestions-list'>
          <song v-for="suggestion in party.suggestions" :key="suggestion._id" :data="suggestion">
            <base-button circle flat @click='acceptSuggestion(suggestion._id)'><v-icon>check</v-icon></base-button>
            <base-button circle flat @click="deleteSuggestion(suggestion._id)"><v-icon>close</v-icon></base-button>
          </song>
        </v-tab-item>
      </v-tabs>
    </div>
    <footer class='footer'>
      <base-button
        circle
        flat
        large
        class='mx-auto back-button left-align'
        :to="{ name: 'parties' }"
        slot='before'
      >
        <v-icon class="back" large>arrow_back</v-icon>
      </base-button>

      <base-button
        circle
        flat
        large
        class='mx-auto back-button right-align'
        :to="{ name: 'party-settings', params: { id } }"
        slot='after'
      >
        <v-icon class="add" large>settings</v-icon>
      </base-button>
    </footer>
  </div>
</template>

<script>
import Song from "@/components/Song.vue";
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
  },
  methods: {
    deleteSuggestion(suggestionId) {
      this.$store.dispatch("deleteSuggestion", {
        partyId: this.party._id,
        suggestionId
      });
    },
    acceptSuggestion(suggestionId) {
      this.$store.dispatch("acceptSuggestion", {
        partyId: this.party._id,
        suggestionId
      })
    },
    clearSong(songId) {
      this.$store.dispatch("clearSong", {
        partyId: this.party._id,
        songId
      })
    }
  },
  components: {
    Song
  }
};
</script>

<style scoped lang="scss">
.page {
  max-width: 65rem;
  margin: 0 auto;
  .party__title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    text-align: center;
    text-transform: uppercase;
    margin-top: 3rem;
    color: rgba(#66fcf1, 0.85);
    letter-spacing: 0.3rem !important;
  }
}

.footer {
  max-width: calc(65rem + 2rem);
  left: 50%;
  transform: translateX(-50%);
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
  .tabs__tab {
    width: 50% !important;
    margin-bottom: 1rem;
  }
}
</style>




