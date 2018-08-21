<template>
  <div>
    <div v-if="display"  class="alert"  >
      <div class="close-modal">
        <a href="#" @click="$emit('onOverlay')" class="close">
          <img alt="close icon" :src="require('../../../assets/svg/ic_close.svg')" />
        </a>
      </div>
      <!-- Modal content -->
      <div class="modal-content">
        <div class="alert-image">
          <img src="./images/img_delete.svg" />
          <h2>{{options.title}}</h2>
        </div>
        <div class="alert-content">
          <h6>{{options.description}}</h6>
          <div class="margin-20">
            <f-button styles="alert" @onClick="onDelete(true)"> حذف شود </f-button>
          </div>
          <div class="margin-20">
            <f-button styles="light" @onClick="onDelete(false)"> منصرف شدم </f-button>
          </div>
        </div>
      </div>
    </div>
    <div @click="toggle" v-if="display" class="overlay"></div>
  </div>
</template>

<script>
  import FButton from '~/components/elements/button'
  import Vue from 'vue'
  export default {
    props: ['message', 'disableOverlay', 'noModal'],
    data(){
      return {
        display: false,
        options: null
      }
    },
    created(){
      Vue.prototype.$alertify = this.alert
    },
    methods:{
      toggle(){
        this.display = !this.display
      },
      onDelete(bool){
        this.toggle()
        this.$emit('delete', bool)
      },
      alert(options, callback){
        this.display = true
        this.options = options
        this.$on('delete', (bool) =>{
          callback(bool)
          this.$off('delete')
        })
      }
    },
    components:{
      FButton
    }
  }
</script>

<style scoped lang="stylus" >
  .alert
    margin-top 50px
    position: fixed; /* Stay in place */
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    border-radius: 10px;
    z-index 11
    overflow hidden
    .alert-image
      margin-top -80px
      width 400px
      height 400px
      background-color rgba(224, 224, 224, 0.2)
      border-radius 200px
      display flex
      justify-content center
      align-items center
      flex-flow wrap row
      img
        width 300px
    .alert-content
      text-align center
      h6
        font-size 16px
        font-weight normal
        text-align center
        color #000

    .modal-content
      overflow hidden
      background-color: #fff;
      margin: 25% auto
      padding: 20px
      width: 410px
      border-radius: 10px
      position relative


      h2
        font-size 18px
        font-weight 900
        color #000
        text-align center

  html, body{
    min-height: 100%;
  }
  body{
    position: relative;
  }
  .overlay{
    position: fixed;
    top: -50px;
    left: 0;
    width: 100%;
    height: 120vh;
    z-index: 10;
    background-color: rgba(0,0,0,0.8); /*dim the background*/
  }

  .message
    height 50px
    border-top 2px dotted #fff
    text-align center
    p
      color #e96363
  .close-modal
    position absolute
    right 20px
    top 125px
    z-index 99
    img
      width 20px

  .no-modal
    margin-top 105px
    z-index 1

  @media only screen and (max-width: 576px)
    .alert
      margin-top 0
      .modal-content
        margin 5% auto
      .alert-image
        margin -60px auto
        width 300px
        height 300px
        border-radius 150px
        img
          width 200px

</style>

