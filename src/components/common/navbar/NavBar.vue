<!--  -->
<template>
<div class="nav-bar">
<div class="left"><slot name='left'></slot></div>
<div class="center"><slot name='center'></slot></div>
<div class="right"><slot name='right'></slot></div>
</div>
</template>

<script>
export default {
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
.nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    background-color: var(--color-tint);
    text-align: center;
    
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 10;
    margin-bottom: 44px;
}
.left,.right{
    width: 60px;
    /* background-color:aqua; */
}
.center{
    flex:1;
    color: white;
}
</style>