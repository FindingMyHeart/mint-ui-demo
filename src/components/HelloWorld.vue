<template>
  <div class="index">
    <mt-header title="董小姐棋牌室">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header>
    <div class="page-content" >

      <mt-cell
        title="看邀请码"
      >
        <img slot="icon" src="../assets/kyqm.png" width="24" height="24">
        <br>
        <div>
          <span style="margin-right: 15px; padding-right: 7px">{{this.agentId}}</span>
        </div>
      </mt-cell>

      <mt-cell
        title="今日充值"
        to="/todayCharge"
        is-link>
        <span>¥ {{this.money.toFixed(2)}}</span>
        <img slot="icon" src="../assets/cz.png" width="24" height="24">
      </mt-cell>

      <div @click="gotoCostPage">
        <mt-cell
          title="今日业绩"
          is-link>
          <span>¥ {{this.allCost.toFixed(2)}}</span>
          <img slot="icon" src="../assets/yj.png" width="24" height="24">
        </mt-cell>
      </div>

      <mt-cell
        title="可结算额"
        to="/canBalance"
        is-link>
        <span>¥ {{this.charge.toFixed(2)}}</span>
        <!--<span style="color: gray;font-size:20px;text-align:center;margin-right:150px">¥ {{this.money}}</span>-->
        <img slot="icon" src="../assets/js.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="推荐代理"
        to="/recommendDelegate"
        is-link>
        <img slot="icon" src="../assets/tjr.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="关系查询"
        to="/relationshipSearch"
        is-link>
        <img slot="icon" src="../assets/gx.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="用户管理"
        to="/userManager"
        is-link>
        <img slot="icon" src="../assets/ts24.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="用户协议"
        to="/Agreement"
        is-link>
        <img slot="icon" src="../assets/yh.png" width="24" height="24">
      </mt-cell>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate} from "../api/delegateRel";
  import {homePage} from "../api/home";
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-navbar',

    data(){
      return {
        pageIndex:1,//页码
        comments: [],//商品列表数据
        allLoaded:false, //是否禁止触发上拉函数
        isAutoFill:false,//是否自动触发上拉函数
        selected: '1',
        agentId: '0',
        money: 0,
        charge: 0,
        allCost: 0,
        firstLevel: 0,
        secondLevel: 0,
        thirdLevel: 0
      }
    },
    watch:{
      selected:{
        handler:function(val,oldval){
          // console.log(val)

          if (val == '1'){
            this.getPlayerList()
          } else {
            this.getLevel2List()
          }
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
    },

    // created() {
    //   // this.getHome()
    // },
    mounted() {
      this.getHome()
    },
    methods: {
      gotoCostPage(){
        // Toast("g1")
        this.$router.push({
          path:'/todayCost',
          name:'TodayCost',
          params: {
            allCost: this.allCost,
            first: this.firstLevel,
            second: this.secondLevel,
            third: this.thirdLevel
          }
        })
      },

      getHome() {

        homePage().then(response => {
          console.log(response);

          this.agentId = response.result.invitationCode
          this.charge = response.result.rebate
          this.money = response.result.totalMoney
          this.allCost = response.result.allCost
          this.firstLevel = response.result.firstLevel
          this.secondLevel = response.result.secondLevel
          this.thirdLevel = response.result.thirdLevel

        });

      },
    }
  };
</script>

<style scoped>

</style>
