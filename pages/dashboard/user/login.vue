<template>

</template>

<script>
  import {removeToken} from "../../../utils/cookie";

  export default {
    mounted(){
      removeToken()
    }
  }
</script>