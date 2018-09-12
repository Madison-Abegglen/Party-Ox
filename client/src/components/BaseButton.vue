<template>
  <v-btn :style='{ color: primary ? "black" : "white" }' :color='primary ? "primary" : secondary ? "secondary" : accent ? "accent" : undefined' v-bind='$props'>
    <slot></slot>
  </v-btn>
</template>

<script>
  export default {
    name: 'base-button',
    props: {
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      accent: {
        type: Boolean,
        default: false
      },
      flat: {
        type: Boolean,
        default: false
      },
      raised: {
        type: Boolean,
        default: false
      },
      depressed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>