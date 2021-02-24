<template>
  <div class="toolbar">
    <router-link tag="div" to="/recommend">推荐</router-link>
    <router-link tag="div" to="/singer">歌手</router-link>
    <router-link tag="div" to="/rank">排行</router-link>
    <router-link tag="div" to="/search">搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'toolbar'
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin.scss";
@import "../assets/css/variable.scss";
.toolbar{
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  @include bg_toolbar_color();
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 999;
  div{

    line-height: 88px;

    @include font-size($font_medium);
    @include text_toolbar_color();

    &.router-link-active{
      @include text_toolbar_active_color();
      border-bottom: 5px solid black;
      @include text_toolbar_border_color();
    }

  }
}

</style>
