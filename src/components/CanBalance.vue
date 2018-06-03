<template>
  <div>
    <mt-header title="可结算">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">首页</mt-button>
    </mt-header>
    <div style="text-align: center">
      <br>
       <span style="display: block; font-size: x-large">
      $0.0
    </span>
      <h4>实时到账，在公众号内回复"结算"</h4>
      <mt-button size="large" type="primary" @click="gotoWaterList">流水记录</mt-button>
    </div>
  </div>
</template>

<script>

  import { Toast } from 'mint-ui';
    export default {
      name: 'canBlance',
      data(){
        return {
          text:'123',
          value:false
        }
      },
      methods:{
        gotoWaterList(){
          this.$router.push({
            name: "waterRecord"
          })
        }
      }
    }
</script>

<style scoped>

</style>
