import Vue from 'vue'
import VueRouter from 'vue-router'

// 注意点：通过这种方式加载组件，无论组件有没有被用到，都会被加载进来
// import Recommend from '../views/Recommend.vue'
// import Singer from '../views/Singer.vue'
// import Rank from '../views/Rank.vue'
// import Search from '../views/Search.vue'
// 实现vue组件的按需加载
const Recommend = (resolve) => {
  import('../views/Recommend.vue').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer.vue').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank.vue').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search.vue').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('../views/Detail.vue').then((module) => {
    resolve(module)
  })
}
const AlbumDetail = (resolve) => {
  import('../views/albumDetail.vue').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: 'detail/:id',
        component: Detail
      },
      {
        path: 'albumDetail/:id',
        component: AlbumDetail
      }
    ]
  },
  {
    path: '/singer',
    component: Singer

  },
  {
    path: '/rank',
    component: Rank

  },
  {
    path: '/search',
    component: Search

  }
]

const router = new VueRouter({

  routes
})

export default router
