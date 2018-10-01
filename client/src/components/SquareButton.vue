<template>
  <base-button class='button--square' :class='{ icon }' v-on='$listeners' v-bind='$attrs'>
    <slot></slot>
  </base-button>
</template>

<script>
  export default {
    name: 'square-button',
    props: {
      icon: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang='scss'>
  .button.button--square {
    border-radius: 2px;
    padding-left: 20px;
    padding-right: 20px;

    &.icon {
      min-width: unset !important;
      width: 42px;
      height: 42px;
      padding: 0;
    }
  }
</style>