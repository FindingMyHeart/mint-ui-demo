<template>
    <div>
      <mt-header title="拉老鼠">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <!--<mt-button @click="handleClose">close</mt-button>-->
        </router-link>

        <router-link to="/" slot="right">
          <mt-button>主页</mt-button>
        </router-link>
      </mt-header>

      <div class="top">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">直接玩家</mt-tab-item>
          <mt-tab-item id="2">二级代理</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="2">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="i in 20" :key="i">
              <mt-cell
                to="/finalDelegateList"
                is-link
                value="带链接">
                <img slot="icon" src="../static/img/goodShow.png" width="43" height="43">
                <span>delegate贫僧 + {{i}}</span>
                &nbsp; &nbsp;
                <span>ID:123444</span>
              </mt-cell>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="i in 20" :key="i">
              <mt-cell
                to="//github.com"
                is-link
                value="带链接">
                <img slot="icon" src="../static/img/goodShow.png" width="43" height="43">
                <span>player贫僧 + {{i}}</span>
                &nbsp; &nbsp;
                <span>ID:123444</span>
              </mt-cell>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>

</template>

<script>
  export default {
    name: 'page-navbar',

    data(){
      return {
        pageIndex:1,//页码
        prods:[],//商品列表数据
        allLoaded:false, //是否禁止触发上拉函数
        isAutoFill:false,//是否自动触发上拉函数
        selected: '1'
      }
    },
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
    height: 80px;
    /*text-align: center;*/
  }
</style>
