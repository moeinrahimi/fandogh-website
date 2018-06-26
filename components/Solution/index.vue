<template>
  <section id="solution" >
   <div class="container ">
    <div class="inner-content">
      <div class="text">
        <h2 class="title">
     چرا فندق راه‌حل مناسبی برای پروژه شماست؟
        </h2>
        <p class="description">
          فقط برای منابعی که واقعا مصرف می‌کنید هزینه کنید!
        </p>
     </div>

    <div class="img-solution">
      <img v-if="width >= 1000"  title="docker solution illustrate" src="~/assets/svg/img-fandogh-sol.svg" />
      <img v-else  title="docker solution illustrate" src="~/assets/svg/img-fandogh-sol-ver.svg" />

      <div class="solutions">
        <solution direction="reverse" title="راحتی استفاده" description=" Docker اصلی‌ترین ابزاری که به آن نیاز خواهید داشت حتی اگر با Docker آشنایی ندارید متخصصین ما به شما کمک خواهند کرد که در کمتر از یک روز به راحتی با این ابزار کار کنید." :image="require('~/assets/svg/img-docker-ill.svg')" />
        <solution  title="مشاوره و خدمات پشتیبانی" description="مشاوره در حیطه معماری سیستم و نرم‌افزارِ شما، و کمک به حل مشکلات Scalability که ممکن است برای سرویس‌های شما ایجاد شود." :image="require('~/assets/svg/img-support-ill.svg')" />
        <solution direction="reverse" title="بدون وابستگی به زبان برنامه‌نویسی" description="مهم نیست با چه زبان برنامه‌نویسی سرویس خود را توسعه می‌دهید." :image="require('~/assets/svg/img-programming-ill.svg')" />
        <solution  title="ارایه سرویس‌های مدیریت شده" description="- پایگاه داده ها<br>
- مانیتورینگ کانتینرها و متریک‌هایی که توسط شما تعریف می‌شوند<br>
- مشاهده Log سرویس‌ها به صورت متمرکز<br>
- و …" :image="require('~/assets/svg/img_managedSerIll.svg')" />
      </div>

    </div>
    </div>
   </div>
  </section>

  </template>
  
  <script>
  import Solution from './item.vue'
  export default {
    components:{
      Solution
    },
    data() {
      return {
        width: 992,
      }
    },
    mounted(){
      let self = this
      this.width  = document.body.clientWidth
      window.onresize = function(event) {
        self.width = document.body.clientWidth
      }

    }
  }
  </script>
  
  <style scoped lang="stylus" >
  .text
    margin-top -100px
    margin-bottom 100px
  .img-solution 
    margin-top 1px
    .solutions
      margin-top 100px

  @media only screen and (max-width: 991px)
      #solution
        margin-top 100px
      .img-solution
        text-align center
        img
            width 50%

  </style>
  

