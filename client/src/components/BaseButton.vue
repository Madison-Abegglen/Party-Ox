<template>
  <v-btn class='button' :style='{ color: primary ? "black" : "white" }' :color='primary ? "primary" : secondary ? "secondary" : accent ? "accent" : error ? "error" : undefined'
    v-bind='$props' v-on='$listeners'>
    <slot></slot>
  </v-btn>
</template>

<script>
import { VBtn } from 'vuetify'

export default {
  name: "base-button",
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
    error: {
      type: Boolean,
      default: false
    }
  },
  extends: {
    VBtn
  }
}
</script>

<style scoped lang='scss'>
.button {
  border-radius: 1.5rem;
}
</style>