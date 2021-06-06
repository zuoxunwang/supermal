<!--  -->
<template>
    <tab-bar>
       <tab-bar-item path='/home' activeColor = 'deeppink'>
         <img slot = 'item-icon' src="~assets/img/tabbar/home.svg" alt="">
         <img slot = 'item-icon-active' src="~assets/img/tabbar/home_active.svg" alt="">
         <div slot = "item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path='/category' activeColor = 'deeppink'>
         <img slot = 'item-icon' src="~assets/img/tabbar/category.svg" alt="">
         <img slot = 'item-icon-active' src="~assets/img/tabbar/category_active.svg" alt="">
         <div slot = "item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path='/cart' activeColor = 'deeppink'>
         <img slot = 'item-icon' src="~assets/img/tabbar/shopcart.svg" alt="">
         <img slot = 'item-icon-active' src="~assets/img/tabbar/shopcart_active.svg" alt="">
         <div slot = "item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path='/profile'>
         <img slot = 'item-icon' src="~assets/img/tabbar/profile.svg" alt="">
         <img slot = 'item-icon-active' src="~assets/img/tabbar/profile_active.svg" alt="">
         <div slot = "item-text">我的</div>
       </tab-bar-item>
     </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
components:{
    TabBar,
    TabBarItem,
},
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>