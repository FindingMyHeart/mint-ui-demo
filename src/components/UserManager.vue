<template>
  <div class="top">
    <mt-header title="用户管理 ">
      <router-link to="/recommendDelegate" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link  to="/" slot="right">
        <mt-button >首页</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
      <mt-field label="用户ID:" placeholder="请输入用户ID" v-model="agentId">

        <!--<span>{{this.username}}</span>-->
      </mt-field>
      <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
      <br>
      <mt-button size="large" type="primary" @click="searchUser">查  询</mt-button>
      <br>
      <div style="text-align: left">
        <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
        <div @click="btnClicked">
          <div v-show="this.enable" @click="gotoNextPage">
            <mt-cell style="text-align: left">
              <span>{{this.searchText}}</span>
              <img slot="icon" :src="imageUrl" width="40" height="40">
            </mt-cell>
            <mt-cell title="身份:" >{{this.delegateStr}}</mt-cell>
            <mt-cell title="绑定日期">{{this.createTime}}</mt-cell>
            <mt-cell title="充值金额">{{this.totalMoney}}</mt-cell>
          </div>

        </div>
        <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
      </div>
    </div>
    <br>


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
        agentId: '0',
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
      // this.getHome()
    },

    watch:{
      enable:{
        handler:function(val,oldval){
          // console.log(val)

          if (val == true){
            // this.getPlayerList()

            if (this.type == 0){
              this.searchText = "";
            } else {
              this.searchText = "id:" + this.agentId +"    " + "name:" + this.username;
            }

          } else {
            // this.getLevel2List()
          }
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
      agentId:{
        handler:function(val,oldval){
          // console.log(val)
          if (val == ""){
            this.searchText =""
          }
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
    },

    methods: {

      gotoNextPage(){

        if (this.type == 0){
          // Toast("")
          return;
        }

        this.$router.push({
          path: '/userManagerDetail',
          name: 'UserManagerDetail',
          params: {
            list: this.agentId
          }
        })

      },
      btnClicked(){
      },
      searchUser(){
        this.findUser()
      },

      //推荐代理
      recommandClick(){

        if (this.enable == false){
          Toast('用户不存在或已经成为代理')
          return
        }

        bindDelegate(this.agentId).then(response => {

          console.log(response);

          var code = response.code

          if (code == 200){
            Toast('绑定失败')
          } else {
            Toast('绑定成功')
          }

        });

      },

      findUser() {
        findUserInfo(this.agentId).then(response => {
          console.log(response);

          if (this.type == 0){
            this.delegateStr = "用户不存在"
          } else if(this.type == 1){
            this.delegateStr = "直接玩家"
          }else if (this.type == 2){
            this.delegateStr = "二级代理"
          }else if ((this.type == 3)){
            this.delegateStr = "三级代理"
          }

          this.agentId = "" + response.result.userId;
          this.username = response.result.username;
          this.imageUrl = response.result.image;
          this.totalMoney = "¥" +  response.result.totalMoney;
          this.referee = response.result.referee;
          this.delegateCount = response.result.delegateCount;
          this.userCount = response.result.userCount;
          this.canUseMoney = response.result.canUseMoney;
          this.userCount = response.result.userCount;
          this.type = response.result.type;
          this.rebate = response.result.rebate;
          this.createTime = response.result.createTime;

          if (this.type == 0){
            this.searchText = "";
            this.totalMoney = "";
            Toast(this.searchText)
          }else {
            this.searchText = "id:" + this.agentId +"    " + "name:" + this.username;
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

<style scoped>
  .top{
    top: 50px;
    width: 100%;
    /*background-color: #2c3e50;*/
    text-align: center;
    /*background-color: #acacb4;*/
    height: 700px;
  }
  .container{
    margin: 10px;
    /*background-color: #acacb4;*/
    margin-left: 10px;
    padding-left: 10px;

  }

  .abc{
    text-align: center;
    width: 90%;
  }

</style>
