<template>
  <div class="goods-item">
      <img :src="goodsItem.show.img" alt="">
      <p class="goods-item-title">{{goodsItem.title}}</p>
      <div class="fontDiv">
          <span class="goods-item-price">￥{{goodsItem.price}}</span>
          <span class="goods-item-cfav">{{goodsItem.cfav}}</span>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
     goodsItem:{
         type : Object,
         default(){
             return {}
         }
     }
  },
  data () {
    return {

    };
  }
}
</script>

<style scoped>
.goods-item{
    width: 50%;
    padding: 4px;
    display: inline-block;
    font-size: 10px;
    text-align: center;
    
}
.goods-item-title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 4px 0 0 4px;
}
/* height   258px */
.goods-item img{
    width: 100%;
    height: 258px;
    border-radius: 4px;
}
.fontDiv{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    margin: 4px 0;
}
.goods-item-price{
    color: deeppink;
}
.goods-item-cfav{
   position: relative;
    
}
.goods-item-cfav::before{
    position: absolute;
    top:-2px;
    left: -16px;
    content:'';
    height: 14px;
    width: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
    margin-bottom: 4px;
}
</style>