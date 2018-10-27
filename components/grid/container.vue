<template>
  <div class="container" :class="{'fluid': fluid}">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      default: false
    }
  }
};
</script>

<style scoped lang="stylus">
.container
  margin 0 auto
  max-width 1180px
  &.fluid
    max-width 100%
</style>
