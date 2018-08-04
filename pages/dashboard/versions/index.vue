<template>
  <div class="images" >
    <div class="row-block">
      <f-button styles="red" @onClick="$router.push('/dashboard/versions/create')" > افزودن ورژن </f-button>
    </div>
    <f-table :header="header" title="ورژن های شما" :data="data" :actions="[{title:`<img src='/icons/ic-time.svg' /> ایجاد سرویس `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> سرویس های فعال `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> مشاهده لاگ `, action:'versions'}]"></f-table>
    <alert ref="alert" @onDelete="test" ></alert>
  </div>
</template>

<script>
  import FTable from '~/components/Dashboard/table'
  import FButton from '~/components/elements/button'
  import Alert from '~/components/Dashboard/alert'
  export default {
    layout: 'dashboard',
    data(){
      return {
        header: ['ورژن', 'تاریخ', 'حجم', 'وضعیت'],
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
      FButton,
      Alert
    },
    methods:{
      versions(id){
        this.$refs.alert.toggle()
      },
      test(value){
        alert(value)
      }
    }
  }
</script>

