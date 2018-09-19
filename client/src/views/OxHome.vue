<template>
  <div class="page-wrapper">
    <base-header circle underline />
    <div class='page'>
      <main class='ox-home__content'>
        <h1 class='display-1 ox-username'>{{name}}</h1>
        <square-button flat  :to="{name: 'parties'}" class='headline menu-option'>MY PARTIES {{party.length ? `(${party.length})` : ''}}</square-button>
        <square-button flat class='headline menu-option' @click="logout">LOG OUT </square-button>

        <v-divider class="v-divider"></v-divider>

        <square-button flat class='headline menu-option' @click="dialog = true">DELETE ACCOUNT</square-button>

        <floating-action-button absolute bottom right @click="newPartyDialog = true">Create new party</floating-action-button>
      </main>

      <v-dialog v-model="newPartyDialog" width='800'>
        <v-card class='floaty-form'>
          <v-card-title class="headline">Create a new party</v-card-title>

          <v-divider></v-divider>

          <v-text-field box type="text" name="partyName" v-model="partyDialog.name" label="Party Name *" autocomplete="off" required/>
          <v-text-field box type="number" name="partyLimit" v-model="partyDialog.limit" label="Party Limit" autocomplete="off" required/>
          <p class='caption'>* indicates a required field</p>

          <v-divider></v-divider>

          <v-card-text>For members to join your party, give them the corresponding party code to enter on the home screen. Create party and you will recieve your code.</v-card-text>
          <v-card-actions>
            <square-button class="party-btn form-button" @click="createNewParty">Create party</square-button>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog width='400' v-model="dialog">
        <v-card class='floaty-form error-overlay'>
          <v-card-title class='headline'>Warning</v-card-title>
          <v-card-text>Are you sure you want to delete your account?</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <square-button error class="form-button" @click="deleteAccount(); dialog=false">DELETE</square-button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SquareButton from "@/components/SquareButton.vue";
import FloatingActionButton from "@/components/FloatingActionButton.vue";

export default {
  data() {
    return {
      dialog: false,
      newPartyDialog: false,
      partyDialog: {
        name: "",
        limit: ""
      }
    };
  },

  methods: {
    logout() {
      return this.$store.dispatch("logout", this.oxId);
    },
    deleteAccount() {
      return this.$store.dispatch("deleteAccount", this.oxId);
    },
    createPartyDialog() {
      return this.$store.dispatch("createParty");
    },
    createNewParty() {
      this.$store.dispatch("newParty", { ...this.partyDialog });
      this.partyDialog.name = "";
      this.partyDialog.limit = "";
      this.newPartyDialog = false;
    }
  },

  computed: {
    name() {
      return this.$store.state.ox.name;
    },
    party() {
      return this.$store.state.parties;
    },
    oxId() {
      return this.$store.state.ox._id;
    }
  },

  components: {
    SquareButton,
    FloatingActionButton
  }
};
</script>

<style scoped lang='scss'>
.ox-home-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.ox-home {
  position: relative;
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  flex: 1 0;
}

.ox-home {
  &__content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.ox-username {
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  margin-left: 0.25rem;
  color: rgba(#66fcf1, 0.85);
  letter-spacing: 0.3rem !important;
}
.menu-option {
  height: 4.5rem;
  margin-left: 0;
  width: 100%;
  font-weight: normal !important;
  letter-spacing: 0.15rem !important;

  & > :global(*) {
    justify-content: flex-start !important;
  }
}

.v-divider {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
</style>

<style lang='scss'>
.floaty-form {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  @media (min-width: 800px) {
    padding: 0.75rem 2rem;
  }
  :global(.v-card__actions) {
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
</style>