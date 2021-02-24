[TOC]

# 一、推荐界面效果图

![](./recommend.png)

* 使用iScroll实现手指拖动界面上下滚动，使用swiper实现轮播图，使用axios从后台获取数据并渲染

# 二、歌单详情界面效果图

![](./detail.png)

* 手指向下滑动，图片变大

* 手指向上滑动，图片变小并变模糊

# 三、播放界面效果图
## 1. 默认播放界面

![](./defaultPlayer.png)

* 实现歌曲的暂停、播放、上一首、下一首、切换播放模式

## 2. 列表播放器界面

![](./listPlayer.png)

* 实现歌曲的播放、暂停、删除、全部删除、切换播放模式

## 3. 迷你播放器界面
![](./miniPlayer.png)

* 实现歌曲的播放、暂停、切换播放模式

# 四、 技术点

* 采用scss预处理器

* 利用rem+视口缩放的方式适配移动端

* 借助postss-pxtorem实现自动将px转换为rem

* 借助webpack实现CSS3/ES678语法的兼容

* 借助fastclick解决移动端100-300ms的点击延迟问题

* 实现组件的按需加载

* 借助vue-lazyload实现图片的懒加载

* 使用vue-router 切换组件

* 采用vuex共享数据，实现播放图标同步、播放模式同步

* 采用velocity实现界面切换效果

* 采用axios获取后台数据

  

