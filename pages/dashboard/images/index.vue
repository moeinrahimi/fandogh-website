<template>
    <div class="images" >
        <div class="row-block">
            <f-button styles="red" @onClick="$router.push('/dashboard/images/create')" > افزودن ایمیج </f-button>
        </div>
        <f-table title="ایمیج های شما" :header="header" :data="data" :actions="[{title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}]"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import FButton from '~/components/elements/button'
    export default {
      layout: 'dashboard',
      async asyncData({store, route}){
        try {
          let images = await store.dispatch('getImages')
        } catch (e) {
        }
      },
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
        FButton
      },
      methods:{
        versions(id){
          alert(id)
        }
      }
    }
</script>

