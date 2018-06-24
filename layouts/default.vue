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
  mounted(){
    let message = this.$route.query.message
    if(message) {
      this.$store.dispatch('setMessage', message)
      this.$store.dispatch('showModal', 'message')
    }
  }
}
</script>

<style lang="stylus" >
  @import '../assets/css/main.styl'
  .wrapper {
    width 100%
  }

</style>
