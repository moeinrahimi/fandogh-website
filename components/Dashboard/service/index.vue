<template>

        <div class="active-service" v-bind:class="{'active-plan':plan.isActive}">
          <div class="plan-container">
            <plan :title="plan.title" :price="plan.price" :icon="plan.icon" :iconFirst="plan.iconFirst" :hasInfo="plan.hasInfo" />
            <div class="middle-line">
              <div class="line"></div>
            </div>
            <plan-config v-for="config in configs" :icon="config.icon" :title="config.title" :value="config.value" :key="config.title" />
            <div class="progress-bar" v-if="progressBar">
            <circleProgressBar :percent="progressBar"/>
            </div>
          </div>
          
        </div>
</template>

<script>
import plan from "./plan";
import planConfig from "./planConfig";
import circleProgressBar from "~/components/Dashboard/circle-progress-bar";
export default {
  components: {
    plan,
    planConfig,
    circleProgressBar
  },
  props: {
    plan: {
      type: Object,
      default: {
        icon: "ic_fandogh.png",
        title: "پلن فعلی",
        price: "پلن 2",
        iconFirst: false
      }
    },
    configs: {
      type: Array,
      default: [
        {
          icon: "ic_fandogh.png",
          title: "RAM",
          value: "2GB"
        }
      ]
    },
    isActive: {
      type: Boolean,
      default: false
    },
    progressBar: {
      type: String,
      default: false
    },
  }
};
</script>

<style lang="stylus" scoped>
.active-service {
  flex: 1 1;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 15px;
}

.plan-container {
  width: 100%;
  height: 100%;
  display: flex;
}

.middle-line {
  display: flex;
  padding: 20px 30px;
}

.line {
  border: solid 1px #e7e8ea;
}

.active-plan {
  border-color: #b5b5b5;
  background-color: #f8f8f8;
  color: #b0b0b0;
}
.progress-bar
  width 100%
  display flex
</style>