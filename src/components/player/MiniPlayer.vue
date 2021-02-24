<template>
  <transition
      :css="false"
      @enter="enter"
      @leave="leave">
    <div class="miniPlayer" v-show="this.isMini" >
      <!--  <div class="miniPlayer" v-show="this.$store.state.isMini">-->
      <div class="mini-container">
        <div class="mini-left" @click="selectMini">
          <img :src="currentSong.picUrl">
          <div class="player-title">
            <p>{{currentSong.singer}}</p>
            <p>{{currentSong.name}}</p>
          </div>
        </div>
        <div class="mini-right">
          <span @click="play" ref="play"></span>
          <span ref="more" @click="showList"></span>
        </div>
      </div>

    </div>
  </transition>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'MiniPlayer',

  methods: {
    ...mapActions([
      'setMini',
      'setDefault',
      'setPlaying',
      'setListPlayer'

    ]),
    showList () {
      this.setListPlayer(true)
    },
    selectMini () {
      this.setMini(false)
      this.setDefault(true)
    },
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 1000 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 1000 }, function () {
        done()
      })
    },
    play () {
      this.setPlaying(!this.isPlaying)
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    }

  },

  computed: {
    ...mapGetters([
      'isMini',
      'isPlaying',
      'currentSong'
    ])
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.miniPlayer{
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100001;
  .mini-container{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px;
    box-sizing: border-box;
    //@include bg_toolbar_color();
    background-color: red;

    .mini-left{
      display: flex;
      justify-content: space-between;
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .player-title{
        p{
          @include font-size($font_medium);
          @include text_toolbar_color()

        }
      }

    }
    .mini-right{
      span{
        display: inline-block;
        width: 60px;
        height: 60px;
        &:nth-of-type(1){
          @include bg-image("../../assets/images/pause");
          &.active{
            @include bg-image("../../assets/images/play");
          }
        }
        &:nth-of-type(2){
          @include bg-image("../../assets/images/more")
        }
      }

    }
  }

}

</style>
