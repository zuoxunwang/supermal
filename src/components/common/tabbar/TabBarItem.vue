<!--  -->
<template>
<div class="tab-bar-item" @click = 'itemClick'>
    <div v-if = '!isActive'><slot name = 'item-icon'></slot></div>
    <div v-else><slot name = 'item-icon-active'></slot></div>
    <div :style="activeStyle" ><slot name = 'item-text'></slot></div>
</div>
</template>

<script>
export default {
    props:{
      path:String,
      activeColor:{
          type:String,
      default:'red'
      },
    },
data() {
return {
    //    isActive:true,
}
},computed:{
  isActive(){
      return this.$route.path.indexOf(this.path) !=-1;
  },
  activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},methods:{
    itemClick(){
        // console.log(this.$route)
        this.$router.push(this.path).catch(err=>{console.log()})
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
 .tab-bar-item{
      text-align: center;
      height: 49px;
      font-size: 14px;
  }


.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top:2px;
    margin-bottom: 2px;
    vertical-align: middle;
} 

</style>