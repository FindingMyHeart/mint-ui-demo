<template>
  <div class="index">
    <mt-header title="董小姐棋牌室">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header>
    <div class="page-content" >

      <mt-cell
        title="邀请码"
        is-link>
        <img slot="icon" src="../assets/kyqm.png" width="24" height="24">
        <br>
        <span>{{this.agentId}}</span>

      </mt-cell>

      <mt-cell
        title="今日充值"
        to="/todayCharge"
        is-link>
        <span>¥ {{this.money}}</span>
        <img slot="icon" src="../assets/cz.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="可结算额"
        to="/canBalance"
        is-link>
        <span>¥ {{this.charge}}</span>
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
        money: '0',
        charge: '0'

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

    created() {
      this.getHome()
    },
    methods: {
      getHome() {
        // axios.get("http://localhost:8085/home/show").then((response) => {
        //     console.log(response);
        //     this.agentId = response['data']['data']['result']['invitationCode']
        //     this.charge = response['data']['data']['result']['rebate']
        //     this.money = response['data']['data']['result']['totalMoney']
        //   }
        // ).catch((err) => {
        //     console.log(err);
        //   }
        // );

        homePage().then(response => {

          console.log(response);

          this.agentId = response.result.invitationCode
          this.charge = response.result.rebate

          // var a = Number(response.result.totalMoney) + Number( response.result.totalGold)
          this.money = response.result.totalMoney
          // this.money = a + '';
        });

        // homePage().then(response => {
        //   console.log(response);
        //   Toast("aa")
        //   // this.comments = response.result
        // });

      },
    }
  };
</script>

<style scoped>

</style>
