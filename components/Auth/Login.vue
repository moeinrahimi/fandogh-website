<template>
  <f-modal ref="modal"  />
</template>

<script>

import FModal from '~/components/elements/modal'

  export default {
    components:{
      FModal
    },
    methods:{
      display(){
        this.$refs.modal.display()
      }
    }
  }
</script>
