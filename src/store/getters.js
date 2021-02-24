export default {
  isDefault (state) {
    return state.isDefault
  },
  isMini (state) {
    return state.isMini
  },
  isListPlayer (state) {
    return state.isListPlayer
  },
  isPlaying (state) {
    return state.isPlaying
  },
  modeType (state) {
    return state.modeType
  },
  setSongs (state) {
    return state.songs
  },
  currentSong (state) {
    let obj = {
      name: '',
      singer: '',
      picUrl: null,
      url: ''
    }
    if (state.songs.length !== 0) {
      obj = state.songs[state.currentIndex]
    }
    return obj
  },
  currentLyric (state) {
    return state.lyric
  },
  currentIndex (state) {
    return state.currentIndex
  },
  favor (state) {
    return state.favor
  }

}
