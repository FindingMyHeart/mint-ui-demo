<template>
  <div>
    <mt-header title="董小姐棋牌室">
      <router-link to="/todayCost" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>

      <router-link to="/" slot="right">
        <mt-button>主页</mt-button>
      </router-link>
    </mt-header>

    <div class="top">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">{{this.title}}</mt-tab-item>
      </mt-navbar>
    </div>

    <div style="text-align: center">
      <br>
      <span style="font-size:20px; display: block"> ￥{{this.total}}</span>
      <span style="font-size:15px">{{this.timeStr}}</span>
      <br>
    </div>
    <br>
    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="1">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" v-for="(comment,index) in comments" :key="index">
            <div v-show="pageIndex==0">
              <div class="abc">
                <span>日期:{{comment.dateStr}}</span>
                <br>
                <span>收益：￥{{comment.firstLevel / 100.0}} × 0.2 = {{comment.firstLevel / 100.0 * 0.2}}</span>
              </div>
            </div>

            <div v-show="pageIndex==1">
              <div class="abc">
                <!--<img slot="icon" :src="comment.image" width="43" height="43">-->
                <span>日期:{{comment.dateStr}}</span>
                <br>
                <!--<span>收益：￥{{comment.firstLevel}}</span>-->
                <span>收益：￥{{comment.secondLevel / 100.0}} × 0.1 = {{comment.secondLevel / 100.0 * 0.1}}</span>
                <!--<span>收益：￥{{comment.thirdLevel}}</span>-->
              </div>
            </div>

            <div v-show="pageIndex==2">
              <div class="abc">
                <span>日期:{{comment.dateStr}}</span>
                <br>
                <span>收益：￥{{comment.thirdLevel / 100.0}} × 0.1 = {{comment.thirdLevel / 100.0 * 0.1}}</span>
              </div>
            </div>
            <div style="background-color: darkgrey; height: 1px; margin-top: 7px; margin-bottom: 7px"></div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>

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
        pageIndex:1,//页码
        comments: [],//商品列表数据
        allLoaded:false, //是否禁止触发上拉函数
        isAutoFill:false,//是否自动触发上拉函数
        selected: '1',
        title: "",
        total:"",
        timeStr: "",
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

      this.title = this.$route.params.title
      this.comments = this.$route.params.list
      this.total = this.$route.params.total
      this.timeStr = this.$route.params.timeStr
      this.pageIndex = this.$route.params.pageIndex
      Toast(this.pageIndex)
    },
    methods: {
      getLevel3List() {
      },
    }
  };
</script>

<style scoped>
  .player{
    text-align: center;
    background-color: lightgrey;
    width: 29%;
    height:60px;
    float: left;
  }
  .abc{
    width: 100%;
    height: 100%;
    text-align: left;
  }

  .inner{
    width: 110px;
    height: 40px;
    background-color: red;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    text-align: left;

  }
  ul li{
    list-style-type:none;
    margin: 0px;
    padding: 0px;
    height: 60px;
    /*text-align: center;*/
  }
</style>
