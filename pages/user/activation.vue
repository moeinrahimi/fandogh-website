<template>

</template>

<script>
    export default {
      async asyncData({store, route, redirect}){
          try {
            let result = await store.dispatch('activation', {code: route.query.code, id: route.query.user_id})
            return redirect('/?message='+result.message)
          } catch (e) {
            console.log(e)
            return redirect('/?message='+e)
          }
      }
    }
</script>