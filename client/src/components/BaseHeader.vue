<template>
  <v-toolbar>
    <v-flex class='header'>
      <section class='header__before'>
        <slot name='before'></slot>
      </section>
      <div v-if='!logoRight'>
        <img class='header__logo' src='../assets/ox-circle.svg' v-if='circle' />
        <img class='header__logo' src='../assets/ox-party.svg' v-else-if='party' />
        <img class='header__logo' src='../assets/ox.svg' v-else />
      </div>
      <section class='header__after'>
        <slot name='after'></slot>
        <div v-if='logoRight'>
          <img class='header__logo' src='../assets/ox-circle.svg' v-if='circle' />
          <img class='header__logo' src='../assets/ox-party.svg' v-else-if='party' />
          <img class='header__logo' src='../assets/ox.svg' v-else />
        </div>
      </section>
    </v-flex>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'base-header',
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
      }
    }
  }
</script>

<style scoped lang='scss'>
  .header {
    display: flex;
    justify-content: space-between;
    position: relative;

    &__logo {
      height: 6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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