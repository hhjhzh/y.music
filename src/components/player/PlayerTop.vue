<template>

  <swiper :options="swiperOption" class="player-top">
    <swiper-slide>
      <div class="player-default">
        <div class="player-circle">
          <div class="player-circle-small active" ref="circle">
            <img :src="currentSong.picUrl">
          </div>
        </div>
        <p>{{currentLyric["0"]}}</p>

      </div>
    </swiper-slide>
    <swiper-slide>
      <scroll>
        <div class="player-container">
          <ul>
            <li v-for="(value,index) in currentLyric" :key="index">
              {{value}}
            </li>

          </ul>
        </div>
      </scroll>

    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

</template>

<script>

// import style (>= Swiper 6.x)
import 'swiper/dist/css/swiper.css'// 根据实际路径和文件修改
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import scroll from '../scroll'

export default {

  name: 'PlayerTop',
  data () {
    return {
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }

    }
  },

  components: {
    Swiper,
    SwiperSlide,
    scroll
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong',
      'currentLyric'
    ])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.circle.classList.remove('active')
      } else {
        this.$refs.circle.classList.add('active')
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.player-top{
  //width: 100%;
  //height: 800px;
  //background-color: pink;
  //padding: 20px 140px 0px 140px;
  //box-sizing: border-box;
  position: fixed;
  top: 80px;
  bottom: 150px;
  left: 0;
  right: 0;
  z-index: 10000;
  .player-default{
    width: 100%;
    height: 1100px;
    //background-color: purple;
    padding-top: 50px;
    box-sizing: border-box;
    .player-circle{
      width: 500px;
      height: 500px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.3);
      position: relative;
      margin-left: 125px;

      .player-circle-small{
        width: 450px;
        height: 450px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.3);
        margin-left: 25px;
        margin-top: 25px;
        //position: absolute;
        //left: 50%;
        //top: 50%;
        //transform: translateX(-50%) translateY(-50%);
        animation: sport 3s linear infinite;
        animation-play-state: paused;
        &.active{
          animation-play-state: running;
        }
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    p{
      margin-top: 50px;
      text-align: center;
      @include font-size($font_small);
    }
  }
  .player-container{
    width: 100%;
    //background-color: black;
    ul{
      width: 100%;
      li{
        width: 100%;
        line-height: 88px;
        text-align: center;
        color: rgba(0,0,0,0.8);
        @include font-size($font_medium);
        &:nth-of-type(1){
          color: white;
        }
      }
    }
  }

}
@keyframes sport {
  from{
    transform: rotate(0deg);

  }
  to{
    transform: rotate(360deg);
  }

}

</style>
<style lang="scss">
.my-bullet{
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  margin-right: 20px;
}
  .my-bullet-active{
    width: 100px;
    border-radius: 10px;
    background-color: red;

  }

</style>
