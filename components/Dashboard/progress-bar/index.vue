<template>
  <div class="progress-bar">
    <div :style="{left: 'calc('+progress+'% - 17.5px)'}" class="progress-circle">
      <span>{{progress}}% </span>
      <div class="circle">

      </div>
      <div class="s-circle">

      </div>
    </div>
    <div class="progress-container">
      <div :style="{width: progress+'%'}" class="progress-inner"></div>
    </div>
    <div class="progress-degree">
      <span> 0 </span> <span> 25  </span> <span> 50 </span> <span> 75 </span> <span> 100 </span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      progress:{
        default: 25
      }
    }
  }
</script>

<style scoped lang="stylus">
  .progress-bar
    display flex
    align-items center
    flex-direction column
    direction ltr
    position relative
    width 100%
    .progress-degree
      width 100%
      display flex
      margin-top 10px
      justify-content space-between
      span
        color #d4d4d4
        font-size 10px
    .progress-circle
      background-image: linear-gradient(to left, #4fa8fd, #00e3dc)
      width 35px
      height 35px
      border-radius 35px
      position absolute
      top -45px
      display flex
      align-items center
      justify-content center
      span
        color #fff
        font-size 12px
      .circle
        position absolute
        width 45px
        height 45px
        top -6px
        border solid 0.4px #00e3dc
        border-radius 45px
      .s-circle
        position absolute
        width 5px
        height 5px
        background-image linear-gradient(to right, #00e3dc, #4fa8fd)
        border-radius 5px
        bottom -7px
    .progress-container
      width 100%
      height 12px
      background #d4d4d4
      border-radius 30px
    .progress-inner
      margin-top -3px
      background-image: linear-gradient(to right, #00e3dc, #4fa8fd);
      height 18px
      border-radius 50px
      transition all .5 ease

</style>