<template>
  <section class="main">
    <main-app />
    <devider styles="no-margin" type="tr" />
    <features />
    <devider styles="no-margin" type="bl" />
    <solution />
    <devider styles="no-margin" type="tl" />
    <tutorial />
    <devider styles="no-margin" type="br" />
    <prices />

  </section>
</template>
<script>
  import MainApp from '../components/Main/index.vue'
  import Features from '~/components/Features'
  import Devider from '~/components/elements/devider'
  import Solution from '~/components/Solution'
  import Tutorial from '~/components/Tutorial'
  import Prices from '~/components/Prices'

  export default {
    components:{
      MainApp,
      Features,
      Devider,
      Solution,
      Tutorial,
      Prices
    }
  }
</script>
