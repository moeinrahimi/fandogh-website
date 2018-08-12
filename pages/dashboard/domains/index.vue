<template>
  <div class="row">
    <div class="col-md-6 col-xs-12" >
      <h2>افزودن دامنه</h2>
      <div class="fandogh-form-group">
        <f-input v-model="name"  styles="input-white input-block input-dashboard" placeholder="نام دامنه را در این قسمت بنویسید"> </f-input>
      </div>
      <div class="fandogh-form-group margin-top-100">
        <f-button styles="red block" v-if="!loading"  > مرحله بعد </f-button>
      </div>
    </div>
  </div>
</template>

<script>
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FormValidator from '~/utils/formValidator'
  export default {
    layout: 'dashboard',
    components:{
      FInput,
      FButton,
      File
    },
  }
</script>