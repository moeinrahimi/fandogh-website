<template>
    <div class="single-sidebar">
        <ul>
            <li><router-link :to="{path:'about-us'}">درباره ما</router-link></li>
            <li><router-link :to="{path:'/contact-us'}">تماس با ما</router-link></li>
            <li><router-link :to="{path:'conditions-of-use'}">شرایط استفاده از خدمات</router-link></li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    ul,li
        padding 0
        margin 0
    .single-sidebar
        overflow hidden
        width 270px
        border-radius: 20px;
        background-image: linear-gradient(to bottom, #2f1ea1, #0b003a);
        box-shadow: -2px 0 6px 0 rgba(21, 0, 113, 0.36);
        min-height 600px
        ul
            display block
            margin-top 24px
            li
                a
                    display block
                    padding 12px 24px
                    &.nuxt-link-active
                        background-color #000
                        border-right 2px solid #26c6ec
    @media only screen and (max-width: 768px)
        .single-sidebar
            width 100%
            display block
            min-height auto
            ul
                margin-bottom 24px
</style>