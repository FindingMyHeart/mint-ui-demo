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
         ￥{{this.text}}
    </span>
      <h4>实时到账，在公众号内回复"结算"</h4>
      <mt-button size="large" type="primary" @click="gotoWaterList">流水记录</mt-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {canBlance} from "../api/home";
  import { Toast } from 'mint-ui';
    export default {
      name: 'canBlance',
      data(){
        return {
          text:'0',
          value:false
        }
      },

      created() {
        this.getMoney()
      },
      methods: {
        getMoney() {

          canBlance().then(response => {

            console.log(response);

            this.text = response.result;
            // Toast(this.text + "")

          });
        },

        gotoWaterList(){
          this.$router.push({
            name: "waterRecord"
          })
        },
      }

    }
</script>

<style scoped>

</style>
