<template>
  <div>
     <nav-bar class="detail-nav-bar">
         <div class="left" slot="left" @click='backClick'>
             <img src="~assets/img/common/back.svg" alt="">
         </div>
         <div class="center" slot="center">
             <div v-for ='(item,index) in titles'  
                  :key='index'
                  :class="{active:currentIndex === index}" 
                  @click = 'titleClick(index)'
                  >
                  {{item}}</div>
         </div>
         </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data () {
    return {
       titles:['商品','参数','评论','推荐'],
       currentIndex : 0
    };
  },components:{
      NavBar
  },methods: {
      backClick(){
          this.$router.back()
      },
      titleClick(index){
          this.currentIndex = index;
      }
  },
}
</script>

<style scoped>
.detail-nav-bar{
    background-color: white;
}
.left img{
    margin-top: 10px;
}
.center{
    display: flex;
    justify-content: space-around;
    font-size: 13px;
}
.active{
    color: var(--color-tint);
}
</style>