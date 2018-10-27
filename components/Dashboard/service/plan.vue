<template>
  <div class="right-container">
    <div class="plan-details" v-bind:class="{'icon-first' : iconFirst }">
      <div class="plan-text">
      <div class="text-space">
      <p>{{title}}
        
      </p>
      <img src="/icons/plans/info-button.png" class="info-button" v-if="hasInfo">
      </div>
      <p>{{price}}</p>
      </div>
      </div>
      <div class="plan-icon visible">
        <img :src="'/icons/plans/services-icon/' + icon" >
      </div>
    </div>
</template>

<script>
  export default {
    props : {
      icon  :{
        type : String ,
        default : 'ic_fandogh.png'
      },
      title  :{
        type : String ,
        default : 'پلن فعلی'
      },
      price  :{
        type : String ,
        default : 'پلن 2'
      },
      iconFirst  :{
        type : Boolean ,
        default : false 
      },
      hasInfo  :{
        type : Boolean ,
        default : true 
      },
    },

  }
</script>

<style lang="stylus" scoped>
.plan-details
  display flex
  flex-direction column
  padding 42px 45px
  @media (max-width: 636px) {
    padding 0
  }  
.plan-details
 p 
  @media (max-width: 636px) {
    margin 0
  }  
  
  p:last-child
    margin-top 20px
    font-weight bold
.plan-icon 
  display flex
  justify-content center
  align-items center
  padding 10px
  @media (max-width: 820px) {
   visibility hidden
   
  }
.plan-icon:nth-of-type(1) 
  visibility visible
.right-container
  display flex
  align-items center 
  width 254px
  @media (max-width: 636px) {
    width 54px
  }  
.icon-first 
  order 1 
.info-button
  width: 16px;
  height: 16px;
.text-space
  display flex
  width: 89px
  justify-content: space-evenly 
  align-items: center
.plan-text
  display flex
  flex-direction column
  width: 89px;
  align-items: center;
  p
    @media (max-width: 636px) {
      font-size 12px
  }  
</style>