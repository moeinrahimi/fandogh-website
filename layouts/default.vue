<template>
  <div class="wrapper" >
    <f-header />
    <nuxt/>
    <f-footer />
  </div>
</template>

<script>
  import FHeader from '~/components/Header'
  import FFooter from '~/components/Footer'
  import 'normalize.css'
  export default {
    components: {
      FHeader,
      FFooter
    },
    computed:{
      message(){
        return this.$store.state.message
      }
    },
    watch:{
      $route(){
        if(this.message) {
          this.$store.dispatch('setMessage', this.message)
          this.$store.dispatch('showModal', 'message')
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/main.styl'
  .wrapper
    width 100%
    background linear-gradient(to left, #0f0050, #160074)
    display block
    box-sizing border-box
</style>