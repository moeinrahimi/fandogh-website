<template>
  <div class="solutionItem row" :class="[direction === 'reverse' ? 'reverse reverseImg' : '']">
    <div class="col-sm-6 custom-size">
      <div class="solution-image">
        <img :src="image" alt="docker solution">
      </div>
    </div>
    <div class="col-sm-6 no-padding custom-size">
      <div class="text row middle-xs">
        <div class="inner-text">
          <h2>
           {{title}}
          </h2>
          <p v-html="description">
            
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['image', 'direction', 'title', 'description'],
}
</script>

<style lang="stylus" scoped >
  .solutionItem
    margin-bottom 150px
  
    .inner-text 
      h2 
        font-size: 24px;
        font-weight: bold;
        line-height: 2.5;
        color: #ff859e;
        text-shadow: 0 3px 6px rgba(255, 133, 158, 0.92);

    img
      width 80%
    .text 
      height 100%
      margin 0
      padding: 0
  .reverseImg
    .solution-image
      text-align left

  @media only screen and (max-width: 768px)
    .custom-size
      .inner-text
        margin 0 auto
      width 100%
      .solution-image
        text-align center
        img
          width 50%

</style>


