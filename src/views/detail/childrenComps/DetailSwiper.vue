<template>
<div >
  <swiper class="detail-swiper" v-if = 'topImages.length'>
      <swiper-item v-for="(item,index) in topImages" :key='index' >
          <img :src="item" alt="">
      </swiper-item>
  </swiper>

</div>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'detailSwiper',
  props:{
     topImages :{
         type : Array,
         default(){
             return []
         }
     }
  },
  data () {
    return {
      
    };
  },components:{
      Swiper,
      SwiperItem
  }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
.detail-swiper img{
    height: 300px;
}
</style>