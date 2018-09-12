<template>
  <base-header>
    <h6 class='title' slot='before'>{{ $props.title }}</h6>
  </base-header>
</template>

<script>
  import BaseHeader from '@/components/BaseHeader'

  export default {
    extends: BaseHeader,
    name: 'title-header',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang='scss'>

</style>