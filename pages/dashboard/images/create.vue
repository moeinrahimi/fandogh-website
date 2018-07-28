<template>
  <div class="row">
    <div class="col-md-6 col-xs-12" >
      <h2>ساخت ایمیج</h2>
      <div class="fandogh-form-group">
        <f-input styles="input-white input-block input-dashboard" placeholder="نام ایمیج را در این قسمت بنویسید"> </f-input>
      </div>
      <div class="fandogh-form-group">
        <f-input styles="input-white input-block input-dashboard" placeholder="ورژن ایمیج را در این قسمت بنویسید"> </f-input>
      </div>
      <div class="fandogh-form-group margin-40">
        <file id="file" />
      </div>
      <div class="fandogh-form-group margin-top-100">
        <f-button styles="red block"  > اتمام ساخت </f-button>
      </div>
    </div>
  </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import File from '~/components/elements/file'

  export default {
    layout: 'dashboard',
    components:{
      FInput,
      FButton,
      File
    }
  }
</script>