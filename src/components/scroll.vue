<template>
  <div id="wrapper" ref="wrapper">
   <slot></slot>
  </div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'

export default {
  name: 'scroll',
  mounted () {
    this.iscroll = new Iscroll(this.$refs.wrapper, {
      mouseWheel: false,
      scrollbars: false,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
      // 像素级的触发
      probeType: 3
    })
    // setTimeout(()=>{
    //   console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh();
    //   console.log(this.iscroll.maxScrollY)
    //
    // },4000)
    // 1.创建一个观察者对象
    // eslint-disable-next-line no-unused-vars
    const observer = new MutationObserver((mutationList, observer) => {
      // console.log(mutationList)
      console.log(this.iscroll.maxScrollY)
      this.iscroll.refresh()
      console.log(this.iscroll.maxScrollY)
    })
    // 2.告诉观察者对象我们需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化
      subtree: true, // 默认为False,设置为true,可以观察后代节点
      attributeFilter: ['height', 'offsetHeight']// 观察特定属性
      // attributeOldValue:true,//观察attributes变动时，是否需要记录变动前的属性值
      // characterDataOldValue:true,//观察characterData变动时，是否需要记录变动前的值

    }
    // 3.告诉观察者对象，我们需要观察谁，需要观察什么内容
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动距离的方法给外界使用
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    },
    refreshing () {
      setTimeout(() => {
        this.iscroll.refresh()
      }, 1000)
    }
  }

}
</script>

<style scoped lang="scss">
#wrapper{
  width: 100%;
  height: 100%;

}

</style>
