<!--  -->
<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
name : 'TabBar',
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

 #tab-bar{
    display: flex;
    justify-content: space-around;
    background-color: #f2f2f2;
   
    position: fixed;
    left: 0;
    right: 0;
    bottom:0;
   
    box-shadow: 0 1px 1px rgba(100, 100, 100, .5);
  }
 
</style>