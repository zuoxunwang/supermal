<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
// import ObserveDOM from '@better-scroll/observe-dom'
// BScroll.use(ObserveDOM)
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    (this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      mouseWheel: true,
      observeDOM: true,
    })),//上拉加载事件
      this.scroll.on("pullingUp", () => {
        this.$emit("moreData");
      }),
      this.scroll.on("scroll", (position) => {
        //scroll事件左表传递给父组件
        this.$emit("scrollToTop", position);
      });
  },
  methods: {
    //scroll方法封装一下
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>