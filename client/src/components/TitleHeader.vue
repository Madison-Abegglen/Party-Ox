<template>
  <base-header logoRight>
    <h6 class='caption' slot='before'>{{ title }}</h6>
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