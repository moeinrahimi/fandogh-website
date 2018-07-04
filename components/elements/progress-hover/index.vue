<template>
    <span @mouseover="mouseOver" @mouseleave="mouseLeave" class="hover-wrapper">
        <span class="content">
            <slot />
        </span>
        <span v-show="!hover || onHover" class="progress-container progress-hover"></span>
    </span>
</template>

<script>
    export default {
      props:['hover'],
      data(){
        return {
          extraWidth: 10,
          onHover: false,
          start: false
        }
      },
      mounted(){
        this.initialShape()
      },
      computed:{
        content(){
          if(document){
            return this.$el.querySelector('.content')
          }
        },
        container(){
          if(document){
            return  this.$el.querySelector('.progress-container')
          }
        },
        pixels(){
          if(document) {
            return Array.from(Array(this.extraWidth + this.content.clientWidth).keys())
          }
        }
      },
      methods:{
        async initialShape(){
          this.container.style.minWidth = (this.extraWidth+this.content.clientWidth)+'px'
          this.container.style.marginLeft = (-(this.extraWidth+this.content.clientWidth)/2)+'px'
          this.container.style.height = (this.content.clientHeight/3)+'px'
          if(!this.hover){
            let reverse = false
            this.setPixels(this.pixels)
            setInterval(_  => {
              reverse = !reverse
              this.setPixels(this.pixels, reverse)
            }, 10000)
          }

        },
        mouseLeave(){
          this.onHover = false
        },
        mouseOver(){
          this.onHover = true
        }
      }
    }
</script>

<style scoped>
    .content {
        display: inline-block;
    }
    .hover-wrapper{
        position: relative;
    }
    .progress-hover{
        bottom: 0;
        left: 50%;
        content: ' ';
        position: absolute;
        display: inline-block;
        transition: all .6s ease;
    }
    .progress-container {
        background-color: rgba(255, 255, 255, 0.2);;
    }


</style>