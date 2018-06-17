<template>
  <div>
    <div v-show="show" id="myModal" class="modal" >

        <!-- Modal content -->
        <div class="modal-content">
          <slot />
        </div>
    </div>
    <div v-show="show" @click="display" class="overlay"></div>
  </div>
</template>

<script>
  export default {
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

<style scoped lang="stylus" >
.modal {
  position: fixed; /* Stay in place */
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
    min-height: 300px; /* Full height */
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
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  height: 120vh;
  z-index: 10;
  background-color: rgba(0,0,0,0.8); /*dim the background*/
}

</style>

