<template>
  <div class="col" :class="[_grid , {zeroPadding}]">
    <slot />
  </div>
</template>

<script>
  export default {
    props:{
      grid:{
        default: '12',
      },
      zeroPadding: {
        type: Boolean,
        default: true
      },
    },
    computed:{
      _grid(){
        return 'col-'+this.grid
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $col-count = 12
  $col-spacing = 20px
  $row-spacing = 20px
  .col
    flex-grow 1
    max-width 100%
    flex-basis 100%
    padding ($row-spacing / 2) ($col-spacing / 2)
    &.zeroPadding
      &:last-child
        padding-left 0
      &:first-child
        padding-right 0
  for $col in (1..$col-count)
    .col-{$col}
      max-width ($col / $col-count) * 100%
      flex-basis ($col/$col-count) * 100%
</style>
