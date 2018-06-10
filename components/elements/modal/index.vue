<template>
  <div>
      <div v-show="show" id="myModal" class="modal" >

  <!-- Modal content -->
  <div class="modal-content">
    <h2>وارد شوید</h2>
    <div class="fandogh-form-group center margin-10">
      <f-input styles="input-color-blue" type="text" placeholder="نام کاربری" />
    </div>
    <div class="fandogh-form-group center margin-10">
      <f-input styles="input-color-blue" type="text" placeholder="رمز عبور" />
    </div>
    <div class="fandogh-form-group  margin-20">
      <f-checkbox id="checkbox1" title="مرا بخاطر بسپار" />
    </div>
   <div class="fandogh-form-group center margin-20 ">
      <f-button styles="red block 80">ورود</f-button>
  </div>

  <div class="fandogh-form-group center margin-20 ">
      <a href="#"> فراموشی رمز عبور </a>
  </div>

  </div>
  
</div>
<div  v-show="show" @click="display" class="overlay"></div>
  </div>
</template>

<script>
import FInput from '~/components/elements/input'
import FButton from '~/components/elements/button'
import FCheckbox from '~/components/elements/checkbox'
  export default {
    components: {
      FInput,
      FButton,
      FCheckbox
    },
    data(){
      return {
        show: false
      }
    },
    methods:{
      display(){
        this.show = !this.show
      }
    }
  }
</script>

<style lang="stylus" >
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
  overflow: auto; /* Enable scroll if needed */
  border-radius: 10px;
  z-index 11
}

p {
  color: #000;
}

.modal-content {
    background-color: #220286;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 410px; /* Full width */
    height: 300px; /* Full height */
    border-radius: 10px;
}

.modal 
  h2
    font-size 20px 
    color #fff
    text-align center

html, body{
  min-height: 100%;
}
body{
  position: relative;
}
.overlay{
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5); /*dim the background*/
}

</style>

