<template>
  <base-button v-on='$listeners' v-bind='$props' style='border-radius: 0.1rem; padding-left: 20px; padding-right: 20px;'>
    <slot></slot>
  </base-button>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue'

  export default {
    name: 'square-button',
    extends: BaseButton
  }
</script>

<style scoped>

</style>