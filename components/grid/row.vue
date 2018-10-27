<template>
  <div class="row">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
  .row
    display flex
    flex-direction row
    flex-wrap wrap
    margin-top 10px
    margin-bottom 10px

    &.row-reverse
       flex-direction: row-reverse
</style>
