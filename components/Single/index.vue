<template>
    <div class="single">
        <div class="detail">
            <slot></slot>
        </div>
        <div class="s-sidebar">
            <sidebar> </sidebar>
        </div>
    </div>
</template>

<script>
    import Sidebar from './sidebar'
    export default {
      components:{
        Sidebar
      }
    }
</script>

<style lang="stylus" scoped>
    .single
        margin-top 100px
        display flex
        flex-flow wrap row-reverse
        align-items flex-start
        .detail
            width calc(100% - 300px)
            margin-right 30px

</style>