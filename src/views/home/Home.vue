<!--  -->
<template>
  <div id="home" class="wrapper">
    <nav-bar><div slot="center">购物街</div></nav-bar>
   <scroll class="content" 
           ref = 'scroll' 
           :probe-type='3'
           :pull-up-load = 'true'
           @moreData = 'moreData' 
           @scrollToTop = "scrollToTop"
           
           >
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" 
                :titles="['流行', '新款', '精选']"
                @tabClick = tabClick />
    <goods-list :goods ='showGoods'/>
    </scroll>
    <back-top @click.native = 'backTop' v-show = 'backTopIsShow' />
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
  </div>
</template>

<script>
//home业务组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

//公共组件
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'


//数据请求
import {getHomeMultiData,getHomeGoods} from 'network/home'




export default {
name : 'Home',
components:{
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
   banners :[],
   recommends : [],
   goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]}
   },
   currentType : 'pop',
   backTopIsShow : false,
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    //home数据multidata
    this.getHomeMultiData()
   //home数据goods
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
},
computed: {
    //html里别写太长的属性  转换为计算属性
  showGoods(){
      return this.goods[this.currentType].list
  }
},methods: {
    //子传父接收到Scroll组件传过来的信息 然后调用请求函数
    moreData(){
      this.getHomeGoods(this.currentType)
    },
    scrollToTop(position){
        //下拉大于1000 显示锚点
      this.backTopIsShow = -position.y > 1000
    },
    backTop(){
        // 正常方法
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        // 在scroll里封装方法scrollTo(x,y,time=500)
           this.$refs.scroll.scrollTo(0,0)
    },
     /*
     * 事件监听相关方法
     */ 
    tabClick(index){
        switch (index) {
            case 0:
                this.currentType = 'pop';
                break;
            case 1:
                this.currentType = 'new';
                break;
            case 2:
                this.currentType = 'sell';
                break;
            default:
                break;
        }
    },
    /*
     * 网络请求相关方法
     */ 
    //multidata
    getHomeMultiData(){
        getHomeMultiData().then(res=>{
            this.banners = res.data.data.banner.list
            this.recommends = res.data.data.recommend.list
            console.log(res.data.data)
          })
},  //goods
    getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.data.list)
            this.goods[type].page +=1;
            console.log(this.goods[type])
            //执行后可再次出发下拉到底所触发的事件
            this.$refs.scroll.finishPullUp()
            //重新计算scroll高度  避免出现有数据但是无法下拉的情况
            this.$refs.scroll.scroll.refresh()
        })
    }
},
}
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.content{
    /* height: calc(100% - 93px); */
    height: 475px;
    overflow: hidden;
}
</style>