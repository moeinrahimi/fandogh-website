<template>
  <div class="radio">
      <div class="radio-label">
          {{title}}
      </div>
      <div v-for="option in options" class="radio-option">
          <f-radio @onSelect="selectOption" :selected="selected" :title="option"></f-radio>
      </div>
  </div>
</template>

<script>
  import FRadio from './radio'
  export default {
    props:['title', 'options'],
    data(){
      return {
        selected: this.options[0]
      }
    },
    components:{
      FRadio
    },
    methods:{
      selectOption(title){
        this.selected = title
        this.$emit('input', title)
      }
    }
  }
</script>

<style lang="stylus" scoped>

.radio
    display: flex
    justify-content right
</style>