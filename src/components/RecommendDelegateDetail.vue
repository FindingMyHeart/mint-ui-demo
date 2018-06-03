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
    <br>
    <br>
    <div class="container">
      <mt-field label="用户ID" placeholder="请输入用户ID" v-model="agentId"></mt-field>
      <br>
      <br>
      <mt-button size="large" type="primary" @click="searchUser">查  询</mt-button>
      <br>
      <br>
      <div style="text-align: left">
        <mt-cell
          title="">
          <span>{{this.agentId}}</span>
          <img slot="icon" src="../assets/logo.png" width="24" height="24">
          <div style=" width: 150px; text-align: right">
            <mt-button size="small" type="primary" @click="recommandClick">推 荐</mt-button>
          </div>

        </mt-cell>
      </div>
    </div>
    <br>


  </div>
</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate} from "../api/delegateRel";
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-navbar',

    data(){
      return {
        agentId: '',
        username:'',
        imageUrl:'',
        enable:false

      }
    },
    created() {
      // this.getHome()
    },
    methods: {

      searchUser(){
        this.findUser()
      },

      //推荐代理
      recommandClick(){

        if (this.enable == false){
          Toast('用户不存在或已经成为代理')
          return
        }
        axios.get("http://localhost:8085/recommandDelegate/bindDelegate?userId=" + this.agentId).then((response) => {
            console.log(response);

            var code = response['data']['code']

            if (code == 200){
              Toast('绑定失败')
            } else {
              Toast('绑定成功')
            }

          }
        ).catch((err) => {
            console.log(err);
          }
        );
      },

      findUser() {
        Toast(this.agentId)
        axios.get("http://localhost:8085/recommandDelegate/findUser?userId=" + this.agentId).then((response) => {
            console.log(response);
            this.agentId = response['data']['data']['result']['userId']
            this.username = response['data']['data']['result']['username']
            this.imageUrl = response['data']['data']['result']['imageUrl']
            if (this.agentId == '0'){
              this.enable =false;
            } else {
              this.enable = true;
            }
          }
        ).catch((err) => {
            console.log(err);
          }
        );
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
    background-color: #acacb4;
    height: 700px;
  }
  .container{
    margin: 10px;
    background-color: #acacb4;
    margin-left: 10px;
    padding-left: 10px;

  }

  .abc{
    text-align: center;
    width: 90%;
  }

</style>
