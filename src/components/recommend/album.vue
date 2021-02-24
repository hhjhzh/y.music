<template>
  <div class="album">
    <div class="album-top">
      <h3>推荐专辑</h3>
    </div>
    <div class="album-list">
      <div v-for="value in albums" :key="value.id" class="item" @click="select(value.id)">
        <img v-lazy="value.picUrl">
        <p>{{value.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'album',
  props: {
    albums: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    select (id) {
      this.$emit('selected', id)
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.album-top{
  width: 100%;
  height: 84px;
  line-height: 84px;
  padding: 0 20px;
  @include bg_toolbar_color();
  h3{
    @include font-size($font_large);
    font-weight:bold;
    @include text_toolbar_color();
  }
}
.album-list{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  box-sizing: border-box;
  @include bg_toolbar_color();
  .item{
    width: 200px;
    margin-top: 10px;
    img{
      width: 100%;
      height: 200px;
      border-radius: 20px;
    }
    p{
      @include clamp(2);
      @include font-size($font_medium);
      @include text_toolbar_color();
    }

  }

}

</style>
