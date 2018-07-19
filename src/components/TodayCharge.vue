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
    <br>
    <div style="text-align: center">
      <span style="font-size: 22px"> ￥{{this.total}} <br>{{this.lastStartDate}} 至 {{this.lastEndDate}}</span>
    </div>
    <br>
    <div @click="goToNextPlayer">
      <mt-cell title="直接玩家充值(提成60%)">
        <div>
          ￥{{this.level1}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/zjwj.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext2Level">
      <mt-cell title="二级代理充值(提成10%)">
        <div>
          ￥{{this.level2}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/ej.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext3Level">
      <mt-cell title="三级代理充值(提成10%)">
        <div>
          ￥{{this.level3}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/sj.png" width="24" height="24">
      </mt-cell>
    </div>

    <br>

    <div style="text-align: center">
      <span style="font-size: 22px"> ￥{{this.totalGold}} <br>{{this.lastStartDate}} 至 {{this.lastEndDate}}</span>
    </div>
    <br>
    <div @click="goToNextPlayerGold">
      <mt-cell title="直接玩家收益(提成20%)">
        <div>
          ￥{{this.level1Gold}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/zjwj.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext2LevelGold">
      <mt-cell title="二级代理收益(提成10%)">
        <div>
          ￥{{this.level2Gold}}
          &nbsp;<img slot="icon" src="../assets/jtyb.png" width="9" height="11">
        </div>
        <img slot="icon" src="../assets/ej.png" width="24" height="24">
      </mt-cell>
    </div>

    <div style="width: 100%; height: 8px"></div>
    <div @click="goToNext3LevelGold">
      <mt-cell title="三级代理收益(提成10%)">
        <div>
          ￥{{this.level3Gold}}
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
  import {todayCharge, todayCharge1} from "../api/home";
  import { Toast } from 'mint-ui';
    export default {
        name: "",
      data(){
        return {
          level1: "0",
          level2: "0",
          level3: "0",
          level1Gold: "0",
          level2Gold: "0",
          level3Gold: "0",
          total: "0",
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
        // timestamp = timestamp / 1000;

        var date = (timestamp.getFullYear()) + "-" +
          (timestamp.getMonth() + 1) + "-" +
          (timestamp.getDate());

        this.startDate = date + "";
        this.endDate = date + "";

        this.lastStartDate = date + "";
        this.lastEndDate = date + "";

        // Toast(this.lastStartDate)
        // Toast(this.lastEndDate)
        // Toast(this.endDate)
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
              list: this.list3,
              total: this.level3,
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


        goToNext3LevelGold(){
          // Toast("g3")
          this.$router.push({
            path:'/chargeGoldDetail',
            name:'ChargeGoldDetail',
            params: {
              list: this.list3,
              total: this.level2Gold,
              title: "三级代理充币记录",
              timeStr: this.lastStartDate + "至" + this.lastEndDate
            }
          })
        },

        goToNext2LevelGold(){
          // Toast("g2")
          this.$router.push({
            path:'/chargeGoldDetail',
            name:'ChargeGoldDetail',
            params: {
              list: this.list2,
              total: this.level2Gold,
              title: "二级代理充币记录",
              timeStr: this.lastStartDate + "至" + this.lastEndDate
            }
          })
        },

        goToNextPlayerGold(){
          // Toast("g1")
          this.$router.push({
            path:'/chargeGoldDetail',
            name:'ChargeGoldDetail',
            params: {
              list: this.list1,
              total: this.level3Gold,
              title: " 直接玩家充币记录",
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
              this.level2 = response.result.twoLevel;
              this.level3 = response.result.threeLevel;

              this.level1Gold = response.result.oneLevelGold;
              this.level2Gold = response.result.twoLevelGold;
              this.level3Gold = response.result.threeLevelGold;
              this.totalGold = response.result.totalGold;

              this.total = response.result.total;


              this.lastStartDate =  response.result.start;
              this.lastStartEnd =  response.result.end;
              this.startDate = response.result.start;
              this.endDate = response.result.end;

              this.list1 = response.result.list1;
              this.list2 = response.result.list2;
              this.list3 = response.result.list3;

            });

          },
          waterRecord() {

            todayCharge1().then(response => {

              console.log(response);

              this.level1 = response.result.onelevel;
              this.level2 = response.result.twoLevel;
              this.level3 = response.result.threeLevel;

              this.level1Gold = response.result.oneLevelGold;
              this.level2Gold = response.result.twoLevelGold;
              this.level3Gold = response.result.threeLevelGold;
              this.totalGold = response.result.totalGold;

              this.total = response.result.total;
              this.lastStartDate =  response.result.start;
              this.lastStartEnd =  response.result.end;
              this.startDate = response.result.start;
              this.endDate = response.result.end;
              this.list1 = response.result.list1;
              this.list2 = response.result.list2;
              this.list3 = response.result.list3;

            });

        },
      }
    }
</script>

<style scoped>

</style>
