<template>
    <div>
        <h2>مرحله دوم سرویس داخلی</h2>
        <div class="row">
            <div class="col-md-6 col-xs-12" >
                <a v-if="!images.length" href="https://docs.fandogh.cloud/docs/getting-started.html" target="_blank">
                    <f-label value="شما هیچ تصویری پابلیش نکرده اید٬ برای آپلود کردن تصویر می توانید از این لینک  استفاده کنید.
"   />
                </a>
                <div v-else class="fandogh-form-group">
                    <f-select v-model="image" title="نام ایمیج را انتخاب کنید" :options="images"  styles="input-white input-block input-dashboard" placeholder="نام ایمیج را انتخاب کنید"> </f-select>
                </div>
                <div class="fandogh-form-group" v-if="image.length && version_loaded" >
                    <f-select v-model="version" title="ورژن ایمیج را انتخاب کنید" :options="versions"  styles="input-white input-block input-dashboard" placeholder="ورژن ایمیج را انتخاب کنید"> </f-select>
                </div>

                <div v-if="!image.length" class="fandogh-form-group">
                    <f-input v-model="image_external"  styles="input-white input-block input-dashboard"  placeholder="نام ایمیج خارجی بنویسید"> </f-input>
                </div>
                <div v-if="!image.length" class="fandogh-form-group">
                    <f-input v-model="version_external"  styles="input-white input-block input-dashboard"   placeholder="ورژن خارجی را بنویسید"> </f-input>
                </div>
                <div class="fandogh-form-group">
                    <f-input v-model="replicas"  styles="input-white input-block input-dashboard" type="number" placeholder="تعداد رپلیکاها را در این قسمت بنویسید"> </f-input>
                </div>

                <div class="fandogh-form-group margin-top-100">
                    <f-button @onClick="nextStep" styles="red block"  > مرحله بعد </f-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FTable from '~/components/Dashboard/table'
  import FCheckbox from '~/components/elements/checkbox'
  import FSelect from '~/components/elements/select'
  import FLabel from '~/components/Dashboard/label'

  // yaml generator
  import jsyaml from 'js-yaml'

  export default {
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
        replicas: '',
        image: '',
        image_external: '',
        version_external: 'latest',
        version_loaded: false,
        version: false
      }
    },
    computed:{
      images(){
        return this.$store.state.images.map(item => {
          return {
            title: item.name,
            value: item.name
          }
        })
      },
      versions(){
        if(!this.$store.state.versions) return []
        return this.$store.state.versions.map(item => {
          return {
            title: item.version,
            value: item.version
          }
        })
      },
      imageVersion(){
        if((!this.image.length || !this.version.length) && (!this.image_external.length || !this.version_external.length) ) return
        return (this.image+':'+this.version) || (this.image_external+':'+this.version_external)
      },
    },
    layout: 'dashboard',
    watch:{
      image(value, oldValue){
        this.version_loaded = false
        this.version = ''
        this.$store.dispatch('getImageVersions', value).then(res => {
          this.version_loaded = true
        })
      },
      imageVersion(value) {
        this.$store.dispatch('manifestGenerator', {value, path: 'spec.image'})
      },
      replicas(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'spec.replicas'})
      },
    },
    methods:{
      nextStep(){
        this.$router.push('/dashboard/services/create/step3')
      }
    },
    components:{
      FInput,
      FButton,
      FCheckbox,
      FTable,
      FSelect,
      FLabel
    }
  }
</script>

<style scoped lang="stylus">
    .field-description
        font-size: 14px
        color: #b5b5b5
</style>