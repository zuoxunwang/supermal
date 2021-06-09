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
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
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
}
.center{
    flex:1;
}
</style>