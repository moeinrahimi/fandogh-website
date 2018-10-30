<template>

        <div class="active-service" v-bind:class="{'active-plan':plan.isActive}">
          <div class="plan-container">
            <plan :title="plan.title" :price="plan.price" :icon="plan.icon" :iconFirst="plan.iconFirst" :hasInfo="plan.hasInfo" :isActive="plan.isActive" />
            <div class="middle-line">
              <div class="line"></div>
            </div>
            <div class="plan-config-container">
            <plan-config v-for="config in configs" :icon="config.icon" :title="config.title" :value="config.value" :key="config.title" />
            </div>
            <div class="progress-bar" v-if="progressBar">
            <circleProgressBar :percent="progressBar"/>
            </div>
          </div>
          <div class="plan-description" v-bind:class="{'hidden':plan.isActive}">
            <div class="plan-description-content">
              <p>aaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaa
                a
              </p>
              <p>aaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaa
                a
              </p>
            </div>
            <div class="plan-description-toggle">
              <p>توضیحات</p>
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
    }
  },
  mounted() {
    let plans = document.querySelectorAll(".plan-description-toggle");
    let i;
    for (i = 0; i < plans.length; i++) {
      plans[i].addEventListener("click", function() {
        var panel = this.previousElementSibling;
        console.log(this.parentElement, "hah");
        panel.classList.toggle("activator");
        // this.parentElement.classList.toggle("activator");
        // if (panel.style.display === "block") {

        //   panel.style.display = "none";
        // } else {
        //   panel.style.display = "block";
        // }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.activator {
  visibility: visible !important;
  max-height : 1100px !important;

}
.hidden
  visibility: hidden
.plan-description-content {
  display: flex;
  width: 200px;
  border: solid 1px #e7e8ea;
  background-color: #ffffff;
  z-index: 1;
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
  visibility: hidden;
}

.plan-description {
  display: none;
  align-items: center;
  flex-direction: column;
  @media (max-width 636px){
    display flex
    }
}

.plan-description-toggle {
  z-index: 1;
  box-shadow: 0 3px 6px 0 rgba(255, 133, 158, 0.92);
  background-color: #ff859e;
  height: 40px;
  width: 40px * 2;
  border-bottom-left-radius: 40px * 2;
  border-bottom-right-radius: 40px * 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  p {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
  }
}

.active-service 
  flex: 1 1;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 15px;
  // height: 200px;
  &:hover
    border-color: #b5b5b5;
    background-color: #f8f8f8;
    color: #b0b0b0;
  @media (min-width: 1200px) {
    flex: 1 40%;
  }

  @media (max-width: 1779px) {
    flex: 1 50%;
  }

  @media (max-width: 820px) {
  }

  @media (max-width: 636px) {
    // height: 90px;
    width: 100px;
    margin-top: 40px; //NOTE in nabashe collapse kharab mishe 
  }


.plan-container {
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
  box-shadow none
}

.progress-bar {
  width: 100%;
  display: flex;
}

.plan-config-container {
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 636px) {
    margin: 5px 0;
  }
}
</style>