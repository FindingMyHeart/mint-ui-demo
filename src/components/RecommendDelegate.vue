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
