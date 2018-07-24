<template>
    <div >
        <f-table :header="header" :data="data"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    export default {
      layout: 'dashboard',
      data(){
        return {
          header: ['نام', 'آخرین ورژن', 'تاریخ ساخت ایمیج', 'آخرین به روز‌رسانی', 'تغییرات'],
          data: [
            ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷', ''],
            ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷', ''],
            ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷', '']
          ]
        }
      },
      components:{
        FTable
      }
    }
</script>

<style >

</style>