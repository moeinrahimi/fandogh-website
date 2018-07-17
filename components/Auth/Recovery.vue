<template>
    <div>
        <f-modal noModal="true" :disableOverlay="true" :message="error" ref="modal" >
            <h2>تغییر رمز عبور</h2>
            <form @submit.prevent>
                <div class="fandogh-form-group center margin-10">
                    <f-input v-model="new_password" styles="input-color-blue" type="password" placeholder="رمز عبور" />
                </div>
                <div class="fandogh-form-group center margin-10">
                    <f-input v-model="re_password" styles="input-color-blue" type="password" placeholder="تکرار رمز عبور" />
                </div>
                <div class="fandogh-form-group center margin-20 ">
                    <f-button @onClick="resetPassword" styles="red block 80">{{title}}</f-button>
                </div>
            </form>
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
        re_password: '',
        new_password: '',
        code: this.$route.query.code,
        id: this.$route.query.user_id,
        error:null,
        message: null,
        loading: false
      }
    },
    methods:{
      showModal(modal){
        this.$store.dispatch('showModal', modal)
      },
      resetPassword(){
        if(this.new_password !== this.re_password) return this.error = 'رمز عبور و تکرار رمز عبور شما یکسان نیست'
        if(this.loading) return
        this.loading = true
        this.error = null
        this.$store.dispatch('resetPassword', this.$data).then( response => {
          this.loading = false
          this.$store.dispatch('showModal')
          this.$router.push({path:'/'})
          this.$store.dispatch('setMessage', response.message)
        }).catch(e => {
          this.loading = false
          this.error = e
        })
      }
    },
    computed:{
      show(){
        return this.$store.state.modals.login
      },
      title(){
        return this.loading ? '...' : 'تغییر رمز عبور'
      },
    }
  }
</script>
