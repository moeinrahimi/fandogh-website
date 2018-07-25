<template>
    <div class="images" >
        <f-table :header="header" :data="data" :actions="[{title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}]"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import ActionButton from '~/components/Dashboard/table/action-button'
    export default {
      layout: 'dashboard',
      data(){
        return {
          header: ['نام', 'آخرین ورژن', 'تاریخ ساخت ایمیج', 'آخرین به روز‌رسانی'],
          data: [
            {
              meta: {
                id: 24
              },
              rows: ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷'],
            },
            {
              meta: {
                id: 26
              },
              rows: ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷'],
            },
            {
              meta: {
                id: 28
              },
              rows: ['backend', 1.25, '۱۳ اردیبهشت ۱۳۹۷','۱۳ اردیبهشت ۱۳۹۷'],
            },
          ]
        }
      },
      components:{
        FTable,
        ActionButton
      },
      methods:{
        versions(id){
          alert(id)
        }
      }
    }
</script>

<style lang="stylus">
    .images
        display block
</style>

