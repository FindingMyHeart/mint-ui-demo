<template>
<div>
  <mt-header title="用户详情 ">
    <router-link to="/userManager" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <router-link  to="/" slot="right">
      <mt-button >首页</mt-button>
    </router-link>
  </mt-header>
  <br>
  <div>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <div style="width: 100%; height: 45px; text-align: center; padding-top: 9px">
      <span style="font-size: 22px">基本信息</span>
    </div>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="游戏主键" value="">{{this.agentId}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="游戏昵称" value="">{{this.username}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="推广邀请码" value="">{{this.referee}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="玩家总数" value="">{{this.userCount}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="代理总数" value="">{{this.delegateCount}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="注册时间" value="">{{this.createTime}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
  </div>
  <br>
  <div>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <div style="width: 100%; height: 45px; text-align: center; padding-top: 9px">
      <span style="font-size: 22px">收益信息</span>
    </div>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="可用金额" value="">{{this.rebate}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="累计收益" value="">{{this.canUseMoney}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
    <mt-cell title="今日收益" value="">{{this.totalMoney}}</mt-cell>
    <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate} from "../api/delegateRel";
  import {finderUser, bindDelegate,findUserInfo} from "../api/home";
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-navbar',

    data(){
      return {
        agentId: "",
        username:'',
        imageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=253777390,947512827&fm=23&gp=0.jpg/96',
        enable:false,
        searchText: '',
        totalMoney:0,
        referee:0,
        delegateCount:0,
        userCount:0,
        canUseMoney:0,
        rebate:0,
        type:0,
        delegateStr:"",
        createTime: "",

      }
    },
    created() {

      let list  = this.$route.params.list
      this.agentId = list
      // Toast(list)
      this.findUser();
    },

    mounted() {
    },

    methods: {
      findUser() {
        findUserInfo(this.agentId).then(response => {
          console.log(response);

          this.agentId = response.result.userId;
          this.username = response.result.username;
          this.imageUrl = response.result.image;
          this.totalMoney = response.result.totalMoney;
          this.referee = response.result.referee;
          this.delegateCount = response.result.delegateCount;
          this.userCount = response.result.userCount;
          this.canUseMoney = response.result.canUseMoney;
          this.userCount = response.result.userCount;
          this.type = response.result.type;
          this.rebate = response.result.rebate;
          this.createTime = response.result.createTime;
          this.searchText = "id:" + this.agentId +"    " + "name:" + this.username;
          if (this.type == 0){
            this.delegateStr = "用户不存在"
          } else if(this.type == 1){
            this.delegateStr = "直接玩家"
          }else if (this.type == 2){
            this.delegateStr = "二级代理"
          }else if ((this.type == 3)){
            this.delegateStr = "三级代理"
          }
          if (this.agentId == '0'){
            this.enable =false;
            Toast("用户不存在")
          } else {
            this.enable = true;
          }


        });
      },
    }
  };
</script>
