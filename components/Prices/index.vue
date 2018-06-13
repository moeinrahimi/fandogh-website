<template>
  <section id="prices">
  <div class="container">
      <div class="inner-content">
        <div class="text">
          <h2 class="title">
        تعرفه سرویس‌های فندق
        </h2>
        <p class="description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        </div>
      <div class="row options">
        <div class="col-md-6 col-xs-12">
          <price-option styles="red" title="سرویس رایگان">
            <ul>
              <li>سرویس در حال اجر</li>
              <li>نگهداری ۲۰ نسخه از داکر ایمیج‌ها</li>
              <li>۲ گیگابایت فضای هدیه</li>
            </ul>
          </price-option>
        </div>
        <div class="col-md-6 col-xs-12">
           <price-option styles="blue blur" title="سرویس ویژه">
            <ul>
              <li>فکر کردی زرنگی؟  :/</li>
              <li>بزودی ویژگی های  سرویس ویژه اعلام میشه</li>
              <li>ممنون از حسن توجهت :)</li>
            </ul>
          </price-option>
        </div>
      </div>
      </div>
    </div>
  </section>

</template>

<script>

import PriceOption from './option'

export default{ 
  components:{
    PriceOption
  }
}
</script>

<style lang="stylus" scoped>
  .text
    margin-top -100px
    margin-bottom 100px
  .options
    div
     margin 10px 0
  @media only screen and (max-width: 991px)
    #prices
      margin-top 100px
</style>
