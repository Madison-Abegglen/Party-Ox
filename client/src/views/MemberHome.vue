<template>
  <div class='page-wrapper'>
    <base-header circle underline></base-header>
    <div class='page'>

    </div>
    <footer class='footer'>
      <base-button outline secondary round class='mx-auto back-button'
        :to="{name: 'ox-home'}">
         <v-icon small class='arrow-icon'>arrow_back_ios</v-icon>
        back to login
      </base-button>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'MemberHome'
  }
</script>

<style scoped>

</style>