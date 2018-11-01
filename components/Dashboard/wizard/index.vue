<template>
  <div class="wizard">
      <div class="wizard-progress">
         <div class="wizard-progress-steps">
             <div class="step-container" v-for="(step, index) in _steps" :class="{'current': index === current_state, 'before': index < current_state}">
                 <div class="step"  >
                     <router-link  :to="step.path">
                 <span>
                     {{index+1}}
                 </span>
                     </router-link>
                     <p>
                         {{step.title}}
                     </p>
                 </div>
                 <div v-if="index+1 < steps.length" class="line"></div>
             </div>
         </div>
      </div>
      <div class="wizard-content">
          <slot />
      </div>
      <div class="wizard-footer">
          <f-button styles="blue" > {{btn_title}} </f-button>
      </div>
  </div>
</template>

<script>
import FButton from "~/components/elements/button";
export default {
  props: {
    btn_title: {
      default: ""
    },
    steps: {
      default: [],
      type: Array
    }
  },
  components: {
    FButton
  },
  computed: {
    _steps() {
      return this.steps.map(
        item =>
          this.$route.fullPath === item.path
            ? { ...item, current: true }
            : { ...item, current: false }
      );
    },
    current_state() {
      return this._steps.findIndex(item => item.current);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/mixins.styl"

.wizard
    &-footer
        margin-top 100px
    &-progress
        &-steps
            display flex
            justify-content space-between
            width max-content
            position relative
            .step-container
                display flex
                .line
                    width 90px
                    margin 18px -2px
                    height 6px
                    border-radius: 10px
                    border: solid 1px #e7e8ea
                    background-color: #ffffff
                .step
                    position relative
                    z-index 1
                    &:last-child
                        margin-left 0
                    a
                        display flex
                        justify-content center
                        align-items center
                        width: 36px
                        height: 36px
                        border: solid 1px #e7e8ea
                        background-color: #ffffff
                        border-radius 50%

                    span
                        color #bfbfbf
                    p
                        text-align center
                        font-size 16px
                &.before
                    .line
                        border: solid 1px #2cac46
                        background-color: #2cac46
                    a
                        background-color: #2cac46
                        span
                            color #fff
                &.current
                    a
                        background-color: #296bdd
                        span
                            color #fff
@media laptop
    .wizard
        &-progress
            &-steps
                .step-container
                    .line
                        width 30px
</style>
