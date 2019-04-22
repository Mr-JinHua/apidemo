import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/Home'], resolve)
    },
    {
      path: '/apidetail',
      name: 'Apidetail',
      component: resolve => require(['@/pages/Apidetail'], resolve),
      children: [
        {
          path: '/apidetail/apimd',
          name: 'Apimd',
          component: resolve => require(['@/components/apidetail/Apimd'], resolve)
        }
      ]
    }
  ]
})
