<template>

</template>

<script>
    export default {
      async asyncData({store, route, redirect}){
          try {
            await store.dispatch('activation', {code: route.query.code, id: route.query.user_id})
            return redirect('/?message=حساب شما با موفقیت فعال شد')
          } catch (e) {
            console.log(e)
            return redirect('/?message='+e)
          }
      }
    }
</script>