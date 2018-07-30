<template>
  <div>
    <mt-header title="今日收益">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button>主页</mt-button>
      </router-link>
    </mt-header>
    <br>
    <div style="text-align: center">
      <span style="font-size: 22px"> ￥{{this.total}} <br>{{this.lastStartDate}} 至 {{this.lastEndDate}}</span>
    </div>
    <br>
    <div @click="goToNextPlayerGold">
      <mt-cell title="直接玩家收益(提成20%)">
        <div>
          ￥{{this.first}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/zjwj.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext2LevelGold">
      <mt-cell title="二级代理收益(提成10%)">
        <div>
          ￥{{this.secondL}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/ej.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext3LevelGold">
      <mt-cell title="三级代理收益(提成10%)">
        <div>
          ￥{{this.third}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/sj.png" width="24" height="24">
      </mt-cell>
    </div>

    <br>
    <mt-field label="开始时间" placeholder="请选择开始时间" type="date" v-model="startDate"></mt-field>
    <mt-field label="结束时间" placeholder="请选择结束时间" type="date" v-model="endDate"></mt-field>
    <div style="width: 100%; height: 10px"></div>
    <mt-button size="large" type="primary" @click="request">时间选择</mt-button>

  </div>
</template>

<script>
  import axios from 'axios';
  import { DatetimePicker } from 'mint-ui';
  import {todayCost, todayCharge1} from "../api/home";
  import { Toast } from 'mint-ui';
  export default {
    name: "",
    data(){
      return {
        level1: 0.0,
        level2: 0.0,
        level3: 0.0,
        level1Gold: "0",
        level2Gold: "0",
        level3Gold: "0",
        total: 0.0,
        totalGold: '0',
        pickerVisible:false,
        value: null,
        value1: null,
        startDate: '',
        endDate: '',
        lastStartDate:'',
        lastEndDate:'',
        lastStartEnd:'',
        list:[],
        first:0,
        secondL:0,
        third:0,
        allCost:0,
      }
    },

    created() {

      var timestamp = new Date()

      var date = (timestamp.getFullYear()) + "-" +
        (timestamp.getMonth() + 1) + "-" +
        (timestamp.getDate());

      this.startDate = date + "";
      this.endDate = date + "";

      this.lastStartDate = date + "";
      this.lastEndDate = date + "";
      //
      this.first = this.$route.params.first
      this.secondL = this.$route.params.second
      this.third = this.$route.params.third
      this.allCost = this.$route.params.allCost

    },
    methods: {

      goToNext3Level(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list,
            total: this.third,
            title: "三级代理收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate
          }
        })
      },

      goToNext2Level(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list,
            total: this.secondL,
            title: "二级代理收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate
          }
        })
      },

      goToNextPlayer(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list,
            total: this.first,
            title: "直接玩家收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate
          }
        })
      },

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

        todayCost(this.startDate, this.endDate).then(response => {

          console.log(response);
          Toast("success!")

          this.first = response.oneLevel;
          this.secondL =response.twoLevel;
          this.third = response.threeLevel;
          this.total = response.total;

          this.lastStartDate =  response.start;
          this.lastStartEnd =  response.end;
          this.startDate = response.start;
          this.endDate = response.end;
          this.list = response.li;
          // console.log(this.list)



        });
      },
    }
  }
</script>
<style scoped>
</style>

