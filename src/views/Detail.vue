<template>
  <div class="detail">
    <SubHeader :title="playList.name"></SubHeader>
    <DetailTop :path="playList.coverImgUrl" ref="top"></DetailTop>
    <div class="bottom">
      <scroll ref="scrollView">
        <DetailBottom :tracks="playList.tracks"></DetailBottom>
      </scroll>
    </div>

  </div>
</template>

<script>
import SubHeader from '../components/Detail/SubHeader'
import HomeApis from '../api/index'
import DetailTop from '../components/Detail/DetailTop'
import DetailBottom from '../components/Detail/DetailBottom'
import scroll from '../components/scroll'
export default {
  name: 'Detail',
  components: {
    DetailBottom,
    SubHeader,
    DetailTop,
    scroll
  },
  data: function () {
    return {
      playList: {}
    }
  },
  created () {
    HomeApis.getRecommendList(this.$route.params.id).then((data) => {
      console.log(data)
      this.playList = data.playlist
      console.log(this.playList)
    })
      .catch((err) => {
        console.log(err)
      })
  },

  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scrollView.scrolling((offsetY) => {
      if (offsetY > 0) {
        // 向下滚动图片变大
        const scale = 1 + offsetY / defaultHeight
        // console.log(scale);
        this.$refs.top.$el.style.transform = `scale(${scale})`
      } else {
        // 向上滚动图片变模糊
        const scale = 10 * Math.abs(offsetY) / defaultHeight
        this.$refs.top.$el.style.filter = `blur(${scale}px)`
      }
    })
  }

}
</script>

<style scoped lang="scss">
.detail{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background-color: black;
}
.bottom{
  width: 100%;
  height: 100%;
  padding-top: 500px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
