<template>
  <textarea @onInput="$emit('input', e => e.target.value)"></textarea>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  textarea
    width 100%
    min-height 120px
    border-radius 10px
    background-color #ffffff
    border solid 1px #e7e8ea
    padding 14px
    box-sizing border-box
    font-size 12px
    &::placeholder
      font-size 12px
</style>