import {
  CHANGE_DEFAULT,
  SET_PLAYING,
  SET_MODE_TYPE,
  SET_SONG,
  SET_LYRIC,
  DELETE_SONG,
  SET_LIST_PLAYER,
  SET_CURRENT_INDEX,
  SET_FAVOR
} from './mutations-type'
import HomeApis from '../api/index'
export default {
  setMini ({ commit }, flag) {
    commit('changeMini', flag)
  },
  // setDefault({commit},flag){
  //     commit('changeDefault',flag);
  // }
  setDefault ({ commit }, flag) {
    commit(CHANGE_DEFAULT, flag)
  },
  setListPlayer ({ commit }, flag) {
    commit(SET_LIST_PLAYER, flag)
  },
  setPlaying ({ commit }, flag) {
    commit(SET_PLAYING, flag)
  },
  setModeType ({ commit }, flag) {
    commit(SET_MODE_TYPE, flag)
  },
  async setSongs ({ commit }, ids) {
    const result = await HomeApis.getSongDetail({ ids: ids.join(',') })
    const urls = await HomeApis.getSongUrl({ id: ids.join(',') })
    const songs = result.songs
    const list = []
    // eslint-disable-next-line no-unused-vars
    songs.forEach(function (song, index) {
      const obj = {}
      let singer
      song.ar.forEach(function (artist, index) {
        if (index === 0) {
          singer = artist.name
        } else {
          singer += '-' + artist.name
        }
      })
      obj.index = index
      obj.favor = false
      obj.url = urls.data[index].url
      obj.id = song.id
      obj.singer = singer
      obj.name = song.name
      obj.picUrl = song.al.picUrl
      list.push(obj)
    })

    commit(SET_SONG, list)
  },
  async setLyric ({ commit }, id) {
    let result = await HomeApis.getLyricDetail({ id: id })
    result = parseLyric(result.lrc.lyric)
    commit(SET_LYRIC, result)
  },
  deleteSong ({ commit }, index) {
    commit(DELETE_SONG, index)
  },
  setCurrentIndex ({ commit }, index) {
    commit(SET_CURRENT_INDEX, index)
  },
  setFavor ({ commit }, flag) {
    commit(SET_FAVOR, flag)
  }

}
// 格式化歌词方法
function parseLyric (lrc) {
  const lyrics = lrc.split('\n')
  // [00:00.000] 作曲 : 林俊杰
  // 1.定义正则表达式提取[00:00.000]
  const reg1 = /\[\d*:\d*\.\d*\]/g
  // 2.定义正则表达式提取 [00
  const reg2 = /\[\d*/i
  // 3.定义正则表达式提取 :00

  const reg3 = /\:\d*/i
  // 4.定义对象保存处理好的歌词
  const lyricObj = {}
  lyrics.forEach(function (lyric) {
    // 1.提取时间
    let timeStr = lyric.match(reg1)
    if (!timeStr) { return }
    timeStr = timeStr[0]
    // 2.提取分钟
    const minStr = timeStr.match(reg2)[0].substr(1)
    // 3.提取秒钟
    const secondStr = timeStr.match(reg3)[0].substr(1)
    // 4.合并时间, 将分钟和秒钟都合并为秒钟
    const time = parseInt(minStr) * 60 + parseInt(secondStr)
    // 5.处理歌词
    const text = lyric.replace(reg1, '').trim()
    // 6.保存数据
    lyricObj[time] = text
  })
  return lyricObj
}
