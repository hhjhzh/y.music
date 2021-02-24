<template>

  <div class="detailBottom" ref="detailBottom">

      <div class="bottom-top">
        <div class="top-icon" @click="selectAllMusic">
          <img src="../../assets/images/toolbar-it666-account-normal.png">
          <span >播放全部</span>
        </div>
      </div>
      <div class="bottom-list">
        <div v-for="value in tracks" :key="value.id" class="item" @click="selectMusic(value.id)">
          <p >{{value.ar[0].name}}</p>
          <p>{{value.al.name}}</p>

        </div>
      </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    tracks: {
      type: Array,
      required: true,
      default: () => []
    }

  },
  methods: {
    ...mapActions([
      'setDefault',
      'setMini',
      'setSongs',
      'setLyric'
    ]),
    selectMusic (id) {
      // console.log("点击了")
      // this.$store.dispatch("setDefault",true);
      // this.$store.dispatch("setMini",false)
      this.setDefault(true)
      this.setMini(false)
      this.setSongs([id])
    },
    selectAllMusic () {
      this.setDefault(true)
      this.setMini(false)
      const ids = this.tracks.map(function (value, index) {
        return value.id
      })
      this.setSongs(ids)
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.detailBottom{
  width: 100%;
  overflow: hidden;
  @include bg_toolbar_color();
  .bottom-top{
    width: 100%;
    height: 100px;
    padding-left: 20px;
    border-top-left-radius: 50px;
    border-top-right-radius: 40px;
    box-sizing: border-box;
    border: 1px solid black;

  }
  .bottom-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   align-content: center;
    .item{
      width: 100%;
      height: 100px;
      flex-shrink: 0;
      border-bottom: 1px solid black;
      padding-top: 5px;
      padding-left: 20px;
      box-sizing: border-box;
      p{
        @include font-size($font_large);
        @include text_toolbar_color();
      }
    }
  }
}

</style>
