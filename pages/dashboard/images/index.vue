<template>
    <div class="images" >
        <div class="row-block">
            <f-button styles="red" @onClick="$router.push('/dashboard/images/create')" > افزودن ایمیج </f-button>
        </div>
        <f-table title="ایمیج های شما" :header="header" :data="_images" :actions="[{title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' /> ورژن ها `, action:'versions'}]"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import FButton from '~/components/elements/button'
    export default {
      layout: 'dashboard',
      async asyncData({store, route, redirect}){
        try {
         await store.dispatch('getImages')
        } catch (e) {
          if(e.status === 401){
            redirect('/user/login')
          }
        }
      },
      data(){
        return {
          header: ['نام','تاریخ ساخت ایمیج', 'آخرین ورژن', 'آخرین به روز‌رسانی'],
          data: [
          ]
        }
      },
      components:{
        FTable,
        FButton
      },
      computed:{
        images(){
          return this.$store.state.images
        },
        _images(){
          if(this.images){
            return this.$dataTable({rows: this.images, length: 4, props: ['name', 'created_at'], id: 'name'})
          }
        }
      },
      methods:{
        versions(id){
          alert(id)
        }
      }
    }
</script>

