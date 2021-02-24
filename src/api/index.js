import NJHttp from './network'
class HomeApis {
  static getHomeBanner () {
    return NJHttp.get('/banner', { type: 2 })
  }

    static getHomeRecommend=() => {
      return NJHttp.get('/personalized', { offset: 0, limit: 6 })
    }

    static getHomeExclusive=() => {
      return NJHttp.get('/personalized/privatecontent')
    }

    static getHomeAlbum=() => {
      return NJHttp.get('/top/album', { offset: 0, limit: 6 })
    }

    static getHomeMV=() => {
      return NJHttp.get('/personalized/mv')
    }

    static getHomeDJ=() => {
      return NJHttp.get('/personalized/djprogram')
    }

    static getHomeHotDetail=() => {
      return NJHttp.get('/search/hot/detail')
    }

    static getHomeSearchSuggest=(keywords) => {
      return NJHttp.get('/search/suggest?keywords=' + keywords + '&type=mobile')
    }

    static getRecommendList=(id) => {
      return NJHttp.get('/playlist/detail?id=' + id)
    }

    static getAlbumList=(id) => {
      return NJHttp.get('/album?id=' + id)
    }

    static getSongDetail=(ids) => {
      return NJHttp.get('/song/detail?', ids)
    }

    static getLyricDetail=(ids) => {
      return NJHttp.get('/lyric?', ids)
    }

    static getSongUrl=(ids) => {
      return NJHttp.get('/song/url?', ids)
    }
}
export default HomeApis
