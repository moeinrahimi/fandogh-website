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
    }
  }
</script>

<style lang="stylus" >
    @import '../assets/css/main.styl'
    .wrapper
        width 100%
    .header-container
        -webkit-box-shadow: 3px 10px 30px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 10px 30px -12px rgba(0,0,0,0.75);
        box-shadow: 3px 10px 30px -12px rgba(0,0,0,0.75);
</style>
