<template>
  <base-button class='button--square' v-on='$listeners' v-bind='$attrs'>
    <slot></slot>
  </base-button>
</template>

<script>
  export default {
    name: 'square-button'
  }
</script>

<style scoped lang='scss'>
  .button.button--square {
    border-radius: 2px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>