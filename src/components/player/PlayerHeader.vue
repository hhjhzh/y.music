<template>
  <div class="player-header">
    <span @click="showMini"></span>
    <div class="song-name">
      <p>{{currentSong.name}}</p>
      <p>{{currentSong.singer}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerHeader',
  methods: {
    showMini () {
      this.$store.dispatch('setMini', true)
      this.$store.dispatch('setDefault', false)
    }
  },
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.player-header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 10000;
  span{
    display: inline-block;
    width: 54px;
    height: 54px;
    @include bg-image("../../assets/images/down");
    margin-top: 13px;
  }
.song-name{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  @include font-size($font_medium);
  @include text_toolbar_color();
  @include font-size($font_small)

}

}

</style>
