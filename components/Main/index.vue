<template>
    <div class="main container">
        <div class="row middle-xs">
            <div class="col-md-6 col-md-offset-1 col-sm-12">
                <right />
            </div>
            <div class="col-md-5 col-sm-12 illustrate">
               <left />
            </div>
        </div>
    </div>
</template>

<script>
    import Right from './right.vue'
    import Left from './left.vue'
    import FButton from '../elements/button'
    

    export default {
      components:{
        Right,
        Left,
        FButton
      }
    }
</script>

<style lang="stylus" scoped>
  .main
    margin-top: 90px
    clear both
  .illustrate
    text-align: left
  @media only screen and (max-width: 991px)
      .illustrate
        margin-top 60px
        text-align: center
</style>