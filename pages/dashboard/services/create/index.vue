<template>
  <div>
    <h2>ایجاد سرویس </h2>
    <div class="row">
      <div class="col-md-6 col-xs-12" >

        <div class="fandogh-form-group">
          <f-input v-model="image"  styles="input-white input-block input-dashboard input-disable" > </f-input>
        </div>
        <div class="fandogh-form-group">
          <f-input v-model="service"  styles="input-white input-block input-dashboard" placeholder="نام سرویس را در این قسمت بنویسید"> </f-input>
        </div>
        <div class="fandogh-form-group">
          <f-input v-model="port"  styles="input-white input-block input-dashboard" placeholder="پورت سرویس : به صورت پیش‌فرض 80" > </f-input>
        </div>
        <div class="flex margin-40">
          <f-checkbox v-model="internal" id="checkbox2"  styles="input-light" title="Internal (داخلی)  "  /> <span class="field-description"> سرویس شما به صورت داخلی اجرا می‌شود و از بیرون قابل دسترس نمی‌باشد. </span>
        </div>
        <div class="row flex">
          <div class="col-md-4">
            <f-input v-model="image"  styles="input-white input-block input-dashboard" placeholder="نام متغیر"> </f-input>
          </div>
          <div class="col-md-4">
              <f-input v-model="image"  styles="input-white input-block input-dashboard" placeholder="مقدار متغییر"> </f-input>
          </div>
          <div class="col-md-4">
            <f-button styles="blue block" > افزودن به جدول</f-button>
          </div>
        </div>
        <div class="fandogh-form-group margin-top-100">
          <f-button styles="red block"  > اجرا شود </f-button>
        </div>
      </div>
      <div class="col-md-6 col-xs-12" >
        <f-table :small="true" :header="header" :data="data"  title="env" :actions="[{title:`<img src='/icons/ic-time.svg' /> `, action:'versions'}, {title:`<img src='/icons/ic-time.svg' />  `, action:'versions'}]" />
      </div>
    </div>
  </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FTable from '~/components/Dashboard/table'
  import FCheckbox from '~/components/elements/checkbox'

  export default {
    data(){
      return {
        internal: false,
        image: this.$route.params.image,
        header: ['نام متغییر', 'مقدار متغیر'],
        data: [
          {
            rows: ['NODE_ENV', 'Production']
          }
        ]
      }
    },
    layout: 'dashboard',
    components:{
      FInput,
      FButton,
      FCheckbox,
      FTable
    }
  }
</script>

<style scoped lang="stylus">
  .field-description
    font-size: 14px
    color: #b5b5b5
</style>