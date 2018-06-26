<template>
    <div class="container">
        <section class="article">
            <article>
                <h2 class="no-line-height">
نسخه آلفای سرویس ابری فندق آماده تست توسط شما دوست عزیز است
                </h2>
                <p>
ما خیلی خوشحالیم از اینکه از امروز شما دوست عزیز میتوانید سرویس ابری فندق رو مورد بررسی قرار بدهید و با ارسال بازخوردهاتون به ما کمک کنید تا بتونیم محصولی مناسب نیازمندیهای تیمهای نرم افزاری ایرانی رو ایجاد کنیم.
</p>
<p>
شما از امروز این امکان رو دارید تا با استفاده از نام کاربری (ایمیل) و رمز عبوری که انتخاب کرده‌اید به بررسی این سرویس بپردازید. لطفا هر چیزی که به نظرتون میتونه به بهبود این سرویس کمک کنه رو به صورت تیکت در گیت هاب ما قرار بدید تا بتونیم بیشتر در موردشون گپ بزنیم.
                </p>
                <p>
                در حال حاضر برای استفاده از امکانات فندق شما نیاز دارید که از <a href="https://github.com/fandoghpaas/fandogh-cli">CLI</a> فندق استفاده کنید.
                مستندات نحوه استفاده در  <a href="http://blog.fandogh.cloud/guide">اینجا</a> در دسترس شما هستند.
                مستندات استفاده از CLI:
                </p>

                <p>
                همچنین در <a href="http://blog.fandogh.cloud">وبلاگ</a> فندق ما در مورد موضوعات مختلفی پست میذاریم که ممکنه به شما کمک کنه تا به صورت بهینه تری از فندق استفاده کنید.
                </p>

                <p class="center">
                    <a href="https://asciinema.org/a/4YL7hfdwWF8kxiyUxPt89ggCF" target="_blank"><img  src="https://asciinema.org/a/4YL7hfdwWF8kxiyUxPt89ggCF.png" /></a>
                </p>
            </article>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
    .article
        background #fff
        width 100%
        min-height 500px
        border-radius 20px
        margin-top 100px
        padding 50px 100px
        box-sizing border-box
        img
            width 100%
        h1,h2,h3
            line-height initial
        h1,h2,h3,p
           color #000
           padding-bottom 30px
        a
            color #ff859e
    @media only screen and (max-width: 991px)
        .article
            padding 50px 30px

</style>
