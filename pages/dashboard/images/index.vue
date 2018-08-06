<template>
    <div class="images" >
        <div class="row-block">
            <f-button styles="red" @onClick="$router.push('/dashboard/images/create')" > افزودن ایمیج </f-button>
        </div>
        <f-table title="ایمیج های شما" :header="header" :data="_images" :actions="[{title:`<img src='/icons/ic-time.svg'/><span> ورژن ها </span>`, action:'versions'}, {title:`<img src='/icons/ic-upload.svg' /> <span>آپلود</span> `, action:'createVersion'}, {title:`<img src='/icons/ic-delete.svg' /> <span>حذف</span> `, action:'versions'}]"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import FButton from '~/components/elements/button'
    import FDate from '~/utils/date'
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
          let images =this.$store.state.images
          if(images) {
            return images.map(({created_at, ...item}) => {
              return { ...item,  created_at: FDate({date: created_at})}
            })
          }
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
        },
        createVersion(id){
          console.log(encodeURI(id))
          this.$router.push(`/dashboard/versions/create/${decodeURI(id)}`)
        }
      }
    }
</script>

