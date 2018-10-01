<template>
  <div class='page-wrapper'>
    <base-header circle underline></base-header>
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
        <v-tab-item key='queue'>
          <song v-for='song in party.queue' :key='song._id' :data='song'></song>
        </v-tab-item>
        <v-tab-item key='suggestions'>
          <song v-for="suggestion in party.suggestions" :key="suggestion._id" :data="suggestion"></song>
        </v-tab-item>
      </v-tabs>
    </div>

    <footer class='footer'>
      <base-button
        circle
        flat
        large
        class='mx-auto back-button left-align'
        @click="disconnectDialog = true"
        slot='after'
      >
        <v-icon large>arrow_back</v-icon>
      </base-button>
      <base-button
        circle
        flat
        large
        class='mx-auto add-button right-align'
        @click="newSuggestionDialog = true"
      >
        <v-icon class="add" large>add</v-icon>
      </base-button>
    </footer>

    <v-dialog width='400' v-model="newSuggestionDialog">
      <v-card class='px-2'>
        <v-card-title class='headline'>Create a new suggestion</v-card-title>
        <v-divider></v-divider>
        <v-form v-model='suggestionValid' @submit.prevent="createSuggestion">
          <v-text-field
            box
            type="text"
            name="song"
            v-model="suggestion.name"
            label="Song Name"
            autocomplete="off"
            :rules='[required]'
          />
          <v-text-field
            box
            type="text"
            name="artist"
            v-model="suggestion.artist"
            label="Artist Name"
            autocomplete="off"
            :rules='[required]'
          />
          <v-card-actions>
            <square-button
              flat
              class="form-button"
              :disabled='!suggestionValid'
            >
              Create Suggestion
            </square-button>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog width='400' v-model="disconnectDialog">
      <v-card class='floaty-form error-overlay'>
        <v-card-title class='headline'>Warning</v-card-title>
        <v-card-text>Are you sure you want to leave party?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <square-button error class="form-button" @click="backToLogin(); disconnectDialog=false">LEAVE</square-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Song from '@/components/Song.vue'
import SquareButton from '@/components/SquareButton.vue'

export default {
  name: 'MemberHome',
  data() {
    return {
      disconnectDialog: false,
      newSuggestionDialog: false,
      suggestion: {
        name: '',
        artist: ''
      },
      suggestionValid: false,
      required: v => !!v || 'Required'
    };
  },
  methods: {
    backToLogin() {
      this.$store.dispatch('disconnectMember', this.memberId);
    },
    createSuggestion() {
      this.$store.dispatch('createSuggestion', this.suggestion)
      this.closeNewSuggestion()
    },
    closeNewSuggestion() {
      this.newSuggestionDialog = false;
      this.suggestion = {
        name: '',
        artist: ''
      }
    }
  },
  mounted() {
    if (!this.$store.state.member._id) {
      this.$router.push({ name: 'login' });
    }
  },
  computed: {
    party() {
      return this.$store.state.activeParty;
    }
  },
  components: {
    Song,
    SquareButton
  }
};
</script>

<style lang='scss' scoped>
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
.tabs {
  .tabs__tab {
    width: 50% !important;
    margin-bottom: 1rem;
  }
}

.add-button::before {
  background-color: transparent;
}

.left-align {
  margin-left: 0.5rem !important;
  margin-right: auto;
}
.right-align {
  margin-right: 0.5rem !important;
  margin-left: auto;
}
</style>
