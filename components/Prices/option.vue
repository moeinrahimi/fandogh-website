<template>
  <div class="price column" :class=[..._styles]>
    <div class="text">
      <h2 class="title">{{title}}</h2>
      <slot />
    </div>
    <div class="optionButton">
      <f-button :styles="styles" > انتخاب </f-button>
    </div>
  </div>
</template>

<script>
import FButton from '~/components/elements/button'
export default {
  props: ['title', 'styles'],
  components:{
    FButton
  },
  computed:{
    _styles(){
      return this.styles ? this.styles.split(' ') : []
    }
  }
}
</script>

<style lang="stylus" scoped >
  .price
    border-radius 10px
    height 430px
    box-sizing border-box
    display flex
    flex-direction column
    justify-content space-between
    padding 40px 10px
    .title
      height: 41px;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.71;
      letter-spacing: normal;
      color: #ff859e;

    ul 
     li 
       &:before
          content "- " 
       font-size 16px
       font-weight bold
       font-style normal
       font-stretch normal
       line-height 1.75
       color #4f4f4f

    .optionButton
      text-align center

  .red 
    background-image linear-gradient(225deg, #fffbca, #ffd8eb)
  .blue
      background-image: linear-gradient(226deg, #4ea9fd, #d2fffe);
      .title
       color #2675be 
  .blur
    -webkit-filter: blur(5px);
    filter: blur(5px);


</style>

