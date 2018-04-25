<template>
  <div>
    <mt-header title="成为代理">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">首页</mt-button>
    </mt-header>
    <div class="top">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">已代理游戏</mt-tab-item>
        <mt-tab-item id="2">未代理游戏</mt-tab-item>
      </mt-navbar>
    </div>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'游戏 ' + n"  is-link/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'游戏 ' + n" to="/message" is-link/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',

    data() {
      return {
        selected: '1'
      };
    }
  };
</script>

<style scoped>
  .top{
    font-size: 40px;
  }
</style>
