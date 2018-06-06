import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Root from '@/pages/root/root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/root',
      name: 'Root',
      component: Root,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: '首页',
          component: r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
        },
        {
          path: '/base',
          name: '基础管理',
          component: r => require.ensure([], () => r(require('../pages/baseManage/base.vue')), 'base')
        },
        {
          path: '/device',
          name: '设备管理',
          component: r => require.ensure([], () => r(require('../pages/deviceManage/device.vue')), 'device')
        },
        {
          path: '/operation',
          name: '运维中心',
          component: r => require.ensure([], () => r(require('../pages/operationManage/operation.vue')), 'operation')
        },
        {
          path: '/finance',
          name: '财务管理',
          component: r => require.ensure([], () => r(require('../pages/financeManage/finance.vue')), 'finance')
        },
        {
          path: '/storehouse',
          name: '仓库管理',
          component: r => require.ensure([], () => r(require('../pages/storehouseManage/storehouse.vue')), 'storehouse')
        },
        {
          path: '/visitor',
          name: '访客管理',
          component: r => require.ensure([], () => r(require('../pages/visitorManage/visitor.vue')), 'visitor')
        }
      ]
    }
  ]
})
