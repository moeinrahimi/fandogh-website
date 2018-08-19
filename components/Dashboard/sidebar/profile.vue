<template>
    <div class="profile">
        <div class="profile--pic">
            <img :src="avatar" alt="profile">
        </div>
        <div class="profile--name">
            <h6> {{username}} </h6>
        </div>
    </div>
</template>

<script>
    import {getValue} from "~/utils/cookie";
    import Gravatar from '~/utils/gravatar'

    export default {
      computed:{
        username(){
          return getValue('username')
        },
        avatar(){
          let email = getValue('email')
          return Gravatar(email, 150)
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .profile
        display flex
        align-items center
        .profile--pic img
            width 64px
            border-radius 64px
            padding 30px

    @media only screen and (min-width: 1400px)
        .profile
            .profile--pic img 
                padding 0
                padding-top 20px
            flex-direction column
            justify-content center

</style>