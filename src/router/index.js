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
Vue.use(Router)
export default new Router({
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
      component: FinalDelegateList
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }

  ]
})
