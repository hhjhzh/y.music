<template>
  <div class="recommend">
    <scroll>
      <div>
        <Banner :banners="banners"></Banner>
        <recommend :recommends="recommends" @selected="fatherSelectItem">

        </recommend>
        <album :albums="albums" @selected="fatherSelectAlbumItem"></album>
        <mv :mv="mv"></mv>
      </div>

    </scroll>
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import HomeApis from '../api/index'
import Banner from '../components/recommend/banner'
import recommend from '../components/recommend/HomeRecommend'
import album from '../components/recommend/album'
import mv from '../components/recommend/mv'
import scroll from '../components/scroll'
import Detail from './Detail'
import AlbumDetail from '../views/albumDetail'

export default {
  name: 'Recommend',
  data: function () {
    return {
      banners: [],
      recommends: [],
      albums: [],
      mv: []
    }
  },
  methods: {
    fatherSelectItem: function (id) {
      this.$router.push({
        path: `/recommend/detail/${id}`
      })
    },
    fatherSelectAlbumItem: function (id) {
      this.$router.push({
        path: `/recommend/albumDetail/${id}`
      })
    }

  },

  created () {
    HomeApis.getHomeBanner().then((data) => {
      // console.log(data);
      this.banners = data.banners
      // console.log(this.banners)
    })
      .catch(function (err) {
        console.log(err)
      })

    HomeApis.getHomeRecommend().then((data) => {
      // console.log(data);
      this.recommends = data.result
      // console.log(this.recommends)
    })
      .catch(function (err) {
        console.log(err)
      })

    HomeApis.getHomeAlbum().then((data) => {
      // console.log(data);
      this.albums = data.weekData.slice(0, 6)
      // console.log(this.albums)
    })
      .catch(function (err) {
        console.log(err)
      })

    HomeApis.getHomeMV().then((data) => {
      // console.log(data);
      this.mv = data.result
      // console.log(this.mv)
    })
      .catch(function (err) {
        console.log(err)
      })
  },

  components: {
    Banner,
    recommend,
    album,
    mv,
    scroll,
    // eslint-disable-next-line vue/no-unused-components
    Detail,
    // eslint-disable-next-line vue/no-unused-components
    AlbumDetail

  }

}
</script>

<style scoped lang="scss">
.recommend{
  width: 100%;
  height: 100%;
  padding-top: 188px;
  box-sizing: border-box;

}
.v-enter{
  transform: translateX(100%);

}
.v-enter-active{
  transition: transform 3s;
}
.v-enter-to{
  transform: translateX(0%);
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-active{
  transition: transform 3s;
}
.v-leave-to{
  transform: translateX(100%);
}

</style>
