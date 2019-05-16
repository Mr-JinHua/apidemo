import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/log',
      name: 'Log',
      component: resolve => require(['@/pages/Log'], resolve)
    },
    {
      path: '/process',
      name: 'Process',
      component: resolve => require(['@/pages/process'], resolve),
      children: [
        {
          path: '/process/add',
          name: 'Processadd',
          component: resolve => require(['@/components/process/Processadd'], resolve)
        },
        {
          path: '/process/query',
          name: 'Processquery',
          component: resolve => require(['@/components/process/Processquery'], resolve)
        },
        {
          path: '/process/detail',
          name: 'Processdetail',
          component: resolve => require(['@/components/process/Processdetail'], resolve)
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/Home'], resolve)
    },
    {
      path: '/api',
      name: 'api',
      component: resolve => require(['@/pages/Api'], resolve)
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
        },
        {
          path: '/apidetail/write',
          name: 'Write',
          component: resolve => require(['@/components/apidetail/Write'], resolve)
        }
      ]
    }
  ]
})
