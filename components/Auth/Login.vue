<template>
  <div>
    <f-modal ref="modal" v-show="show" >
      <h2>وارد شوید</h2>
      <div class="fandogh-form-group center margin-10">
        <f-input v-model="email" styles="input-color-blue" type="text" placeholder="ایمیل" />
      </div>
      <div class="fandogh-form-group center margin-10">
        <f-input v-model="password" styles="input-color-blue" type="text" placeholder="رمز عبور" />
      </div>
      <div class="fandogh-form-group  margin-20">
        <f-checkbox id="checkbox1" title="مرا بخاطر بسپار" />
      </div>
      <div class="fandogh-form-group center margin-20 ">
        <f-button styles="red block 80">ورود</f-button>
      </div>

      <div class="fandogh-form-group center margin-20 ">
        <a @click="showModal('forgot_password')"> فراموشی رمز عبور </a>
      </div>
    </f-modal>
    <forgot-password />
  </div>
</template>

<script>

import FModal from '~/components/elements/modal'
import FInput from '~/components/elements/input'
import FButton from '~/components/elements/button'
import FCheckbox from '~/components/elements/checkbox'
import ForgotPassword from './ForgotPassword'

  export default {
    components:{
      FModal,
      FInput,
      FButton,
      FCheckbox,
      ForgotPassword
    },
    data(){
      return {
        email: '',
        password: ''
      }
    },
    mounted(){
      this.$refs.modal.$on('onOverlay', function () {
          this.$store.dispatch('showModal')
      })
    },
    methods:{
      showModal(modal){
        this.$store.dispatch('showModal', modal)
      }
    },
    computed:{
      show(){
        return this.$store.state.modals.login
      }
    }
  }
</script>
