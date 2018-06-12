<template>
    <div class="sidebar">
        <div class="row">
            <div class="col-xs-6">
                <div class="logo">
                    <logo  />
                </div>
            </div>
            <div class="col-xs-6"></div>
        </div>
    </div>
</template>

<script>
  import logo from './logo'
    export default {
      components:{

      }
    }
</script>

<style lang="stylus" scoped >
    .sidebar
        height 100vh
        width 300px
        background-color #220286
        position fixed
        top 0
        left 0
        z-index 100
</style>