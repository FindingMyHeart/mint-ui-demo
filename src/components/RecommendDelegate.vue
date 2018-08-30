<template>
  <div>
    <mt-header title="选择授权">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link  to="/" slot="right">
        <mt-button >首页</mt-button>
      </router-link>
    </mt-header>
    <!--<mt-cell title="董小姐棋牌室" is-link to="/recommendDelegateDetail"></mt-cell>-->

    <div style="text-align: center">
      <h4>开通代理须知</h4>
      <span>1、开通代理时该玩家元宝余额不低于2000元宝。</span>
      <br>
      <span>2、开通代理一周内绑定玩家不少于15人。</span>
      <br>
      <span>3、若违反上述两条规定，取消代理资格，代理收益不予结算！</span>
    </div>

    <mt-cell
      title="董小姐棋牌室"
      to="/recommendDelegateDetail"
      is-link>
      <img slot="icon" src="../assets/ic_launcher.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
    export default {
        name: "recommendDelegate"
    }
</script>

<style scoped>

</style>
