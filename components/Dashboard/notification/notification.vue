<template>
  <transition  name="slide-fade">
    <div v-show="show" class="notification" :class="option.type || 'success'">
      <img v-if="option.type === 'alert'"  class="icon" src="./images/alert.svg" alt="notification">
      <img v-else  class="icon" src="./images/success.svg" alt="notification">
      <span :class="option.type || 'success'">{{option.title}}</span>
      <img  v-if="option.type === 'alert'" @click="close" src="./images/close-alert.svg" alt="close" class="close" >
      <img  v-else @click="close" src="./images/close-success.svg" alt="close" class="close" >
    </div>
  </transition>
</template>

<script>
  export default {
    props:['option'],
    data(){
      return {
        show: false
      }
    },
    mounted(){
      setTimeout(() => {
        this.show = true
      }, 0)
      setTimeout(() => {
        this.show = false
      }, this.option.time || 3000)
    },
    methods:{
      close(){

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .notification
    border-right 4px solid #ff2d55
    width 280px
    height 64px
    background #ffff
    display flex
    position relative
    align-items center
    z-index 999
    margin-top 10px
    &.alert
      border-right 4px solid #ff2d55
    &.success
      border-right 4px solid #2cac46
    span
      margin 0
      font-size 12px
      line-height 1.3
      padding-left 14px
      &.alert
        color #ff2d55
      &.success
        color #2cac46
    img.icon
      width 24px
      margin 0 16px
    img.close
      width 8px
      position absolute
      top 8px
      left 8px

  .slide-fade-enter-active
    transition: all .3s ease

  .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(-20px)
    opacity: 0

</style>