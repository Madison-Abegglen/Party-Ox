<template>
  <v-btn
    class='button'
    :class='{ "button--circle": circle }'
    v-bind='$attrs' v-on='$listeners'
    :style='{ color: primary ? "black" : "white" }'
    :color='primary ? "primary" : secondary ? "secondary" : accent ? "accent" : error ? "error" : undefined'
  >
    <slot></slot>
  </v-btn>
</template>

<script>
import { VBtn } from "vuetify";

export default {
  name: "base-button",
  extends: VBtn,
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
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
.button {
  border-radius: 1.5rem;

  &--circle {
    min-width: unset !important;
    width: 42px;
    height: 42px;
    padding: 0;
    border-radius: 50%;
  }
}
</style>