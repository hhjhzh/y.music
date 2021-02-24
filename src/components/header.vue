<template>
  <div class="header">
    <div class="header-in">
      <div class="header-left">
        <span></span>
      </div>
      <div class="header-center">
        黄瓜音乐
      </div>
      <div class="header-right">
        <span></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin.scss";
@import "../assets/css/variable.scss";
.header{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .header-in{
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    .header-left{
      span{
        display: inline-block;
        width: 84px;
        height: 84px;
        margin-top: 8px;
        //background: url("../assets/images/toolbar-it666-account-normal.png") no-repeat;
        @include bg-image("../assets/images/logo");

      }

    }
  .header-right{
    span{
      display: inline-block;
      width: 84px;
      height: 84px;
      margin-top: 8px;
      //background: url("../assets/images/toolbar-it666-account-normal.png") no-repeat;
      @include bg-image("../assets/images/account");

    }
  }
    .header-center{
      line-height: 100px;
      font-weight: bold;
      color: white;
      @include font-size($font_medium)
    }

  }
}

</style>
