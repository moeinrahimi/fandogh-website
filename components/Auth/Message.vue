<template>
    <f-modal ref="modal" v-show="show" >
        <h2>{{message}}</h2>
        <div class="fandogh-form-group center margin-20 ">
            <f-button @click="$store.dispatch('showModal')" styles="red block 80">تایید</f-button>
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
      FButton,
    },
    props:[
      'message'
    ],
    mounted(){
      this.$refs.modal.$on('onOverlay', function () {
        this.$store.dispatch('showModal')
      })
    },
    computed:{
      computed:{
        show(){
          return this.$store.state.modals.register
        }
      }
    }
  }
</script>
