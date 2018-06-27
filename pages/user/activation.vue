<template>

</template>

<script>
    export default {
      beforeMount(){
        try {
          this.$store.dispatch('activation', {code: route.query.code, id: route.query.user_id}).then(res => {
            this.$store.dispatch('setMessage', res.message)
            this.$router.push('/')
          })
        } catch (e) {
          this.$store.dispatch('setMessage', e)
          this.$router.push('/')
        }
      }
    }
</script>