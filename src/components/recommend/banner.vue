<template>
<!--  swiper的bug,如果数据是从网络上获取的，那么自动轮播到最后一页之后就不轮播了-->
<!--  只需要swiper租金上面加上v-if="数据.length>0"-->

    <swiper  :options="swiperOption" class="banner" v-if="banners.length>0">
      <swiper-slide v-for="value in banners" :key="value.bannerId" class="item">
        <a :href="value.url">
          <img v-lazy="value.pic">
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'banner',
  data () {
    return {
      swiperOption: {
        loop: true, // 循环模式选项

        autoplay: {
          delay: 100// 1秒切换一次
          // stopOnLastSlide: false,//当切换到最后一个slide停止自动切换
          // disableOnInteraction: false,//轮播图中要是用户交互了，就会自动停止轮播-->所以要加上这句

        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }

    }
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }

}
</script>

<style scoped lang="scss">

.banner{
  .item{
    img{
      width: 100%;
      height: 300px;
    }
  }
}

</style>
<style lang="scss">
.swiper-pagination-bullet{
  width: 50px;
  height: 50px;
}

</style>
