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
export default {
  changeMini (state, flag) {
    state.isMini = flag
  },
  [CHANGE_DEFAULT] (state, flag) {
    state.isDefault = flag
  },
  [SET_LIST_PLAYER] (state, flag) {
    state.isListPlayer = flag
  },
  [SET_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_MODE_TYPE] (state, flag) {
    state.modeType = flag
  },
  [SET_SONG] (state, list) {
    state.songs = list
  },
  [SET_LYRIC] (state, lyric) {
    state.lyric = lyric
  },
  [DELETE_SONG] (state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1)
    } else {
      state.songs = []
    };
    if (index < state.currentIndex) {
      state.currentIndex = state.currentIndex - 1
    }
    if (state.songs.length === 0) {
      // 如果全部删除完了，播放界面全部关闭
      state.isMini = false
      state.isDefault = false
      state.isListPlayer = false
    }
  },
  [SET_CURRENT_INDEX] (state, index) {
    if (index < 0) {
      index = state.songs.length - 1
    } else if (index >= state.songs.length) {
      index = 0
    }
    state.currentIndex = index
  },
  [SET_FAVOR] (state, flag) {
    state.favor = flag
  }

}
