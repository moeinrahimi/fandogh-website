<template>
  <div class="wrapper" >
    <my-header />
    <nuxt/>

  </div>
</template>

<script>
import MyHeader from '~/components/Header'
import 'normalize.css'
export default {
  components: {
    MyHeader
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

<style lang="stylus" >
  @import '../assets/css/main.styl'
  .wrapper {
    width 100%
  }

</style>
