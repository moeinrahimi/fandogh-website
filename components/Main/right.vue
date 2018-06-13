<template>
    <section class="right-main">
        <h1>
                    همه چیز با یه داکرفایل شروع میشه ...
        </h1>
        <p>
            فندق یه PaaS هست که به شما این امکان رو میده که سرویس‌های خودتون رو بر روی سرورهای ابری مستقر کنید و نگران مدیریت سرورها و سرویس‌هایی که نیاز دارید نباشید.
        </p>
        <div class="registration">
            <f-button styles="red small" > ورود </f-button>
            <f-button styles="blue small" > ثبت نام </f-button>
        </div>
    
    </section>
</template>

<script>

import FButton from '~/components/elements/button'

export default{
  components:{
      FButton
  }
}
</script>

<style lang="stylus" scoped>

    .registration
        margin-top 50px
        button 
            margin 0 10px
    .right-main
        position relative
        margin-top 60px
        .message
            color greenyellow
        .error
            color red


    input
        padding 20px
        width 100%
        box-sizing: border-box
        border-radius 10px
        border none

    @media only screen and (max-width: 576px)
        .registration
            text-align center
        .registration
            button
                margin 5px


</style>