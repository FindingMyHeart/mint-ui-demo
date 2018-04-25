<template>
  <div>
    <mt-header title="今日充值">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!--<mt-button @click="handleClose">close</mt-button>-->
      </router-link>

      <router-link to="/" slot="right">
        <mt-button>主页</mt-button>
      </router-link>
    </mt-header>

    <div style="text-align: center">
      <br>
      <span style="font-size:x-large; display: block">$3</span>
      <span style="font-size:15px">2018-04-23 至 2018-04-23</span>
      <br>
      <br>
    </div>

    <mt-cell
      title="直接玩家"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥1</span>
    </mt-cell>
    <mt-cell
      title="我推荐的代理"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥1</span>
    </mt-cell>

    <mt-cell
      title="推荐的代理"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥1</span>
    </mt-cell>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
