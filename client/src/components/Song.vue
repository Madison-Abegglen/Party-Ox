<template>
  <v-card class="song">
    <p class='subheading song__name'><strong>{{data.name}}</strong> · <i>by {{data.artist}}</i></p>
    <div class='ml-auto'>
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "song",
  props: {
    data: {
      required: true
    }
  }
};
</script>
<style scoped lang='scss'>
.song {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  align-items: center;
  // cursor: pointer;
  // &::after {
  //   content: "";
  //   width: 0;
  //   height: 2px;
  //   position: absolute;
  //   bottom: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   background-color: var(--primary);
  //   transition: width 0.2s;
  // }
  // &:hover {
  //   &::after {
  //     width: 100%;
  //   }
  // }
  p {
    margin: 0;
  }
}
</style>