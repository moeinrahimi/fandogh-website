<template>
    <div class="flex centered-page">
        <register :disableOverlay="true" :noModal="true" :force="true"> </register>
    </div>
</template>

<script>
  import Register from  '~/components/Auth/Register.vue'
  export default {
    components: {
      Register
    },
    mounted(){
      this.$store.dispatch('logout')
    }
  }
</script>