<template>
<div class="player">
  <default-player></default-player>
  <mini-player @show-list="showList" ref="miniPlayer"></mini-player>
      <list-player ref="listPlayer"></list-player>

  <audio :src="currentSong.url" ref="audio" autoplay>

  </audio>
</div>
</template>

<script>
import defaultPlayer from '../components/player/DefaultPlayer'
import MiniPlayer from '../components/player/MiniPlayer'
import ListPlayer from '@/components/player/ListPlayer'

import { mapGetters } from 'vuex'

export default {
  name: 'Player',

  components: {

    ListPlayer,
    MiniPlayer,
    defaultPlayer
  },
  methods: {
    showList () {
      this.$refs.listPlayer.isShow = 'true'
    }
  },
  computed: {
    ...mapGetters([
      'currentSong',
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        console.log('音乐暂停')
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    }
  },
  mounted () {
    this.duration = this.$refs.audio.duration
    console.log(this.duration)
  },
  data: function () {
    return {
      duration: 0
    }
  }

}
</script>

<style scoped lang="scss">

</style>
