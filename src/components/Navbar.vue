<template>
  <div class="navbar">
    <header class="head" :style="`background:${bgcolor}`">
      <span class="head-left"><slot name="headleft"></slot></span>
      <span class="head-title"><slot name="headtitle"></slot></span>
      <span class="head-right"><slot name="headright"></slot></span>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
    	return {
      }
    },
    props: [
    	'bgcolor'
    ]
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";
  .head {
    position: fixed;
    top: 0;
    z-index: 500;
    width: 100%;
    height: px2rem(100px);
    text-align: center;
    color: #fff;
    background: #dc3b40;
    display: flex;
    .head-title, .head-left, .head-right{
      line-height: px2rem(100px);
      font-size: px2rem(40px);
    }
    .head-left, .head-right {
      flex: 1;
      display: inline-block;
      width: px2rem(100px);
      height: px2rem(100px);
    }
    .head-title {
      flex: 6;
    }
  }
</style>
