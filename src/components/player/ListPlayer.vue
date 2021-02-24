<template>

  <transition v-bind:css="false"
  @enter="enter"
  @leave="leave">
    <div class="list-player" v-show="isListPlayer">
      <div class="list-top">
        <div class="left">
          <i @click="isModeType" ref="modeType" class="modeType loop"></i>
          <span ref="modeText">循环播放</span>
        </div>
        <div class="right">
          <i class="myDeleteAll" @click="deletedAll"></i>
        </div>
      </div>
      <div class="bottom">
        <Scroll ref="scroll">
          <ul class="list-bottom" ref="play">
            <li v-for="(value,index) in setSongs" :key="value.id" @click="selectMusic(value.id,index)">
              <div class="left">
                <i  @click="play" v-show="currentIndex===index"></i>
                <span>{{value.name}}</span>
              </div>
              <div class="right">
                <i class="favor"></i>
                <i @click.stop="myDelete(index)"></i>
              </div>

            </li>
          </ul>
        </Scroll>
      </div>

      <div class="close" @click="hideList">关闭</div>
    </div>

  </transition>

</template>

<script>
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapGetters, mapActions } from 'vuex'
import mode from '../../store/modeType'
import Scroll from '@/components/scroll'

export default {
  name: 'ListPlayer',
  components: { Scroll },
  methods: {
    hideList () {
      this.setListPlayer(false)
    },
    play () {
      this.setPlaying(!this.isPlaying)
    },
    isModeType () {
      if (this.modeType === mode.loop) {
        this.setModeType(mode.one)
      } else if (this.modeType === mode.one) {
        this.setModeType(mode.random)
      } else {
        this.setModeType(mode.loop)
      }
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
    myDelete (index) {
      this.deleteSong(index)
    },
    deletedAll () {
      this.deleteSong()
    },
    selectMusic (id, index) {
      this.setListPlayer(false)
      this.setMini(false)
      this.setDefault(true)
      this.setCurrentIndex(index)
    },
    ...mapActions([
      'setPlaying',
      'setModeType',
      'setListPlayer',
      'deleteSong',
      'setMini',
      'setDefault',
      'setCurrentIndex'
    ])
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'modeType',
      'setSongs',
      'isListPlayer',
      'currentIndex',
      'isListPlayer'

    ])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    // eslint-disable-next-line no-unused-vars
    modeType (newValue, oldValue) {
      if (newValue === mode.loop) {
        this.$refs.modeType.classList.remove('random')
        this.$refs.modeType.classList.add('loop')
        this.$refs.modeText.innerHTML = '循环播放'
      } else if (newValue === mode.one) {
        this.$refs.modeType.classList.remove('loop')
        this.$refs.modeType.classList.add('one')
        this.$refs.modeText.innerHTML = '单曲循环'
      } else {
        this.$refs.modeType.classList.remove('one')
        this.$refs.modeType.classList.add('random')
        this.$refs.modeText.innerHTML = '随机播放'
      }
    },
    isListPlayer (newValue, oldValue) {
      if (newValue) {
        this.$refs.scroll.refreshing()
      }
    }

  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.bottom{
  width: 100%;
  height: 500px;
  position: fixed;
  left: 0;
  bottom: 100px;
  overflow: hidden;
}
.list-player{
  width: 100%;
  height: 700px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:100002;
  background-color: white;
  .list-top{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    background-color: white;
    .left{
      i{
        width: 68px;
        height: 68px;
        display: inline-block;
        position: relative;
        top: 16px;
        &.loop{
          @include bg-image("../../assets/images/small_loop");
        }
        &.one{
          @include bg-image("../../assets/images/small_one");
        }
        &.random{
          @include bg-image("../../assets/images/small_shuffle");
        }

      }
    }
    .right{

      i{
        width: 68px;
        height: 68px;
        display: inline-block;
        position: relative;
        top: 16px;
        @include bg-image("../../assets/images/small_del")
      }
    }
  }
  ul{
    width: 100%;
    &.active{
      li{
        .left{
          i{
            @include bg-image("../../assets/images/small_play");
          }
        }
      }

    }
    li{
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 0 10px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0,0,0,0.5);
      background-color: white;

      i{
        width: 68px;
        height: 68px;
        display: inline-block;
        position: relative;
        top: 16px;

      }
      span{
        line-height: 100px;
        margin-left: 10px;
      }
      .left,.right{
        height: 100%;
      }

        .left{
          i{
            @include bg-image("../../assets/images/small_pause");
          }
        }
        .right{
          i{
            &:nth-of-type(1){
              @include bg-image("../../assets/images/small_un_favorite")
            }
            &:nth-of-type(2){
              @include bg-image("../../assets/images/small_close")
            }

          }
        }

    }
  }
  .close{
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: red;
    text-align: center;
    line-height: 100px;
  }
}
</style>
