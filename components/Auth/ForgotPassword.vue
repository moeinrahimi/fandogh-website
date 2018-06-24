<template>
    <f-modal ref="modal" v-show="show" >
        <h2>فراموشی رمز عبور</h2>
        <div class="fandogh-form-group center margin-10">
            <f-input v-model="email" styles="input-color-blue" type="text" placeholder="ایمیل خود را وارد کنید" />
        </div>
        <div class="fandogh-form-group center margin-20 ">
            <f-button styles="red block 80">ورود</f-button>
        </div>
    </f-modal>
</template>

<script>

  import FModal from '~/components/elements/modal'
  import FInput from '~/components/elements/input'
  import FButton from '~/components/elements/button'
  import FCheckbox from '~/components/elements/checkbox'


  export default {
    components:{
      FModal,
      FInput,
      FButton,
      FCheckbox
    },
    data(){
      return {
       email: ''
      }
    },
    mounted(){
      this.$refs.modal.$on('onOverlay', function () {
        this.$store.dispatch('showModal', false)
      })
    },
    computed:{
      show(){
        return this.$store.state.modals.forgot_password
      }
    }
  }
</script>
