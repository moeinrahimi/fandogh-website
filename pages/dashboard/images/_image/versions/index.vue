<template>
  <div class="images" >
    <div class="row-block">
      <f-button styles="red" @onClick="$router.push('/dashboard/versions/create')" > افزودن ورژن </f-button>
    </div>
    <f-table :header="header" title="ورژن های شما" :data="_versions" :actions="[{title:`<img src='/icons/ic-add.svg' /> <span>ایجاد سرویس</span> `, action:'versions'}, {title:`<img src='/icons/ic-services.svg' /> <span>سرویس های فعال</span> `, action:'versions'}, {title:`<img src='/icons/ic-logs.svg' /> <span>مشاهده لاگ</span> `, action:'logs'}]"></f-table>
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
        await store.dispatch('getImageVersions', route.params.image)
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
          return versions.map(({date, version, state, size}) => {
            return {version,date: FDate({date: date}), state: this.getState(state, version), size}
          })
        }
      },
      _versions(){
        if(this.versions){
          return this.$dataTable({rows: this.versions, length: 4, props: ['version', 'date', 'state', 'size'], id: 'version'})
        }
      }
    },
    methods:{
      versions(id){
        this.$refs.alert.toggle()
      },
      getState(state, version){
        return state === 'FAILED' ? `<a href="/dashboard/images/${this.$route.params.image}/versions/${version}/logs" class="error-text">خطا</a>` : state === 'BUILT' ? `<span  class="success-text">ساخته شده</span>` : `<a href="/dashboard/images/${this.$route.params.image}/versions/${version}/logs" class="pending-text">در حال ساخت ...</a>`
      },
      logs(value){
        this.$router.push(`/dashboard/images/${this.$route.params.image}/versions/${value}/logs`)
      }
    }
  }
</script>

