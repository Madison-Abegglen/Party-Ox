<template>
  <div class='page-wrapper'>
    <base-header circle underline></base-header>
    <div class='page'>

    <div class='page'>
      <p class='party__title headline'>{{ party ? party.name : '' }}</p>

      <v-divider style='divider'></v-divider>

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
      
      <footer class='footer'>
      <base-button
        circle
        flat
        large
        class='mx-auto back-button left-align'
        @click="dialog = true"
        slot='after'>
        <v-icon large>arrow_back</v-icon>
      </base-button>

      <base-button
        
        circle
        flat
        large
        class='mx-auto add-button right-align'
        :to="{ name: 'party-settings', params: { id } }"
        slot='after'>
        <v-icon class="add" large>add</v-icon>
      </base-button>
      <v-dialog width='400' v-model="dialog">
        <v-card class='floaty-form error-overlay'>
          <v-card-title class='headline'>Warning</v-card-title>
          <v-card-text>Are you sure you want to leave party?</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <square-button error class="form-button" @click="backToLogin(); dialog=false">LEAVE</square-button>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </footer>
  </div>
</template>

<script>
import FloatingActionButton from "@/components/FloatingActionButton.vue";
export default {
  name: "MemberHome",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    backToLogin() {
      this.$store.dispatch("disconnectMember", this.memberId);
    }
  },
  mounted() {
    if (!this.$store.state.member._id) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    party() {
      return this.$store.state.activeParty;
    }
  },
  components: {
    FloatingActionButton
  }
};
</script>

<style lang="scss" scoped>
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
.tabs {
  .tabs__tab {
    width: 50% !important;
    margin-bottom: 1rem;
  }
}
.floaty-form {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  @media (min-width: 800px) {
    padding: 0.75rem 2rem;
  }
  .v-card__actions {
    justify-content: flex-end;
  }
  .form-button {
    height: 3rem;
    font-size: 1.15rem;

    &.party-btn:hover {
      background-color: #111 !important;
    }
  }
}
.error-overlay {
  background: linear-gradient(#ff5252, #ff5252) #424242;
  background-blend-mode: overlay;
}

.footer {
  position: fixed;
  width: 100vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  bottom: 0;
  left: 0;
  background-color: var(--dark-background);
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
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
