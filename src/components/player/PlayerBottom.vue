<template>
  <div class="player-bottom">
    <div class="bottom-top">
      <div class="player-curTime">
        <span>00:00</span>
      </div>
      <div class="player-progress">
        <div class="player-line">
          <div class="player-dot"></div>
        </div>
      </div>
      <div class="player-duration">
        <span>04:08</span>
      </div>
    </div>
    <div class="bottom-bottom">
     <span class="modeType loop" @click="isModeType" ref="modeType"></span>
      <span class="prev" @click="prevSong"></span>
      <span class="play" @click="playing" ref="play"></span>
      <span class="next" @click="nextSong"></span>
      <span class="favor" @click="isFavor" ref="favor"></span>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mode from '../../store/modeType'
export default {
  name: 'PlayerBottom',
  methods: {
    ...mapActions([
      'setPlaying',
      'setModeType',
      'setCurrentIndex',
      'setFavor'
    ]),
    playing () {
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
    prevSong () {
      this.setCurrentIndex(this.currentIndex - 1)
      this.setPlaying(false)
    },
    nextSong () {
      this.setCurrentIndex(this.currentIndex + 1)
      this.setPlaying(false)
    },
    isFavor () {
      this.setFavor(!this.favor)
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'modeType',
      'currentIndex',
      'setSongs',
      'favor'
    ])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isPlaying (newValue, oldValue) {
      // 说明值有修改
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    // eslint-disable-next-line no-unused-vars
    modeType (newValue, oldValue) {
      // 说明值有修改
      if (newValue === mode.loop) {
        this.$refs.modeType.classList.remove('random')
        this.$refs.modeType.classList.add('loop')
      } else if (newValue === mode.one) {
        this.$refs.modeType.classList.remove('loop')
        this.$refs.modeType.classList.add('one')
      } else {
        this.$refs.modeType.classList.remove('one')
        this.$refs.modeType.classList.add('random')
      }
    },
    favor (newValue, oldValue) {
      if (newValue) {
        this.$refs.favor.classList.add('active')
      } else {
        this.$refs.favor.classList.remove('active')
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.player-bottom{
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  .bottom-top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
    .player-curTime,player-duration{
      @include font-size($font_small);
      @include text_toolbar_color();

    }
    .player-progress{
      width: 500px;
      height: 10px;
      background-color: white;
      position: relative;

      .player-line{
        width: 100px;
        height: 10px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
        .player-dot{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .bottom-bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 70px;
    padding-right: 70px;
    box-sizing: border-box;
    span{
      display: inline-block;
      width: 54px;
      height: 54px;
      &:nth-of-type(1){
        &.loop{
          @include bg-image("../../assets/images/loop")
        }
        &.one{
          @include bg-image("../../assets/images/one")
        }
        &.random{
          @include bg-image("../../assets/images/shuffle")
        }

      }
      &:nth-of-type(2){
        @include bg-image("../../assets/images/prev")
      }
      &:nth-of-type(3){
        @include bg-image("../../assets/images/pause");
        &.active{
          @include bg-image("../../assets/images/play");
        }
      }
      &:nth-of-type(4){
        @include bg-image("../../assets/images/next")
      }
      &:nth-of-type(5){
        @include bg-image("../../assets/images/un_favorite");
        &.active{
          @include bg-image("../../assets/images/favorite");
        }
      }

    }

  }

}
</style>
