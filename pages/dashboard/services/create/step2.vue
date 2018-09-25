<template>
    <div>
        <h2>مرحله دوم سرویس داخلی</h2>
        <div class="row">
            <div class="col-md-6 col-xs-12" >

                <div class="fandogh-form-group">
                    <f-input v-model="image"  styles="input-white input-block input-dashboard" placeholder="نام ایمیج را در این قسمت بنویسید"> </f-input>
                </div>
                <div class="fandogh-form-group">
                    <f-input v-model="replicas"  styles="input-white input-block input-dashboard" placeholder="تعداد رپلیکاها را در این قسمت بنویسید"> </f-input>
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
        replicas: '',
        image: '',
      }
    },
    layout: 'dashboard',
    watch:{
      image(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'spec.image'})
      },
      replicas(value, oldValue){
        this.$store.dispatch('manifestGenerator', {value, path: 'spec.replicas'})
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