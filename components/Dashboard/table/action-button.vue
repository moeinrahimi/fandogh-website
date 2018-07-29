<template>
    <a @click="$emit('onClick')" class="action-button" href="#"> <slot /> </a>
</template>
<script>
    export default {

    }
</script>
<style  lang="stylus">
    .action-button
        background #eaf0f7
        border-radius 5px
        padding 8px
        color #4f4f4f
        font-size 12px
        margin 15px
        display inline-block
        margin-right 8px
        img
            width 16px
            height 16px
            vertical-align middle

</style>