<!--  -->
<template>
<div class="recommend-view">
    <div class="rv-item" v-for='(item,index) in recommends' :key='index'>
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    }
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
.recommend-view{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 6px 0 16px;
    border-bottom: 8px solid #eee;
}
.rv-item{
    flex: 1;
}
.rv-item img{
    width: 80%;
    margin: 10px 0 6px;
}
</style>