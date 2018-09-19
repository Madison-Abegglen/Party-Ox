<template>
  <v-toolbar style='background-color: var(--lighter-background);' :class='{ header: true, "header--underline": underline }'>
    <section class='header__before'>
      <slot name='before'></slot>
    </section>
    <div v-if='!logoRight'>
      <img class='header__logo header__logo--circle' src='../assets/ox-circle.svg' v-if='circle' />
      <img class='header__logo' src='../assets/ox-party.svg' v-else-if='party' />
      <img class='header__logo' src='../assets/ox.svg' v-else />
    </div>
    <section class='header__after'>
      <slot name='after'></slot>
      <div v-if='logoRight'>
        <img class='header__logo header__logo--circle' src='../assets/ox-circle.svg' v-if='circle' />
        <img class='header__logo' src='../assets/ox-party.svg' v-else-if='party' />
        <img class='header__logo' src='../assets/ox.svg' v-else />
      </div>
    </section>
  </v-toolbar>
</template>

<script>
export default {
  name: "base-header",
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    party: {
      type: Boolean,
      default: false
    },
    logoRight: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
.header {
  position: fixed;
  z-index: 22;
  top: 0;
  left: 0;
  width: 100vw;

  :global(.v-toolbar__content) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &.header--underline {
    border-bottom: solid 1px rgba(#66fcf1, 0.3);
  }

  &__logo {
    height: 6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &--circle {
      height: 4rem;
      width: 4rem;
      padding: 0.4rem;
      border-radius: 100% !important;
      border: solid 1px rgba(#66fcf1, 0.45);
      background-color: var(--lighter-background);
      filter: brightness(130%);
      top: 50%;
      transform: translate(-50%, 0);
    }
  }

  &__before,
  &__after {
    display: flex;
    align-items: center;
    width: calc(50% - 2.75rem);
  }

  &__before {
    justify-content: flex-start;
  }

  &__after {
    justify-content: flex-end;

    .header__logo {
      right: -2.5rem;
      left: unset;
      transform: translateY(-50%);
    }
  }
}
</style>