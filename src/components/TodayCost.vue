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
      <span style="font-size: 22px"> ￥{{this.total.toFixed(2)}} <br>{{this.lastStartDate}} 至 {{this.lastEndDate}}</span>
    </div>
    <br>
    <div @click="goToNextPlayer">
      <mt-cell title="直接玩家(提成20%)">
        <div>
          ￥{{this.level1.toFixed(2)}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/zjwj.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext2Level">
      <mt-cell title="二级代理(提成10%)">
        <div>
          ￥{{this.level2.toFixed(2)}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/ej.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext3Level">
      <mt-cell title="三级代理(提成10%)">
        <div>
          ￥{{this.level3.toFixed(2) }}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/sj.png" width="24" height="24">
      </mt-cell>
    </div>
    <br>
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
  import {todayCharge, todayCost, todayCharge1} from "../api/home";
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
        //show: true,
        startDate: '',
        // endDate: '2017-06-12',
        endDate: '',
        lastStartDate:'',
        lastEndDate:'',
        list1:[],
        list2:[],
        list3:[]
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

      this.onchekTime()

    },
    methods: {

      goToNext3Level(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list1,
            total: this.level3,
            title: "三级代理收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate,
            pageIndex:2
          }
        })
      },

      goToNext2Level(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list1,
            total: this.level2,
            title: "二级代理收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate,
            pageIndex:1
          }
        })
      },

      goToNextPlayer(){
        this.$router.push({
          path:'/costDetail',
          name:'CostDetail',
          params: {
            list: this.list1,
            total: this.level1,
            title: "直接玩家收益记录",
            timeStr: this.lastStartDate + "至" + this.lastEndDate,
            pageIndex:0
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

        Toast("request start!")
        todayCost(this.startDate, this.endDate).then(response => {

          console.log(response);
          this.level1 = response.oneLevel;
          this.level2 = response.twoLevel;
          this.level3 = response.threeLevel;
          this.total = response.total;
          //
          //
          this.lastStartDate =  response.start;
          this.lastStartEnd =  response.end;
          this.startDate = response.start;
          this.endDate = response.end;

          this.list1 = response.li;
          // Toast(this.level1)
          // Toast("l2" + this.level2)
          // Toast("l3" + this.level3)

        });

      },
    }
  }
</script>

<style scoped>

</style>
