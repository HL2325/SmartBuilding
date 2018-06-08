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
          component: r => require.ensure([], () => r(require('../pages/baseManage/base.vue')), 'base'),
          children: [
            {
              path: 'gardenlst',
              name: '园区列表',
              component: r => require.ensure([], () => r(require('../pages/baseManage/gardenSet/gardenList.vue')), 'base'),
            },
            {
              path: 'gardenset',
              name: '园区配置',
              component: r => require.ensure([], () => r(require('../pages/baseManage/gardenSet/gardenSet.vue')), 'base')
            },
            {
              path: 'roleset',
              name: '角色权限配置',
              component: r => require.ensure([], () => r(require('../pages/baseManage/roleSet/rolePermission.vue')), 'base')
            },
            {
              path: 'districlst',
              name: '区域列表',
              component: r => require.ensure([], () => r(require('../pages/baseManage/districtSet/districtList.vue')), 'base')
            },
            {
              path: 'storelst',
              name: '仓库列表',
              component: r => require.ensure([], () => r(require('../pages/baseManage/storeSet/storeList.vue')), 'base')
            },
            {
              path: 'companylist',
              name: '企业列表',
              component: r => require.ensure([], () => r(require('../pages/baseManage/companyAdmin/companyList.vue')), 'base')
            },
            {
              path: 'stafflst',
              name: '员工列表',
              component: r => require.ensure([], () => r(require('../pages/baseManage/companyAdmin/companyList.vue')), 'base')
            },
            {
              path: 'workplan',
              name: '计划制定',
              component: r => require.ensure([], () => r(require('../pages/baseManage/workorderSet/workingPlan.vue')), 'base')
            },
            {
              path: 'noticout',
              name: '发布公告',
              component: r => require.ensure([], () => r(require('../pages/baseManage/noticeSet/noticOut.vue')), 'base')
            }
          ]
        },
        {
          path: '/device',
          name: '设备管理',
          component: r => require.ensure([], () => r(require('../pages/deviceManage/device.vue')), 'device'),
          children: [
            {
              path: 'devicetype',
              name: '设备类型',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/deviceSet/deviceType.vue')), 'device'),
            },
            {
              path: 'devicelst',
              name: '设备列表',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/deviceSet/deviceList.vue')), 'device'),
            },
            {
              path: 'energydev',
              name: '能耗',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/devicemonitor/energydev.vue')), 'device'),
            },
            {
              path: 'securitydev',
              name: '安防',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/devicemonitor/securitydev.vue')), 'device'),
            },
            {
              path: 'environdev',
              name: '环境',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/devicemonitor/environdev.vue')), 'device'),
            },
            {
              path: 'electricdev',
              name: '电器',
              component: r => require.ensure([], () => r(require('../pages/deviceManage/devicemonitor/electricdev.vue')), 'device'),
            }
          ]
        },
        {
          path: '/operation',
          name: '运维中心',
          component: r => require.ensure([], () => r(require('../pages/operationManage/operation.vue')), 'operation'),
          children: [
            {
              path: 'maintain',
              name: '维修工单',
              component: r => require.ensure([], () => r(require('../pages/operationManage/workhandle/maintain.vue')), 'operation'),
            },
            {
              path: 'cleankeeping',
              name: '保洁工单',
              component: r => require.ensure([], () => r(require('../pages/operationManage/workhandle/cleankeeping.vue')), 'operation'),
            },
            {
              path: 'upkeep',
              name: '保养工单',
              component: r => require.ensure([], () => r(require('../pages/operationManage/workhandle/upkeep.vue')), 'operation'),        
            },
            {
              path: 'polling',
              name: '巡检工单',
              component: r => require.ensure([], () => r(require('../pages/operationManage/workhandle/polling.vue')), 'operation'),         
            },
            {
              path: 'cleankeeplan',
              name: '保洁计划',
              component: r => require.ensure([], () => r(require('../pages/operationManage/operationplan/cleankeeplan.vue')), 'operation'),         
            },
            {
              path: 'upkeepplan',
              name: '保养计划',
              component: r => require.ensure([], () => r(require('../pages/operationManage/operationplan/upkeepplan.vue')), 'operation'),
            },
            {
              path: 'pollingplan',
              name: '巡检计划',
              component: r => require.ensure([], () => r(require('../pages/operationManage/operationplan/pollingplan.vue')), 'operation'),         
            }
          ]
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
