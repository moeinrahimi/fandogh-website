<template>
  <login :disableOverlay="true" :noModal="true" force="true"> </login>
</template>

<script>
  import Login from  '~/components/Auth/Login.vue'
  export default {
    components: {
      Login
    },
    mounted(){
      this.$store.dispatch('logout')
    }
  }
</script>