import Vue from 'vue'
import Router from 'vue-router'
import zhihu from '@/pages/zhihu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhihu',
      component: zhihu
    }
  ]
})
