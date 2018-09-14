<template>
  <div class="ox-home">
    <base-header circle primary style='border-bottom: solid 1px #66fcf150' />

    <main class='ox-home__content'>
      <h1 class='display-1 ox-username'>{{name}}</h1>
      <square-button class='headline menu-option'>MY PARTIES ({{party.length}})</square-button>
      <square-button class='headline menu-option' @click="logout">LOG OUT </square-button>

      <v-divider class="v-divider"></v-divider>

      <square-button class='headline menu-option' @click="dialog = true">DELETE ACCOUNT</square-button>
      
      <floating-action-button @click="newPartyDialog = true">Create new party</floating-action-button>
    </main>


    <v-dialog v-model="newPartyDialog"> 
      <v-card>
        <v-card-title>Create a new party</v-card-title>
        <v-divider></v-divider>
        <v-text-field box type="text" name="partyName" label="Party Name" autocomplete="off" required/>
        <v-text-field box type="number" name="userLimit" label="User Limit" autocomplete="off" required/>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>Warning</v-card-title>
        <v-card-text>Are you sure you want to delete your account?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <square-button class="v-card-btn" @click="deleteAccount(); dialog=false">DELETE</square-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      newPartyDialog: false
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
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  // font-weight: bold;
  margin-left: 0.25rem;
  color: rgba(#66fcf1, 0.85);
  letter-spacing: 0.3rem !important;
}
.menu-option {
  height: 4.5rem;
  margin-left: 0;
  width: 100%;
}

.v-card-btn {
  display: flex;
}

.v-divider {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
</style>

<style lang='scss'>
.menu-option * {
  justify-content: unset !important;
  font-weight: 400 !important;
}
</style>