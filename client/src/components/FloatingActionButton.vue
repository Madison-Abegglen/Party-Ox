<template>
  <base-button class='fab elevation-4' :class='{ top: top, right: right, bottom: bottom, left: left, absolute: absolute }' v-on='$listeners' v-bind='$props'>
    <slot></slot>
    <v-icon>add</v-icon>
  </base-button>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: "floating-action-button",
  extends: BaseButton,
  props: {
    top: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
.fab {
  background-color: transparent;
  font-family: Roboto;
  border-radius: 3rem;
  border: solid 1px #66fcf1;
  height: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 300;

  .material-icons {
    margin-left: 0.5rem;
  }

  &.top {
    top: 2rem;
  }
  &.right {
    right: 2rem;
  }
  &.bottom {
    bottom: 2rem;
  }
  &.left {
    left: 2rem;
  }
  &.absolute {
    position: absolute;
  }
}
</style>
<style lang='scss'>
.fab * {
  color: #66fcf1 !important;
}
</style>