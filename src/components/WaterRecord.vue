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
    <div style="background-color: #acacb4; width: 100%; height: 35px; text-align: center">
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">UID</div>
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">时间</div>
      <div style="height: 35px; width: 33%;float: left; margin-top: 5px">金额</div>
    </div>
    <!--<ul>-->
      <!--<li v-for="item in list">-->
        <!--<img v-lazy="item">-->
      <!--</li>-->
    <!--</ul>-->
    <ul class="mui-table-view">
      <li v-for="news in list" :key="news.id" class="mui-table-view-cell mui-media">
        <img class="mui-media-object mui-pull-left" :src="news.img_url">
        <div class="mui-media-body">
          <span v-text="news.title"></span>
          <div class="news-desc">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          list:[],//新闻列表数据
        }
      },
    }
</script>

<style scoped>

</style>
