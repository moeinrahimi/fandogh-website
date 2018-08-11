<template>
  <div class="images" >
    <div class="row-block">
      <f-button styles="red" @onClick="$router.push('/dashboard/services/create')" > اجرای سرویس جدید </f-button>
    </div>
    <f-table :header="header" title="سرویس‌ های شما" :data="_services" :actions="[{title:`<img src='/icons/ic-time.svg' /> حذف `, action:'test'}, {title:`<img src='/icons/ic-time.svg' /> مشاهده جزییات `, action:'test'}]"></f-table>
  </div>
</template>

<script>
  import FTable from '~/components/Dashboard/table'
  import FButton from '~/components/elements/button'
  import FDate from '~/utils/date'
  export default {
    layout: 'dashboard',
    async asyncData({store, route}){
      await store.dispatch('getServices')
    },
    data(){
      return {
        header: ['تاریخ ساخت سرویس', 'ورژن ایمیج', 'ایمیج سرویس', 'نام سرویس'],
      }
    },
    computed:{
      services(){
        let services = this.$store.state.services
        if(services) {
          return services.map(({start_date, name, service_type, state}) => {
            return {
              name,
              //version: last_version.version,
              version: '',
              image_service: '',
              start_date: FDate({date: start_date}),
            }
          })
        }
      },
      _services(){
        if(this.services){
          return this.$dataTable({rows: this.services, length: 4, props: ['name', 'version', 'image_service', 'start_date'], id: 'name'})
        }
      }
    },
    components:{
      FTable,
      FButton
    },
    methods:{
      test(){

      }
    }
  }
</script>

