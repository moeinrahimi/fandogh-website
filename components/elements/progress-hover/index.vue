<template>
    <span @mouseover="mouseOver" @mouseleave="mouseLeave" class="hover-wrapper">
        <span class="content">
            <slot />
        </span>
        <span v-show="!hover || onHover" class="progress progress-hover">

        </span>
         <span v-show="!hover || onHover" class="progress-container progress-hover">

        </span>
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
        progress(){
          if(document){
            return  this.$el.querySelector('.progress')
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
          this.progress.style.marginLeft = (-(this.extraWidth+this.content.clientWidth)/2)+'px'
          this.progress.style.minHeight = (this.content.clientHeight/2)+'px'
          this.container.style.marginLeft = (-(this.extraWidth+this.content.clientWidth)/2)+'px'
          this.container.style.minHeight = (this.content.clientHeight/2)+'px'
          if(!this.hover){
            this.setPixels(this.pixels)
          }
        },
        async setPixels(pixels){
          if(this.start) return
          this.start = true
          let minWidth = 0
          for(let pixel of pixels ){
              await this.timeout(30)
              minWidth += 1
              this.progress.style.minWidth = minWidth+'px'
          }
          await Promise.all(pixels.map(async pixel => await this.timeout(30)))
          this.start = false
        },
        timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        },
        mouseLeave(){
          if(this.hover){
            this.onHover = false
            this.setPixels([])
          }
        },
        mouseOver(){
          if(this.hover){
            this.onHover = true
            this.setPixels(this.pixels)
          }
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
        z-index: -1;
        position: absolute;
        display: inline-block;
        transition: all .6s ease;
    }
    .progress-container {
        background-color: rgba(255, 255, 255, 0.1);;
        z-index: -2;
    }
    .progress {
        background: rgba(255, 255, 255, 0.3);;
    }

</style>