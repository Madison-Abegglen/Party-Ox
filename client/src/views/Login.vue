<template>
  <main>
    <title-header title='PARTY-Ox' />
    <div id="login">
      <h1>Login</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" autocomplete="off" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" autocomplete="off" />
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </main>
</template>

<script>
  import TitleHeader from '@/components/TitleHeader'

  export default {
    components: {
      TitleHeader
    },
    name: 'Login',
    data() {
      return {
        input: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
        if (this.input.username != "" && this.input.password != "") {
          if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
          } else {
            console.log("The username or password is incorrect");
          }
        } else {
          console.log("A username and password must be present");
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    width: 250px;
    border: 1px solid #163fd1;
    background-color: #1f2833;
    color: #c5c6c7;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>