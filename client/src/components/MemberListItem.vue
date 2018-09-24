<template>
  <li class='member'>
    <section class='d-flex'>
      <v-icon>person</v-icon>
      <p class='subheading mb-0 ml-2'>{{ data.name }}</p>
    </section>
    <section class='d-flex'>
      <base-button circle @click='open = !open'>
        <v-icon>arrow_forward</v-icon>
      </base-button>
      <div style='transition: width 0.2s; overflow: hidden' :style='{ width: open ? "10rem" : "0" }'>
        <square-button>Kick out?</square-button>
      </div>
    </section>
  </li>
</template>

<script>
  import SquareButton from '@/components/SquareButton'
  export default {
    name: 'member-list-item',
    props: {
      data: {
        required: true
      }
    },
    data() {
      return {
        open: false,
        listenerID: null
      }
    },
    methods: {
      close() {
        this.open = false
      }
    },
    watch: {
      open() {
        if (this.open) {
          this.listenerID = document.body.addEventListener('click', this.close)
        } else {
          document.body.removeEventListener('click', this.close)
          this.listenerID = null
        }
      }
    },
    destroyed() {
      if (this.listenerID) {
        document.body.removeEventListener('click', this.close)
      }
    },
    components: {
      SquareButton
    }
  }
</script>

<style lang='scss' scoped>
  .member {
    display: flex;
    align-items: center;
    justify-content: space-between;


  }
</style>