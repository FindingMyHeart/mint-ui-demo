<template>
  <div v-show="isShow" style="position:relative;">


    <div>
      　 <img src="/static/img/bg_2.jpg" width="100%" height="100%" onclick="return false">
    </div>


    <div align="center" style="position:absolute; z-index:10; left:10%; top:15% ">

      <span>

        <img :src="icon" :width="96" :height="96" onclick="return false">
      </span>

      &nbsp &nbsp

      <span>
        <img src="/static/img/share_pao.png" width="50%" height="50%" >
        </span>


    </div>

    <div align="center" style="position:absolute; z-index:10; left:0%; top:35% ">
      <img src="/static/img/download_button.png" width="50%" height="50%" @click="clickDownload()">
    </div>


    <br/>

    <!--<div style="position:absolute; z-index:10; left:0%; top:25% " align="center">-->

      <!--<img src="/static/img/bg2.png" width="100%">-->
      　
      <div v-bind:style="fontStyle" >
        <font size="3" color="white">专属二维码</font>
      </div>
      　　
      <div v-bind:style="imagestyle" >
        <img :src="qr" :width="172" :height="172">
      </div>
    <!--</div>-->

    <div id="cover" class="popContainer" v-show="coverShow" @click="closeCover()">
    </div>

    <div id="guide" class="guideStyle" v-show="coverShow" @click="closeCover()">
      <img src="/static/img/fx_z1.png" width="100%" height="100%">
    </div>



  </div>
</template>

<script>
  import {wxAuth, auth, jsapiparam, getAgentQr} from '@/api/api'
  import {getCookie} from '@/utils/util'


  import wx from 'weixin-js-sdk'


  export default {
    name: 'test',
    data() {
      return {
        icon: "",
        qr: "",
        isShow: true,
        coverShow: true,
        isInGongzhonghao:false,//是否在公众号内
        imagex: this.computeIndex(),
        imagestyle: {
          position: 'absolute',
          'z-index': 11,
          left: this.imagex,
          top: '350px'
        },
        fontStyle: {
          position: 'absolute',
          'z-index': 11,
          left: (this.getWidth() / 2 - 40) + 'px',
          top: '310px'
        },
      }
    },

    mounted(){

      let sid = this.$route.query.sid;
      let id = this.$route.query.id;
      let infoKey = 'info' + sid
      let qrKey = sid + '|qr'
      let info = getCookie(infoKey)

//      this.setQr()

//      alert("info",info)
      //去授权
      if (!info) {
//          alert('去授权')
        console.log("授权----------------")
        let state = id
        getAgentQr(id).then(response=>{
          this.icon = response.icon;

          this.qr = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + response.qr;
        })
        let url = 'http://dongxiaojieqipai.com/game/wechat/authorize_base?returnUrl=' + id
        //跳转
        window.top.location.href = url
      } else {
//          alert("加载icon",info)

        //加载
        info = decodeURIComponent(info);
        var d = JSON.parse(info);
        this.isShow = true


        this.icon = d.icon;

        this.qr = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + d.qr;
        console.log(info)
      }
//      if (info) {
//          alert('展示链接')
        let url = window.location.href.split('#')[0]
        jsapiparam(url).then(response => {
          console.log(response)
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: response.appId, // 必填，公众号的唯一标识
            timestamp: response.timestamp, // 必填，生成签名的时间戳
            nonceStr: response.nonceStr, // 必填，生成签名的随机串
            signature: response.signature,// 必填，签名，见附录1
            jsApiList: [
              'checkJsApi',
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });


          wx.ready(function () {
//              let u = window.location.href
            //分享到朋友圈"
            wx.onMenuShareTimeline({
              title: "快和我玩董小姐棋牌",
              link: window.location.href, // 分享链接
              imgUrl: "https://mmbiz.qpic.cn/mmbiz_png/wj1STzkg04h46BuribmuoJnsMQgc2m70558p3mE91j6zq4sph6RavCicfUiahTSRj4CVRSRN9ecdJKic6ysZeBCZiag/0?wx_fmt=png", // 分享图标
              success: function () {
                // console.log('分享到朋友圈成功')
              },
              cancel: function () {
                // console.log('分享到朋友圈失败')
              }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
              title: "快和我玩董小姐棋牌", // 分享标题
              desc: "我玩了很久了,值得推荐给你,一起来玩吧", // 分享描述
              link: window.location.href, // 分享链接
              imgUrl: "https://mmbiz.qpic.cn/mmbiz_png/wj1STzkg04h46BuribmuoJnsMQgc2m70558p3mE91j6zq4sph6RavCicfUiahTSRj4CVRSRN9ecdJKic6ysZeBCZiag/0?wx_fmt=png", // 分享图标
              success: function () {
                // console.log('分享到朋友成功')
              },
              cancel: function () {
                // console.log('分享到朋友失败')
              }
            });

          })

        })
//      }

    },
    created(){
    },
    methods: {
      clickDownload(){
        this.$router.push('/download')
      },
      computeIndex(){
        this.imagex = (this.getWidth() - 172) / 2 + 'px'
      },
      getWidth(){
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;      //width
        return w
      },
      _client: function () {
        return {
          w: document.documentElement.scrollWidth,
          h: document.documentElement.scrollHeight,
          bw: document.documentElement.clientWidth,
          bh: document.documentElement.clientHeight
        };
      },
      closeCover(){
          this.coverShow = false;
      }

    }
  }
</script>


<style>

  body {
    margin: 0;
    padding: 0;
  }

  img {
    margin: 0;
    padding: 0;
    outline-width: 0px;
    vertical-align: top;
  }

  div.popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 60;
    background: rgba(0, 0, 0, 0.7);
  }

  div.guideStyle {
    position: absolute;
    right: 18px;
    top: 5px;
    z-index: 19999;
  }

</style>
