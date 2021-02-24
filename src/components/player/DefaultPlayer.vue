<template>
  <transition
      :css="false"
      @enter="enter"
      @leave="leave">
    <div class="default-player" v-show="this.isDefault">
      <div class="player-wrapper">
        <player-header ></player-header>
        <player-top></player-top>
        <player-bottom></player-bottom>
      </div>
      <div class="bg-image">
        <img :src="currentSong.picUrl">
      </div>

    </div>
  </transition>

</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerTop from './PlayerTop'
import PlayerBottom from './PlayerBottom'
import { mapGetters, mapActions } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'DefaultPlayer',
  components: { PlayerBottom, PlayerTop, PlayerHeader },
  methods: {
    ...mapActions([
      'setLyric'

    ]),
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 1000 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 1000 }, function () {
        done()
      })
    }
  },
  computed: {
    ...mapGetters([
      'isDefault',
      'currentSong'
    ])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    currentSong (newValue, oldValue) {
      if (newValue.id === undefined) {
        return
      }
      this.setLyric(newValue.id)
    }
  }
}
</script>

<style scoped lang="scss">

.default-player{
  //width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: pink;
  z-index: 1001;
  .bg-image{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    img{
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      filter: blur(10px);
    }
  }
}

</style>
