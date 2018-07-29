<template>
  <div class="images" >
    <div class="row-block">
      <f-button styles="red" @onClick="$router.push('/dashboard/services/create')" > اجرای سرویس جدید </f-button>
    </div>
    <f-table :header="header" title="سرویس‌ های شما" :data="data" :actions="[{title:`<img src='/icons/ic-time.svg' /> حذف `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> مشاهده جزییات `, action:'versions'}]"></f-table>
  </div>
</template>

<script>
  import FTable from '~/components/Dashboard/table'
  import FButton from '~/components/elements/button'
  export default {
    layout: 'dashboard',
    data(){
      return {
        header: ['تاریخ ساخت سرویس', 'ورژن ایمیج', 'ایمیج سرویس', 'نام سرویس'],
        data: [
          {
            meta: {
              id: 24
            },
            rows: ['۱.۲۵', '۱۳ اردیبهشت ۱۳۹۷','۲۷mb', `<span class="alert-text center font-bold"> خطا </span>`],
          },
          {
            meta: {
              id: 26
            },
            rows: ['۲.۵', '۱۳ اردیبهشت ۱۳۹۷','۲۷mb', `<span class="success-text center font-bold"> ساخته شده </span>`],
          },
          {
            meta: {
              id: 28
            },
            rows: ['۳.۱', '۱۳ اردیبهشت ۱۳۹۷','۲۷mb', `<span class="pending-text center font-bold"> در حال ساخت... </span>`],
          },
        ]
      }
    },
    components:{
      FTable,
      FButton
    },
    methods:{
      versions(id){
        alert(id)
      }
    }
  }
</script>

