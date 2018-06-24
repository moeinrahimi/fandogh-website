<template>
    <div>
        <f-modal  :message="error"  ref="modal" v-show="show"  >
            <h2>عضو شوید</h2>
            <div class="fandogh-form-group center margin-10">
                <f-input v-model="email" styles="input-color-blue" type="text" placeholder="ایمیل" />
            </div>
            <div class="fandogh-form-group center margin-10">
                <f-input v-model="password" styles="input-color-blue" type="password" placeholder="رمز عبور" />
            </div>
            <div class="fandogh-form-group center margin-10">
                <f-input v-model="re_password" styles="input-color-blue" type="password" placeholder="تکرار رمز عبور" />
            </div>
            <div class="fandogh-form-group center margin-10">
                <f-input v-model="namespace" styles="input-color-blue" type="text" placeholder="نام namespace" />
            </div>
            <div class="fandogh-form-group center margin-20 ">
                <f-button @onClick="register" styles="red block 80">{{title}}</f-button>
            </div>
        </f-modal>


    </div>
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
        email: '',
        password: '',
        re_password: '',
        namespace:'',
        loading: false,
        error: null,
        message: null,
      }
    },
    methods:{
      register(){
        if(this.password !== this.re_password) return this.error = 'رمز عبور و تکرار رمز عبور شما یکسان نیست'
        if(this.loading) return
        this.loading = true
        this.error = null
        this.$store.dispatch('register', this.$data).then( response => {
          this.loading = false
          this.$store.dispatch('showModal')
          this.message = response
          this.$store.dispatch('showModal', 'message')
          this.$store.dispatch('setMessage', response.message)
        }).catch(e => {
          this.loading = false
          this.error = e
        })
      }
    },
    mounted(){
      this.$refs.modal.$on('onOverlay', function () {
        this.$store.dispatch('showModal', false)
      })
    },
    computed:{
      show(){
        return this.$store.state.modals.register
      },
      title(){
        return this.loading ? '...' : 'عضویت'
      }
    }
  }
</script>
