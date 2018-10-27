<template>
<div class="plan-config">
              <div class="plan-config-icon">
                <img :src="'/icons/plans/' + icon" alt="">
              </div>
              <p class="plan-config-title">{{title}}</p>
              <p>{{value}}</p>
            </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "cpu.png"
    },
    title: {
      type: String,
      default: "RAM"
    },
    value: {
      type: String,
      default: "2GB"
    }
  }
};
</script>

<style lang="stylus" scoped>
.plan-config {
  display: flex;
  flex-direction: column;
  padding: 27px 6px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 636px) {
    padding: 0
  }  
}
p
  @media (max-width: 636px) {
    font-size 12px
    height 0
  }  
img
  @media (max-width: 636px) {
    width 16px
  }  

.plan-config-icon {
  padding: 10px;
    @media (max-width: 636px) {
      padding 0 
  }  
}
</style>