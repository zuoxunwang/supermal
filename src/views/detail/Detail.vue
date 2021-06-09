<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="content" ref = 'scroll'>
    <detail-swiper :topImages = 'topImages'  />
    <detail-base-info :goods = 'goods' />
    <detail-shop-info :shop= 'shop'/>
    <detail-goods-info :detail-info = 'detailInfo' @imageLoad = 'imageLoad' />
    <detail-param-info :param-info= 'paramInfo' />
    </scroll>
  </div>
</template>

<script>
//scroll组件引入
import Scroll from 'components/common/scroll/Scroll'

//网络请求detail数据
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'

//头部导航子组件
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'
import DetailGoodsInfo from './childrenComps/DetailGoodsInfo'
import DetailParamInfo from './childrenComps/DetailParamInfo'
export default {
  name: 'Detail',
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo : {},
      paramInfo : {},
    };
  },components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  created(){
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then((res)=>{
          const data = res.data.result
          console.log(data)
          //1.获取顶部轮播图信息
          this.topImages = data.itemInfo.topImages
          //2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          // 3.创建店铺信息的对象
          this.shop = new Shop(data.shopInfo)
          // 4.获取商品详细信息
          this.detailInfo = data.detailInfo
            // 5.获取参数的信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
  },methods: {
      imageLoad(){
        this.$refs.scroll.scroll.refresh()
      }
  },
}
</script>

<style scoped>
.detail{
    padding-top: 44px;
    position: relative;
    z-index: 10;
    background-color: white;
    height: 100vh;
}
/* scroll */
.content{
    height: calc(100% - 44px);
}
</style>