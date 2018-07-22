<template>
  <div>
    <div class="box middle-xs ">

      <div>
        <div class="wrap" >
          <img :src="image" />
        </div>
        <div class="text-container">
          <p class="title"> {{title}} </p>
          <p class="local_title"> {{local_title}} </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import img from '~/assets/svg/ic-auto-scale.svg'
export default {
  props:['icon','title', 'local_title'],
  data(){
    return {
      'auto-scale': require('~/assets/svg/ic-auto-scale.svg'),
      'cost-effective': require('~/assets/svg/ic-cost-effective.svg'),
      'docker': require('~/assets/svg/ic-docker.svg'),
      'database': require('~/assets/svg/ic-managed-d-bs.svg'),
      'ready': require('~/assets/svg/ic-ready-tg.svg'),
      'highly': require('~/assets/svg/ic-highly-av.svg')
    }
  },
  computed:{
    image(){
      return this.$data[this.icon]
    }
  }
}
</script>

<style lang="stylus" >

  .box
    border-radius: 10px
    background-color: rgba(0, 0, 0, 0.1)
    text-align center
    margin 1rem 0
    min-height 270px

  .box
    .wrap
      display inline-block
      vertical-align top
      height 100px
      width: 100px
      padding 5px
      img
        width 100px
        margin-left: auto
        margin-right: auto
        position: relative
        top: 50%
        transform: translateY(-50%)
    div.text-container
      width: auto
  .title
    font-weight bold

  .box
    margin-left 0
    div
      display: block
      text-align center
      width 100%
      top: 0
      transform none


 // @media only screen and (max-width: 1200px)

/*@media only screen and (max-width: 991px)*/
  /**/
    /**/
   /**/



</style>

