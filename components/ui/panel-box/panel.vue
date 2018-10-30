<template>
    <div class="service">
        <box>
            <div class="service---box">
                <div class="service----item">
                    <div class="service-----image">
                        <img src="~/static/icons/plans/services-icon/bicycle.png">
                    </div>
                    <div class="service-----text">
                        <span class="service------title">
                            مفتی
                            <img src="~/static/icons/plans/info-button.png">
                        </span>
                        <span class="service------price">
                            رایگان
                        </span>
                    </div>
                </div>
                <div class="service----line"></div>
                <div class="service----item service----item-second">
                    <div class="service-----information">
                        <span class="service------image">
                            <img src="~/static/icons/plans/cpu.png" alt="">
                        </span>
                        <span class="service------name">
                            RAM
                        </span>
                        <span class="service------info">
                            Unknown
                        </span>
                    </div>
                    <div class="service-----information">
                        <span class="service------image">
                            <img src="~/static/icons/plans/ram.png" alt="">
                        </span>
                        <span class="service------name">
                            RAM
                        </span>
                        <span class="service------info">
                            Unknown
                        </span>
                    </div>
                    <div class="service-----information">
                        <span class="service------image">
                            <img src="~/static/icons/plans/storage.png" alt="">
                        </span>
                        <span class="service------name">
                            RAM
                        </span>
                        <span class="service------info">
                            Unknown
                        </span>
                    </div>
                </div>

            </div>
        </box>
        <div class="service-description">
            <div class="service-description-text" v-show="isShow === index">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus quis sunt reiciendis dignissimos perspiciatis corporis provident tenetur, iure rem pariatur? Velit, atque. Placeat architecto iure ut consequatur blanditiis eveniet!
            </div>
            <div class="plan-description-toggle" @click="toggle(item,index)">
                <p>توضیحات</p>
            </div>
        </div>
    </div>

</template>

<script>
import Box from "~/components/ui/panel-box/box.vue";

export default {
  components: {
    Box
  },
  methods: {

    toggle(item, index) {
      if (index === this.isShow) {
        this.isShow = -1;
        return;
      }
      this.isShow = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.service
    width 100%
    &-wrapper
        display flex
    &--half
        width 50%
    &---box
        position relative
        display flex
    &----item
        display flex
        // padding 0 10px 0 25px
        flex 1 1
        justify-content space-around
        align-items center
        &-second
            width 100%
        @media (max-width: 992px)
            flex inherit
            min-width 130px
    &----line
        width 2px
        background-color #e7e8ea
        // width 50%
    &-----image
        @media (max-width: 992px)
            display none
    &-----text
        display flex
        flex-direction column
    &------title
        margin-bottom 20px
        color #4f4f4f
        font-size 18px
        line-height 1.72
        img
            @media (max-width: 992px)
                display none
    &------price
        color #4f4f4f
        font-weight bold
        font-size 18px
        line-height 1.72
    &-----information
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        padding-top 10px
    &------name
        margin 10px 0 10px 0
        color #4f4f4f
        font-weight bold
        font-size 16px
        font-family Roboto
        line-height 1.19
    &------info
        color #4f4f4f
        font-size 16px
        font-family Roboto
        line-height 1.19
.service-description
    display flex
    flex-direction column
    margin 0 15px
    margin-bottom 20px
    text-align center
    @media (min-width: 992px)
        display none
    .service-description-text
        border solid 1px #e7e8ea
        background-color #ffffff
        line-height 2
.plan-description-toggle
    z-index 1
    display inline-block
    margin 0 auto
    margin-bottom 20px
    width 40px * 2
    height 40px
    border-bottom-right-radius 40px * 2
    border-bottom-left-radius 40px * 2
    background-color #ff859e
    box-shadow 0 3px 6px 0 rgba(255, 133, 158, 0.92)
    p
        color #fff
        font-weight bold
        font-size 12px
</style>
