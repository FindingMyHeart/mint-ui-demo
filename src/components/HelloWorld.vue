<template>
  <div class="index">
    <!--<mt-header title="主页" >-->
      <!--<router-link to="/" slot="left">-->
      <!--</router-link>-->
    <!--</mt-header>-->
    <mt-header title="vue后台管理系统">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header>
    <div class="page-content" >
      <div class="page-title">
        <!--<span>我的邀请码：{{this.agentId}}</span>-->
      </div>

      <div @click="handleClose">

        <mt-cell
          title="看邀请码"
          is-link>
          <!--<span style="font-size:20px;text-align:center;margin-right:150px">¥ {{this.charge}}</span>-->
          <!--<img slot="icon" src="../assets/logo.png" width="24" height="24">-->
          <img slot="icon" src="../static/img/callme.png" width="24" height="24">
          <br>
          <span>{{this.agentId}}</span>

        </mt-cell>

      </div>

      <mt-cell
        title="今日充值"
        to="/todayCharge"
        is-link>
        <!--<span style="font-size:20px;text-align:center;margin-right:150px">¥ {{this.charge}}</span>-->
        <span>¥ {{this.charge}}</span>
        <img slot="icon" src="../assets/logo.png" width="24" height="24">
      </mt-cell>
      <mt-cell
        title="可结算额"
        to="/canBalance"
        is-link>
        <span>¥ {{this.money}}</span>
        <!--<span style="color: gray;font-size:20px;text-align:center;margin-right:150px">¥ {{this.money}}</span>-->
        <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="推荐代理"
        to="/recommendDelegate"
        is-link>
        <img slot="icon" src="../assets/logo.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="成为代理"
        to="/becomeDelegate"
        is-link>
        <img slot="icon" src="../assets/logo.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="关系查询"
        to="/relationshipSearch"
        is-link>
        <img slot="icon" src="../assets/logo.png" width="24" height="24">
      </mt-cell>

      <mt-cell
        title="用户协议"
        to="/Agreement"
        is-link>
        <img slot="icon" src="../assets/logo.png" width="24" height="24">
      </mt-cell>
    </div>

    <!--</div>-->
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      agentId:1000,
      charge:1000,
      money:0.00
    }

  },
  methods:{
    handleClose(){
      Toast('邀请码是:'+ this.agentId);
    },
    create(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/
/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/
/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/
/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
