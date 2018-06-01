<template>
  <div class="index">
    <!--<mt-header fixed title="充值大厅"></mt-header>-->


    <!--<div class="page-content">-->


    <!--<mt-cell-->
    <!--title="选择游戏"-->
    <!--to="/Order"-->
    <!--is-link-->
    <!--value="fff">-->
    <!--<span style="font-size:20px;text-align:center;margin-right:150px"></span>-->
    <!--</mt-cell>-->

    <!--</div>-->

    <!--<br/>-->
    <div class="page-content">


      <mt-cell title="个人信息"></mt-cell>


      <mt-cell title="昵称">
        <span style="color: gray;font-size:20px;text-align:right;margin-left:-230px">{{this.agentName}}</span>
      </mt-cell>

      <mt-cell title="id">
        <span style="color: gray;font-size:20px;text-align:left;margin-left:-230px">{{this.agentId}}</span>
      </mt-cell>

      <mt-cell title="房卡">
        <span style="color: gray;font-size:20px;text-align:left;margin-left:-230px">{{this.money}}</span>
      </mt-cell>
      <mt-cell title="金币">
        <span style="color: gray;font-size:20px;text-align:left;margin-left:-230px">{{this.gold}}</span>
      </mt-cell>

    </div>

    <br/>

    <div class="page-content">

      <mt-cell title="充值金币"></mt-cell>

    </div>
    <br/>


    <div>


      <div>
            <span>
        　　 <img :src="urlList[0]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(0)">
      </span>

        <span>
        　　 <img :src="urlList[1]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(1)">
      </span>

      </div>


      <div>
              <span>
          　　 <img :src="urlList[2]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(2)">
        </span>
        <span>
          　　 <img :src="urlList[3]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(3)">
        </span>
      </div>

      <div>
            <span>
        　　 <img :src="urlList[4]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(4)">
      </span>
        <span>
        　　 <img :src="urlList[5]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(5)">
      </span>
      </div>

      <div>
            <span>
        　　 <img :src="urlList[6]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(6)">
      </span>
        <span>
        　　 <img :src="urlList[7]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(7)">
      </span>
      </div>

      <div>
            <span>
        　　 <img :src="urlList[8]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(8)">
      </span>
        <span>
        　　 <img :src="urlList[9]" :width="this.itemWidth" :height="this.itemHeight" @click="clickButton(9)">
      </span>
      </div>

      <!--<span style="position:relative;">-->
      <!--　　 <img :src="urlList[0]" :width="this.itemWidth" height="68" @click="clickButton(0)">-->
      <!--&lt;!&ndash;　　 <img :src="url2" width="170" height="68"  >&ndash;&gt;-->
      <!--　　<div v-show="showUrl[0]" style="position:relative; z-index:10; left:-0px; top:-68px ">-->
      <!--　　　　 <img :src="url2" :width="this.itemWidth" height="68" @click="clickButton(0)" >-->
      <!--　　</div>-->
      <!--&lt;!&ndash;　 <div style="position:absolute; z-index:-1; left:10px; top:-65px">&ndash;&gt;-->
      <!--&lt;!&ndash;　　　　{{this.moneyList[0]}}元&ndash;&gt;-->
      <!--&lt;!&ndash;　　</div>&ndash;&gt;-->
      <!--</span>-->


    </div>

    <div>

      <p>
        花费{{this.moneyList[this.clickIndex]}}元,将获得{{this.goldList[this.clickIndex]}}金币,并赠送{{this.giveList[this.clickIndex]}}金币</p>
    </div>
    <div>
      <mt-button size="large" type="primary" @click.native="charge()">充值</mt-button>
    </div>
    <!--</div>-->
  </div>


</template>


<script>
  import {Vue} from 'vue'
  import {getAgentInfo, chargeReq, getUserInfo} from '@/api/api'
  import {Toast} from 'mint-ui';
  //  import url1 from '../../static/img/ticket_1.png'
  export default {
    name: 'index',
    data() {
      return {
        agentId: 0,
        agentName: "",
        money: 0,
        gold: 0,
        url1: "/static/img/ticket_1.png",
        url2: "/static/img/ticket_1_pre.png",

        showUrl: [false, false, false, false, false, false, false, false, false, false],
        urlList: [],
        clickIndex: 0,
        moneyList: [6, 12, 30, 50, 128],
        goldList: [60, 120, 300, 500, 1280],
        giveList: [0, 0, 30, 55, 160],
        ok: false,
        itemWidth: 0,
        itemHeight: 0

      }
    },
    created() {
      console.log(document.body.clientWidth)
      console.log(this.getWidth())

      this.initUrl()

      var w = this.getWidth()
      this.itemWidth = (w - 30) / 2
      this.itemHeight = this.itemWidth / 2.46

      this.setUserInfo()
    },

    computed: {},
    methods: {
      toDetail() {
        this.$router.push('/detail')
      },
      clickButton(index){
        this.clickIndex = index
//        this.showUrl[index] = true
        this.initUrl()
        var url = `/static/img/ticket_${index + 1}_pre.png`
//        this.urlList[index] = this.url2
        this.$set(this.urlList, index, url)
        //vue 检测不到数组变化 所以这样写
        this.initShowUrl();
        this.$set(this.showUrl, index, true)
        console.log(this.showUrl)
        this.ok = true

      },

      getWidth(){
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;      //width
        return w
      },
      isShow(index){
        console.log(this.showUrl[index])
        return this.showUrl[index]
      },
      initUrl(){
        this.urlList = ["/static/img/ticket_1.png",
          "/static/img/ticket_2.png",
          "/static/img/ticket_3.png",
          "/static/img/ticket_4.png",
          "/static/img/ticket_5.png",
          "/static/img/ticket_6.png",
          "/static/img/ticket_7.png",
          "/static/img/ticket_8.png",
          "/static/img/ticket_9.png",
          "/static/img/ticket_10.png",
        ]
      },
      initShowUrl(){
        this.showUrl = [false, false, false, false, false, false, false, false, false, false]
      },


      setUserInfo(){
        getUserInfo().then(response => {
          console.log(response)
          this.agentId = response.id
          this.agentName = response.name
          this.money = response.money
          this.gold = response.gold
        })
      },

      charge(){
        if (typeof WeixinJSBridge == "undefined") {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        } else {
          this.onBridgeReady();
        }
      },


      onBridgeReady() {
        chargeReq(1, 1).then(response => {
          console.log(response)
          console.log("充值============")

          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
              "appId": response.appId,     //公众号名称，由商户传入
              "timeStamp": response.timeStamp,         //时间戳，自1970年以来的秒数
              "nonceStr": response.nonceStr, //随机串
              "package": response.packageValue,
              "signType": response.signType,         //微信签名方式：
              "paySign": response.paySign //微信签名
            },
            function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {

                //刷新
                this.setUserInfo()
              }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
            }
          );

        })

      }


    }
  }
</script>


<style>

  /*body {*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*}*/
  /*img {*/
    /*margin: 10;*/
    /*padding: 10;*/
    /*outline-width: 10px;*/
    /*vertical-align: top;*/
  /*}*/
</style>
