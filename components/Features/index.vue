<template>
  <section id="features" >
   <div class="inner-content">
      <h2 class="title">
      سرویس‌های <progress-hover>ابری</progress-hover> فندق
    </h2>
    <p class="description">
      فندوق سکویی است که به برنامه‌نویسان، مدیران سیستم و تیم‌های توسعه نرم‌افزار کمک میکنه تا به <br> راحتی بتونند محصولات خودشون رو توسعه بدن و با کمترین هزینه ممکن از اونها نگهداری کنند.
    </p>
   </div>

   <div class="container">
     <div class="row between-xs">
       <feature title="Auto Scaling" local_title="مقیاس پذیری آسان" icon="auto-scale" class="col-lg-4  col-sm-6 col-xs-12" />
       <feature title="Docker" local_title="به راحتی ساخت یک داکرفایل" icon="docker" class="col-lg-4 col-sm-6 col-xs-12" />
       <feature title="Managed Databases" local_title="پایگاه‌داده مدیریت شده" icon="database" class="col-lg-4 col-sm-6 col-xs-12" />
        <feature title="Cost Effective Platform" local_title="مقرون به صرفه" icon="cost-effective" class="col-lg-4 col-sm-6 col-xs-12" />
       <feature title="Production Ready" local_title="آماده استفاده در محیط عملیاتی" icon="ready" class="col-lg-4 col-sm-6 col-xs-12" />
       <feature title="Highly Available" local_title="دسترس پذیری بالا" icon="highly" class="col-lg-4 col-sm-6 col-xs-12" />
     </div>
   </div>
  
  </section>
</template>

<script>
import Feature from './feature'

export default {
  components:{
    Feature
  }
}
</script>

<style lang="stylus" >
  #features 
   background-image: linear-gradient(to left, #230073, #220286);
   padding-bottom 100px
   margin-bottom -1px
</style>



