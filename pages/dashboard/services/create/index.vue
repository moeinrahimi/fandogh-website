<template>
  <div>
    <h2>ایجاد سرویس </h2>
    <div class="row">
      <div class="col-md-6 col-xs-12" >

        <div class="fandogh-form-group">
          <f-input v-model="service"  styles="input-white input-block input-dashboard" placeholder="نام سرویس را در این قسمت بنویسید"> </f-input>
        </div>
        <div class="fandogh-form-group">
          <f-select v-model="option" :single="true" title="انتخاب نوع سرویس" :options="[{value: 'internal service', title: 'سرویس داخلی'}, {value:  'external service', title: 'سرویس خارجی'} ,{value: 'managed service', title: 'سرویس مدیریت شده'}]" />
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

  // yaml generator
  import jsyaml from 'js-yaml'

  export default {
    data(){
      return {
        internal: false,
        image: this.$route.params.image,
        option:'',
        port:'',
        service: '',
        data: [
          {
            rows: ['NODE_ENV', 'Production']
          }
        ]
      }
    },
    layout: 'dashboard',
    watch:{
      service(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'service'})
      },
      option(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'kind'})
      },
    },
    methods:{
      nextStep(){
        this.$router.push('/dashboard/services/create/step2')
      }
    },
    components:{
      FInput,
      FButton,
      FCheckbox,
      FTable,
      FSelect
    }
  }
</script>

<style scoped lang="stylus">
  .field-description
    font-size: 14px
    color: #b5b5b5
</style>