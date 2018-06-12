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
    width 100%
    img
      position absolute
      top -140px
      left 0;
      width 100%




   @media only screen and (max-width: 992px)
    .illustrate
      text-align center
      width 100%
      img
        position initial
        width 100%



</style>


