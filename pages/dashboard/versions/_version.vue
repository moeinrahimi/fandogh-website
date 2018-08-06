<template>
  <div class="images" >
    <div class="row-block">
      <f-button styles="red" @onClick="$router.push('/dashboard/versions/create')" > افزودن ورژن </f-button>
    </div>
    <f-table :header="header" title="ورژن های شما" :data="_versions" :actions="[{title:`<img src='/icons/ic-add.svg' /> <span>ایجاد سرویس</span> `, action:'versions'}, {title:`<img src='/icons/ic-services.svg' /> <span>سرویس های فعال</span> `, action:'versions'}, {title:`<img src='/icons/ic-logs.svg' /> <span>مشاهده لاگ</span> `, action:'versions'}]"></f-table>
    <alert ref="alert" @onDelete="test" ></alert>
  </div>
</template>

<script>
  import FTable from '~/components/Dashboard/table'
  import FButton from '~/components/elements/button'
  import Alert from '~/components/Dashboard/alert'
  import FDate from '~/utils/date'
  export default {
    layout: 'dashboard',
    async asyncData({store, route}){
      try {
        let versions = await store.dispatch('getImageVersions', route.params.version)
        console.log(versions)
      } catch (e) {
        console.log(e)
      }
    },
    data(){
      return {
        header: ['ورژن', 'تاریخ', 'وضعیت', 'حجم'],
      }
    },
    components:{
      FTable,
      FButton,
      Alert
    },
    computed:{
      versions(){
        let versions = this.$store.state.versions
        if(versions) {
          return versions.map(({date, version, state}) => {
            return {version,date: FDate({date: date}), state}
          })
        }
      },
      _versions(){
        if(this.versions){
          return this.$dataTable({rows: this.versions, length: 4, props: ['version', 'date', 'size', 'state'], id: 'version'})
        }
      }
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

