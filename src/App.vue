<template>
  <div id="app">
    <Header></Header>
    <Toolbar></Toolbar>
    <router-view></router-view>
    <player></player>
    <div class="theme">
      <div class="theme1" @click="myFn1('theme1')"></div>
      <div class="theme2" @click="myFn1('theme2')"></div>
      <div class="theme3" @click="myFn1('theme3')"></div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import Toolbar from '@/components/toolbar'
import Player from './views/Player'

export default {
  name: 'App',
  methods: {
    myFn1 (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  },
  components: {
    Toolbar,
    Header: Header,
    Player
  }
}
</script>

<style scoped lang="scss">
#app{
  width: 100%;
  height: 100%;
  .theme{
    display: flex;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    div{
      width: 100px;
      height: 100px;
    }
    .theme1{
      background-color: red;
    }
    .theme2{
      background-color: green;
    }
    .theme3{
      background-color: black;
    }
  }
}

</style>
