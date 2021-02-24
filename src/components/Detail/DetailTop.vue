<template>
  <div class="detailTop" >
    <div class="detaiImage">
      <img :src="path">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      default: () => '',
      required: true
    }

  }

}
</script>

<style scoped lang="scss">
.detailTop{
  width: 100%;
  height: 500px;
  margin-top: 100px;
  overflow: hidden;
  .detaiImage{
    width: 100%;
    img{
      width: 100%;
    }
  }
}

</style>
