<template>
    <f-modal  ref="modal" v-show="show"  >
        <h2>عضو شوید</h2>
        <div class="fandogh-form-group center margin-10">
            <f-input v-model="username" styles="input-color-blue" type="text" placeholder="نام کاربری" />
        </div>
        <div class="fandogh-form-group center margin-10">
            <f-input v-model="password" styles="input-color-blue" type="text" placeholder="رمز عبور" />
        </div>
        <div class="fandogh-form-group center margin-10">
            <f-input v-model="re_password" styles="input-color-blue" type="text" placeholder="تکرار رمز عبور" />
        </div>
        <div class="fandogh-form-group center margin-10">
            <f-input v-model="namespace" styles="input-color-blue" type="text" placeholder="نام namespace" />
        </div>
        <div class="fandogh-form-group center margin-20 ">
            <f-button styles="red block 80">عضویت</f-button>
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
        username: '',
        password: '',
        re_password: '',
        namespace:''
      }
    },
    mounted(){
      this.$refs.modal.$on('onOverlay', function () {
        this.$store.dispatch('showModal')
      })
    },
    computed:{
      show(){
        return this.$store.state.modals.register
      }
    }
  }
</script>
