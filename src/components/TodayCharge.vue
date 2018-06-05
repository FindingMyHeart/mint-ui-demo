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
      <span style="font-size:15px">{{this.lastStartDate}} 至 {{this.lastEndDate}}</span>
      <br>
      <br>
    </div>

    <!--<mt-cell-->
      <!--title="直接玩家"-->
      <!--to="/recommendDelegate"-->
      <!--is-link>-->
      <!--<img slot="icon" src="../static/img/goodShow.png" width="24" height="24">-->
      <!--<span>￥{{this.level1}}</span>-->
    <!--</mt-cell>-->
    <!--<mt-cell-->
      <!--title="二级代理"-->
      <!--to="/recommendDelegate"-->
      <!--is-link>-->
      <!--<img slot="icon" src="../static/img/goodShow.png" width="24" height="24">-->
      <!--<span>￥{{this.level2}}</span>-->
    <!--</mt-cell>-->

    <mt-button size="large" type="primary" @click="goToNextPlayer">直接玩家￥{{this.level1}}</mt-button>
    <br>
    <mt-button size="large" type="primary" @click="goToNext2Level">二级代理￥{{this.level2}}</mt-button>
    <br>
    <mt-button size="large" type="primary" @click="goToNext3Level">三级代理￥{{this.level3}}</mt-button>
    <!--<mt-cell-->
      <!--title="三级代理"-->
      <!--to="/recommendDelegate"-->
      <!--is-link>-->
      <!--<img slot="icon" src="../static/img/goodShow.png" width="24" height="24">-->
      <!--<span>￥{{this.level3}}</span>-->
    <!--</mt-cell>-->

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
  import {todayCharge, todayCharge1} from "../api/home";
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
        // timestamp = timestamp / 1000;

        var date = (timestamp.getFullYear()) + "-" +
          (timestamp.getMonth() + 1) + "-" +
          (timestamp.getDate());

        this.startDate = date + "";
        this.endDate = date + "";

        this.lastStartDate = date + "";
        this.lastEndDate = date + "";

        Toast(this.startDate)

        this.waterRecord()
        this.onchekTime()

        // Toast("this" + this.startDate)
        // Toast(this.lastStartDate)
        // Toast(this.lastEndDate)

      },
      methods: {

        goToNext3Level(){
          this.$router.push({
            path:'/chargeDetail',
            name:'ChargeDetail',
            params: {
              list: this.list2,
              total: this.level2,
              title: "三级代理充值记录",
              timeStr: this.lastStartDate + "至" + this.lastEndDate
            }
          })
        },

        goToNext2Level(){
          this.$router.push({
            path:'/chargeDetail',
            name:'ChargeDetail',
            params: {
              list: this.list2,
              total: this.level2,
              title: "二级代理充值记录",
              timeStr: this.lastStartDate + "至" + this.lastEndDate
            }
          })
        },

        goToNextPlayer(){

          this.$router.push({
            path:'/chargeDetail',
            name:'ChargeDetail',
            params: {
              list: this.list1,
              total: this.level1,
              title: "直接玩家充值记录",
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

            // axios.get("http://localhost:8085/todayCharge/dhomeCharge?start=" + this.startDate + "&end=" + this.endDate).then((response) => {
            //
            //   if (response.data["code"] == 200){
            //     this.level1 = response.data["data"]["result"]["onelevel"];
            //     this.level2 = response.data["data"]["result"]["twoLevel"];
            //     this.level3 = response.data["data"]["result"]["threeLevel"];
            //     this.total = response.data["data"]["result"]["total"];
            //     this.lastStartDate =  response.data["data"]["result"]["start"];
            //     this.lastStartEnd =  response.data["data"]["result"]["end"];
            //     this.startDate = response.data["data"]["result"]["start"];
            //     this.endDate = esponse.data["data"]["result"]["end"];
            //
            //     this.list1 = response.data["data"]["result"]["list1"];
            //     this.list2 = response.data["data"]["result"]["list2"];
            //     this.list3 = response.data["data"]["result"]["list3"];
            //   }
            //
            //     console.log(response);
            //   }
            // ).catch((err) => {
            //     console.log(err);
            //   }
            // );

            todayCharge(this.startDate, this.endDate).then(response => {

              console.log(response);

              this.level1 = response.result.onelevel;
              // this.level2 = response.data["data"]["result"]["twoLevel"];
              // this.level3 = response.data["data"]["result"]["threeLevel"];
              // this.total = response.data["data"]["result"]["total"];
              // this.lastStartDate =  response.data["data"]["result"]["start"];
              // this.lastStartEnd =  response.data["data"]["result"]["end"];
              // this.startDate = response.data["data"]["result"]["start"];
              // this.endDate = esponse.data["data"]["result"]["end"];
              //
              // this.list1 = response.data["data"]["result"]["list1"];
              // this.list2 = response.data["data"]["result"]["list2"];
              // this.list3 = response.data["data"]["result"]["list3"];

              this.level1 = response.result.onelevel;
              this.level2 = response.result.twoLevel;
              this.level3 = response.result.threeLevel;
              this.total = response.result.total;
              this.lastStartDate =  response.result.start;
              this.lastStartEnd =  response.result.end;
              this.startDate = response.result.start;
              this.endDate = response.result.end;

              this.list1 = response.result.list1;
              this.list2 = response.result.list2;
              this.list3 = response.result.list3;

            });
            // todayCharge(this.startDate, this.endDate)


          },
          waterRecord() {

            todayCharge1().then(response => {

              console.log(response);

              this.level1 = response.result.onelevel;
              this.level2 = response.result.twoLevel;
              this.level3 = response.result.threeLevel;
              this.total = response.result.total;
              this.lastStartDate =  response.result.start;
              this.lastStartEnd =  response.result.end;
              this.startDate = response.result.start;
              this.endDate = response.result.end;

              this.list1 = response.result.list1;
              this.list2 = response.result.list2;
              this.list3 = response.result.list3;

            });

          // axios.get("http://localhost:8085/todayCharge/dhomeCharge?start=" + this.startDate + "&end=" + this.endDate).then((response) => {
          //
          //     this.level1 = response.data["data"]["result"]["onelevel"];
          //     this.level2 = response.data["data"]["result"]["twoLevel"];
          //     this.level3 = response.data["data"]["result"]["threeLevel"];
          //     this.total = response.data["data"]["result"]["total"];
          //
          //     this.list1 = response.data["data"]["result"]["list1"];
          //     this.list2 = response.data["data"]["result"]["list2"];
          //     this.list3 = response.data["data"]["result"]["list3"];
          //     console.log(response);
          //   }
          // ).catch((err) => {
          //     console.log(err);
          //   }
          // );
        },
      }
    }
</script>

<style scoped>

</style>
