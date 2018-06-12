<template>
    <header >
        <nav class="header-container" >
            <div class="right-menu">
                <div class="logo">
                    <logo  />
                </div>
                <div class="navbar">
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">سرویس ها</a></li>
                        <li><a href="#">مستندات</a></li>
                        <li><a href="#">بلاگ</a></li>
                        <li><a href="#">درباره ما</a></li>
                    </ul>
                </div>
            </div>
            <div class="user">
                <f-button style="width: 100px" @onClick="$refs.login.display()"  styles="transparent" > ورود </f-button>
                <f-button styles="transparent border" > ثبت نام </f-button>
            </div>
            <div class="menu">
                <img :src="require('../../assets/svg/ic_hamburger.svg')" />
            </div>
        </nav>
        <sidebar />
        <login ref="login" />
    </header>
</template>

<script>
import logo from './logo'
import FButton from '~/components/elements/button'
import Login from '~/components/Auth/Login'
import Sidebar from './sidebar'
export default {
  components:{
    logo,
    FButton,
    Login,
    Sidebar
  }
}
</script>

<style lang="stylus">
    .header-container
        height: 60px
        margin-top: 30px
        padding 0 90px
        box-sizing border-box
    header
        .header-container
          .right-menu
            float right 
          .user
            float left
      
        .logo
            display inline-block
            img
                width 126px
        .user
          button 
            margin-right 10px

   .navbar 
     margin-top -20px  
     display inline-block
     vertical-align middle
     ul
      margin 0 
      li 
        display  inline-block
        a 
          text-decoration none
          color white 
          padding 20px

    @media only screen and (max-width: 991px)
        .header-container
            height: 60px
            margin-top: 26px
            padding 0 30px
            box-sizing border-box
        .navbar
            display none
        header
            .right-menu
                float right
            .user
                display none
            .menu
                float left
                img
                    width 24px
            .logo
                img
                    width 96px

</style>
