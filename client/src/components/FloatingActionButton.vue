<template>
  <base-button class='fab elevation-4' v-on='$listeners' v-bind='$props' absolute>
    <slot></slot>
    <v-icon>add</v-icon>
  </base-button>
</template>

<script>
export default {
  name: "floating-action-button"
};
</script>

<style scoped lang='scss'>
.fab {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
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
}
</style>
<style lang='scss'>
.fab * {
  color: #66fcf1 !important;
}
</style>