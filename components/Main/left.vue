<template>

  <section class="illustrate" >
    <img  src="~/assets/svg/img-main-ill.svg" alt="illustrate cloud">
  </section>
  
</template>

<script>
import illustrate from '~/assets/svg/img-main-ill.svg'

export default {
  
}
</script>

<style scoped lang="stylus" >
  .illustrate 
    position relative
    img 
      position absolute
      width 910px
      top -100px
      left -200px;
  @media only screen and (max-width: 1400px) 
   .illustrate 
     img 
       width 700px
       left -100px

</style>


