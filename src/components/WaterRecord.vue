<template>
  <div>
    <mt-header title="流水记录">
      <router-link to="/canBalance" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link  to="/" slot="right">
        <mt-button >首页</mt-button>
      </router-link>
    </mt-header>
    <div style=" width: 100%; height: 35px; text-align: center; background-color: #acacb4">
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">UID</div>
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">时间</div>
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">金额</div>
    </div>
    <div style=" width: 100%; height: 35px; text-align: center" v-for="(comment,index) in comments" :key="index">
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">{{comment.uid}}</div>
      <!--<div style="background-color: #acacb4; width: 100%; height: 1px"></div>-->
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">{{comment.timeStamp}}</div>
      <!--<div style="background-color: #acacb4; width: 100%; height: 1px"></div>-->
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px; text-decoration-color: hotpink">
        <span style="color: red">￥{{comment.money}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate} from "../api/delegateRel";
  import {water} from "../api/home";
  import { Toast } from 'mint-ui';
  export default {
    name: 'page-navbar',

    data(){
      return {
        pageIndex:1,//页码
        comments: [],//商品列表数据
        allLoaded:false, //是否禁止触发上拉函数
        isAutoFill:false,//是否自动触发上拉函数
        selected: '1'
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
      this.waterRecord()
    },
    methods: {
      waterRecord() {

        // axios.get("http://localhost:8085/todayCharge/waterRecord").then((response) => {
        //
        //     // this.data().prods = response.data["data"]["result"];
        //     // Toast("ww")
        //     console.log(response);
        //     this.comments = response['data']['data']['result']
        //
        //   }
        // ).catch((err) => {
        //     console.log(err);
        //   }
        // );

        // Toast("fetchl")
        water().then(response => {
          console.log(response);
          this.comments = response.result
        });
      },
    }
  };
</script>

<style scoped>
  .sspan{
    text-align: right;
    background-color: lightgrey;
    width: 30%;
    height:60px;
    float: left;
  }
  li {list-style-type:none;}
</style>
