/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import UserAgreement from '@/components/UserAgreement'
import Order from '@/components/Order'
import BecomeDelegate from '@/components/BecomeDelegate'
import RelationshipSearch from '@/components/RelationshipSearch'
import RecommendDelegate from '@/components/RecommendDelegate'
import RecommendDelegateDetail from '@/components/RecommendDelegateDetail'
import TableViewController from '@/components/TableViewController'
import ChargeRecord from '@/components/ChargeRecord'
import TodayCharge from '@/components/TodayCharge'
import CanBalance from '@/components/CanBalance'
import WaterRecord from '@/components/WaterRecord'
import Message from '@/components/Message'
import DelegateList from '@/components/DelegateList'
import FinalDelegateList from '@/components/FinalDelegateList'
import ShareLink from '@/components/ShareLink'
import Charge from '@/components/Charge'
import Download from '@/components/Download'
import ChargeDetail from '@/components/ChargeDetail'
import ChargeGoldDetail from '@/components/ChargeGoldDetail'
import UserManager from '@/components/UserManager'
import UserManagerDetail from '@/components/UserManagerDetail'
import TestMessage from '@/components/TestMessage'

// UserManager
import {getToken, setToken} from '@/utils/util'

Vue.use(Router)
Router.prototype.back = function () {
  this.isBack = true
  window.history.go(-1)
}

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  // base:'/agent/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },

    {
      path: '/agreement',
      name: 'Agreenemnt',
      component: UserAgreement
    },

    {
      path: '/becomeDelegate',
      name: 'becomeDelegate',
      component: BecomeDelegate
    },
    {
      path: '/relationshipSearch',
      name: 'relationshipSearch',
      component: RelationshipSearch
    },
    {
      path: '/recommendDelegate',
      name: 'recommendDelegate',
      component: RecommendDelegate
    },
    {
      path: '/recommendDelegateDetail',
      name: 'recommendDelegateDetail',
      component: RecommendDelegateDetail
    },
    {
      path: '/tableViewController',
      name: 'tableViewController',
      component: TableViewController
    },
    {
      path: '/chargeRecord',
      name: 'chargeRecord',
      component: ChargeRecord
    },
    {
      path: '/todayCharge',
      name: 'todayCharge',
      component: TodayCharge
    },
    {
      path: '/canBalance',
      name: 'canBalance',
      component: CanBalance
    },
    {
      path: '/waterRecord',
      name: 'waterRecord',
      component: WaterRecord
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/delegateList',
      name: 'delegateList',
      component: DelegateList
    },
    {
      path: '/finalDelegateList',
      name: 'finalDelegateList',
      query: {
        id: 'id'
      },
      component: FinalDelegateList
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },

    {
      path: '/sharelink',
      name: 'ShareLink',
      query: {
        sid: 'sid',
        id: 'id'
      },
      component: ShareLink
    },

    {
      path: '/charge',
      name: 'Charge',

      component: Charge
    },
    {
      path: '/download',
      name: 'Download',

      component: Download
    },
    {
      path: '/chargeDetail',
      name: 'ChargeDetail',
      component: ChargeDetail
    },
    {
      path: '/chargeGoldDetail',
      name: 'ChargeGoldDetail',
      component: ChargeDetail
    },
    {
      path: '/userManager',
      name: 'UserManager',
      component: UserManager
    },
    {
      path: '/userManagerDetail',
      name: 'UserManagerDetail',
      query: {
        id: 'id'
      },
      component: UserManagerDetail
    },
    {
      path: '/testMessage',
      name: 'TestMessage',

      component: TestMessage
    }

  ]
})


router.beforeEach((to, from, next) => {
  console.log('beforeeach')
  let token = getToken()

  //测试用
  next()

  //测试去掉验证
  // if (token) {
  //   next()
  // } else {
  //   if(to.path=='/login'){//如果是登录页面路径，就直接next()
  //     next();
  //   }else{//不然就跳转到登录；
  //     next('/login');
  //   }
  // }

})

export default router
