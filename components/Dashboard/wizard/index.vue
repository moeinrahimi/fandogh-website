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
                     <p v-if="index === current_state">
                         {{step.title}}
                     </p>
                 </div>
                 <div v-if="index+1 < _steps.length" class="line"></div>
             </div>
         </div>
      </div>
      <div class="wizard-content">
          <slot />
      </div>
      <div class="wizard-footer">
          <f-button v-if="back" :path="back.path" styles="red" > مرحله قبل </f-button>
          <f-button v-if="next" :path="next.path" styles="blue"  > مرحله بعد </f-button>
          <f-button  v-if="back && !loading" @onClick="finish"  :styles="built"  > اتمام ساخت </f-button>
          <f-button  v-if="back && loading"   :styles="built"  > در حال ساخت... </f-button>
      </div>
  </div>
</template>

<script>
import FButton from "~/components/elements/button";
import ErrorReporter from '~/utils/ErrorReporter'
export default {
  data(){
    return {
      loading: false
    }
  },
  props: {
    btn_title: {
      default: ""
    },
    steps: {
      default: null,
      type: Array
    }
  },
  components: {
    FButton
  },
  computed: {
    wizard(){
      return this.$store.state.wizard
    },
    built(){
      return this.next ? 'border black transparent' : 'blue'
    },
    finish(e){
      this.$emit('onFinish', e)
      this.loading = true
      this.$store.dispatch('createServiceManifest').then(res => {
        this.loading = false
        this.$router.push('/dashboard/services')
      }).catch(e => {
        this.loading = false
        ErrorReporter(e, [], true).forEach(error => {
          this.$notify({
            title: error,
            time: 4000,
            type: 'error'
          })
        })
      })
    },
    _steps() {
      let steps = this.steps || this.wizard.steps;
      return steps.map(
        item =>
          this.$route.fullPath === item.path
            ? { ...item, current: true }
            : { ...item, current: false }
      );
    },
    current_state() {
      return this._steps.findIndex(item => item.current);
    },
    back(){
      return this._steps[this.current_state-1]
    },
    next(){
      return this._steps[this.current_state+1]
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/mixins.styl"

.wizard
    &-footer
        margin-top 100px
        a
          margin-left 20px
          margin-bottom 30px
    &-progress
        &-steps
            display flex
            justify-content space-between
            width max-content
            position relative
            .step-container
                display flex
                margin-bottom 100px
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
                        position absolute
                        width 100px
                        right -25px
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

@media laptop
    .wizard
        &-progress
            &-steps
                .step-container
                    .line
                        width 15px

</style>
