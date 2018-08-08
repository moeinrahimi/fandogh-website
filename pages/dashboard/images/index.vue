<template>
    <div class="images" >
        <div class="row-block">
            <f-button styles="red" @onClick="$router.push('/dashboard/images/create')" > افزودن ایمیج </f-button>
        </div>
        <f-table title="ایمیج های شما" :header="header" :data="_images" :actions="[{title:`<img src='/icons/ic-time.svg'/><span> ورژن ها </span>`, action:'versions'}, {title:`<img src='/icons/ic-upload.svg' /> <span>آپلود</span> `, action:'createVersion'}, {title:`<img src='/icons/ic-delete.svg' /> <span>حذف</span> `, action:'delete'}]"></f-table>
    </div>
</template>

<script>
    import FTable from '~/components/Dashboard/table'
    import FButton from '~/components/elements/button'
    import FDate from '~/utils/date'
    import Alert from '../../../components/Dashboard/alert'
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
            return images.map(({created_at, name , last_version}) => {
              if(last_version) {
                return {
                  name,
                  created_at: FDate({date: created_at}),
                  version: last_version.version,
                  date: FDate({date: last_version.date})
                }
              } else {
                return {
                  name,
                  created_at: FDate({date: created_at})
                }
              }
            })
          }
        },
        _images(){
          if(this.images){
            return this.$dataTable({rows: this.images, length: 4, props: ['name', 'created_at', 'version', 'date'], id: 'name'})
          }
        }
      },
      methods:{
        versions(id){
          this.$router.push(`/dashboard/images/${id}/versions`)
        },
        createVersion(id){
          this.$router.push(`/dashboard/images/${id}/versions/create`)
        },
        delete(id) {
          this.$alertify({
            title: 'ایمیج حذف شود؟',
            description: ' آیا از حذف شدن ایمیج خود مطمئن هستید؟'
          }, (status) =>{
            if(status){
              this.$store.dispatch('deleteImage', id).then(res =>{
                this.$store.dispatch('getImages')
                this.$notify({
                  title: res.message,
                  type: 'success'
                })
              }).catch(e => {
                this.$notify({
                  title: e.message,
                  type: 'error'
                })
              })
            }
          })
        }
      }
    }
</script>

