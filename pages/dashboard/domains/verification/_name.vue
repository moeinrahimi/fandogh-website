<template>
  <div>
    <h2>ایجاد سرویس </h2>
    <div class="row">
      <div class="col-md-6 col-xs-12" >

        <div class="fandogh-form-group">
          <f-input v-model="name"  styles="input-white input-block input-dashboard input-disable" > </f-input>
        </div>
        <div class="fandogh-form-group">
          <f-textarea v-model="record" placeholder="لطفا روی دامنه مورد نظر یک رکورد با مقدار TXT زیر ایجاد کنید و روی کلید بررسی دامنه کلیک کنید"></f-textarea>
        </div>
        <div class="fandogh-form-group">
          <f-lable :value="domain.verification_key" title="کد فعالسازی"></f-lable>
        </div>
        <div class="fandogh-form-group margin-top-100">
          <f-button styles="red block"  > بررسی دامنه </f-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FTextarea from '~/components/Dashboard/textarea'
  import FLable from '~/components/Dashboard/label'

  export default {
    async asyncData({store, dispatch}){
      await store.dispatch('getDomains')
    },
    data(){
      return {
        name: this.$route.params.name,
        record: '',
        test:''
      }
    },
    computed:{
      domain(){
        let domain = this.$store.state.domains.find(domain => {
          return domain.name === this.name
        })
        return domain ? domain : {}
      },
    },
    layout: 'dashboard',
    components:{
      FInput,
      FButton,
      FTextarea,
      FLable
    }
  }
</script>

<style scoped lang="stylus">
  .field-description
    font-size: 14px
    color: #b5b5b5
</style>