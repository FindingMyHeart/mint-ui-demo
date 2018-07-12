<template>
  <div>
    <mt-header title="董小姐棋牌室">
      <router-link to="/delegateList" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!--<mt-button @click="handleClose">close</mt-button>-->
      </router-link>

      <router-link to="/" slot="right">
        <mt-button>主页</mt-button>
      </router-link>
    </mt-header>

    <div class="top">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">三级代理</mt-tab-item>
      </mt-navbar>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="2">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" v-for="(comment,index) in comments" :key="index">
            <mt-cell
              to="/finalDelegateList"
              is-link
              value="带链接">
              <img slot="icon" :src="comment.image" width="43" height="43">
              <span>{{comment.username}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID: {{comment.uid}}</span>
            </mt-cell>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" v-for="(comment,index) in comments" :key="index">
            <mt-cell
              value="带链接">
              <img slot="icon" :src="comment.image" width="43" height="43">
              <span>{{comment.username}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>ID: {{comment.uid}}</span>
            </mt-cell>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>

</template>

<script>
  import axios from 'axios';
  import {fetchLevel2Delegate, fetchLevel3Delegate} from "../api/delegateRel";
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
      this.getLevel3List(1)
    },
    methods: {
      getLevel3List(aid) {

        fetchLevel3Delegate(100025).then(response => {
          console.log(response);
          this.comments = response.result
        });
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
