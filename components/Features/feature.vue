<template>
  <div>
    <div class="feature">
      <div class="image-feature">
        <img :src="image" />
      </div>
      <p class="title"> {{title}} </p>
      <p class="local_title"> {{local_title}} </p>
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
.feature
  border-radius: 10px
  background-color: rgba(0, 0, 0, 0.1)
  text-align center
  height 270px
  margin-top 2rem
  .image-feature
    height 170px
  img
    width 35%
    margin-top 40px
  .title 
    margin 0
    font-size 16px
  .local_title
    font-family yekan-light
    font-size: 14px;
    font-weight: 300;
    line-height: 2.29;
    margin: 0
    
   



</style>

