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
      <span style="font-size:20px; display: block">￥{{this.total}}</span>
      <span style="font-size:15px">{{this.startDate}} 至 {{this.endDate}}</span>
      <br>
      <br>
    </div>

    <mt-cell
      title="直接玩家"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥{{this.level1}}</span>
    </mt-cell>
    <mt-cell
      title="二级代理"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥{{this.level2}}</span>
    </mt-cell>

    <mt-cell
      title="三级代理"
      to="/recommendDelegate"
      is-link>
      <img slot="icon" src="../static/img/goodShow.png" width="24" height="24">
      <span>￥{{this.level3}}</span>
    </mt-cell>

    <br>
    <!--<mt-field label="开始时间" placeholder="请输入开始时间" v-model="startDate"></mt-field>-->
    <!--<mt-field label="结束时间" placeholder="请输入结束时间" v-model="startDate"></mt-field>-->
    <mt-field label="开始时间" placeholder="请选择开始时间" type="date" v-model="startDate"></mt-field>
    <mt-field label="结束时间" placeholder="请选择结束时间" type="date" v-model="endDate"></mt-field>
    <br>
    <mt-button size="large" type="primary" @click="request">时间选择</mt-button>

  </div>
</template>

<script>
  import axios from 'axios';
  import { DatetimePicker } from 'mint-ui';
  import { Toast } from 'mint-ui';
    export default {
        name: "",
      data(){
        return {
          level1: "0",
          level2: "0",
          level3: "0",
          total: "0",
          pickerVisible:false,
          value: null,
          value1: null,
          //show: true,
          startDate: '2017-06-12',
          endDate: '2017-06-12'
        }
      },

      created() {
        this.waterRecord()
        this.onchekTime()
      },
      methods: {

          //时间检查
          onchekTime(){
            var sYear = this.startDate.substring(0,4);
            var sMonth = this.startDate.substring(5,7);
            var sDay = this.startDate.substring(8,10);

            var eYear = this.endDate.substring(0,4);
            var eMonth = this.endDate.substring(5,7);
            var eDay = this.endDate.substring(8,10);

            if (sYear > eYear){
              return false;
            }else if(sYear == eYear){
              if (sMonth > eMonth){
                return false;
              } else if(sMonth == eMonth){

                if (sDay > eDay){
                  return false;
                } else {
                  return true;
                }
              }else {
                return true;
              }

            }else {
              return true;
            }
          },

          request(){
            if (this.onchekTime() == false ){
              Toast("结束时间不能小于开始时间, 请重新选择")
              return
            }
          },
          waterRecord() {

          axios.get("http://localhost:8085/todayCharge/homeCharge").then((response) => {

              this.level1 = response.data["data"]["result"]["onelevel"];
              this.level2 = response.data["data"]["result"]["twoLevel"];
              this.level3 = response.data["data"]["result"]["threeLevel"];
              this.total = response.data["data"]["result"]["total"];
              console.log(response);
            }
          ).catch((err) => {
              console.log(err);
            }
          );
        },
      }
    }
</script>

<style scoped>

</style>
