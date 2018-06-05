<template>
  <div class="top">
    <mt-header title="推荐代理">
      <router-link to="/recommendDelegate" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link  to="/" slot="right">
        <mt-button >首页</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <vue-numeric currency="$"></vue-numeric>
      <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
      <mt-field label="用户ID:" placeholder="请输入用户ID" v-model="agentId">

        <!--<span>{{this.username}}</span>-->
      </mt-field>
      <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
      <br>
      <mt-button size="large" type="primary" @click="searchUser">查  询</mt-button>
      <br>
      <div style="text-align: left">

        <!--<mt-cell-->
          <!--to="/finalDelegateList"-->
          <!--is-link-->
          <!--value="带链接">-->
          <!--<img slot="icon" :src="" width="43" height="43">-->
          <!--<span>aa</span>-->
          <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
          <!--<span>ID:ddd</span>-->
        <!--</mt-cell>-->
        <div style="width: 100%; height: 1px; background-color: #acacb4"></div>
        <div @click="btnClicked">
          <mt-cell style="text-align: left">
            <span>{{this.searchText}}</span>
            &nbsp; &nbsp;
            <span>点击推荐</span>
            <img slot="icon" :src="imageUrl" width="40" height="40">
          </mt-cell>
        </div>
        <div style="width: 100%; height: 1px; background-color: #acacb4"></div>

        <!--<mt-cell-->
          <!--title="">-->
          <!--<span>ID:{{this.agentId}}</span>&nbsp; &nbsp;-->
          <!--<span>{{this.username}}</span>-->

          <!--&lt;!&ndash;<img v-bind:src="imageUrl" width="24" height="24"/>&ndash;&gt;-->


          <!--&lt;!&ndash;<img v-bind:src="userData.photo" :onerror="logo" class="img-box4">&ndash;&gt;-->
          <!--&lt;!&ndash;<img slot="icon" v-bind:src="imageUrl" width="24" height="24">&ndash;&gt;-->
          <!--&lt;!&ndash;<div style=" width: 150px; text-align: right">&ndash;&gt;-->
            <!--&lt;!&ndash;<mt-button size="small" type="primary" @click="recommandClick">推 荐</mt-button>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--</mt-cell>-->
      </div>
    </div>
    <br>


  </div>
</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate} from "../api/delegateRel";
  import {finderUser, bindDelegate} from "../api/home";
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-navbar',

    data(){
      return {
        agentId: '',
        username:'',
        imageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=253777390,947512827&fm=23&gp=0.jpg/96',
        enable:false,
        searchText: ''

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
            this.searchText = "id:" + this.agentId +"    " + "name:" + this.username;
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

      btnClicked(){
        // Toast("点击")
        this.recommandClick()
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

        finderUser(this.agentId).then(response => {
          console.log(response);
          this.agentId = response.result.userId;
          this.username = response.result.username;
          this.imageUrl = response.result.image;

          // Toast("ll" + this.imageUrl)
          if (this.agentId == '0'){
            this.enable =false;
            Toast("用户不存在或者已经成为代理")
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
