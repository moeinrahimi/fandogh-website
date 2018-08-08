<template>
  <div class="logs">
    <table>
      <tbody>
        <tr v-for="(log, index) in logs">
          <td>{{index+1}}</td>
          <td> {{log}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props:['logs']
  }
</script>

<style scoped lang="stylus">
  .logs
    width 100%
    min-height 500px
    max-height 600px
    overflow-y scroll
    border solid 1px #e7e8ea
    background #fff
    direction ltr
    padding 10px 0
    box-sizing border-box
    table
      tr
        td
          width 100%
          font-size 14px
          height 25px
          text-align left
          font-family Roboto, sans-serif
          &:first-child
            min-width 60px
            width 60px
            text-align center
            margin-right 5px
        &:nth-child(even)
          td
            &:first-child
              background-color #f2f2f2

</style>