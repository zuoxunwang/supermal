<!--  -->
<template>
  <div id="home" class="wrapper">
    <nav-bar class="nav-bar"><div class="center" slot="center">购物街</div></nav-bar>
      <tab-control class="newTabControl"
         v-show = 'isTabfixed'
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
         ref = tabControl2 />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @moreData="moreData"
      @scrollToTop="scrollToTop"
    >
      <home-swiper :banners="banners" @swiperImageLoad = 'swiperImageLoad' />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
         ref = tabControl1
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsShow" />
    
  </div>
</template>

<script>
//home业务组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
// import { debounce } from "common/utils.js"
//数据请求
import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      backTopIsShow: false,
      deounceTimer: null,
      tabOffsetTop : 0,
      isTabfixed : false
    };
  },//记录组件之前的位置
     activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
  created() {
    //home数据multidata
    this.getHomeMultiData();
    //home数据goods
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //1.监听GoodsListItem里图片加载完毕
    //coderWhy封装方法(因为报错)
    // const refresh =debounce(this.$refs.scroll.scroll.refresh,200) 
    // this.$bus.$on("itemImageLoad", () => {
    //   refresh();
    // });
    //自己的方法
    this.$bus.$on("itemImageLoad", () => {
      this.deounce(300);
    });
  },
  computed: {
    //html里别写太长的属性  转换为计算属性
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //swiper里的图片加载后html高度才确定 这时候offsetTop的高度是真实的
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },
     //监听position
    scrollToTop(position) {
      //1.下拉大于1000 显示锚点
      this.backTopIsShow = -position.y > 1000;
      //2.到达吸顶位置变为定位tabControl
      this.isTabfixed = (-position.y+40) > this.tabOffsetTop
    },
    //图片加载刷新scroll次数过多   使用防抖解决问题
    deounce(delay) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$refs.scroll.scroll.refresh();
      }, delay);
    },
    //子传父接收到Scroll组件传过来的信息 然后调用请求函数
    moreData() {
      this.getHomeGoods(this.currentType);
    },
    backTop() {
      // 正常方法
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 在scroll里封装方法scrollTo(x,y,time=500)
      this.$refs.scroll.scrollTo(0, 0);
    },
    /*
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    /*
     * 网络请求相关方法
     */
    //multidata
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    }, //goods
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        //执行后可再次出发下拉到底所触发的事件
        this.$refs.scroll.finishPullUp();
        //重新计算scroll高度  避免出现有数据但是无法下拉的情况
        this.$refs.scroll.scroll.refresh();
      });
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.content {
  height: 475px;
  overflow: hidden;
}
.newTabControl{
    position: fixed;
    left:0;
    right: 0;
    top:44px;
    z-index: 9999;
    background-color: white;
}
/* navbar */
.nav-bar{
    background-color: var(--color-tint);
}
.center{
    color:white;
}
</style>