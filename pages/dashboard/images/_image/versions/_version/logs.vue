<template>
  <div>
    <log :logs="['test log', 'test log 2']" />
  </div>
</template>

<script>
  import Log from '../../../../../../components/Dashboard/log/‌index'
  export default {
    layout: 'dashboard',
    components:{
      Log
    }
  }
</script>