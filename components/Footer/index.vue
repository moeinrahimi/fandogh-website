<template>
    <div class="footer">
        <div class="top-footer">
            <div class="icons">
                <ul>
                    <li>
                        <a target="_blank" href="https://github.com/fandoghpaas"> <img src="~/assets/img/github-logo.png" /> </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/fandoghpaas"> <img src="~/assets/img/twitter-logo-button.png" /> </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:info@fandogh.cloud"> <img src="~/assets/img/closed-envelope-circle.png" /> </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="thin-footer">
            <p>
                کلیه حقوق این سایت متعلق به شرکت ایده‌نگاران‌بینا می‌باشد
            </p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .footer
        .top-footer
            background: #3f10ae
            height 90px
            display flex
            .icons
                align-self center
                margin 0 auto
                ul
                    li
                        display inline-block
                        margin-left 24px
        .thin-footer
            background-color #22095d
            height 45px
            text-align center
            display flex
            p
                align-self center
                text-align center
                width 100%

    @media only screen and (max-width: 576px)
        .thin-footer
            p
                font-size 12px

</style>