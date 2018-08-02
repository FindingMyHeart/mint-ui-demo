<template>

  <div>

    <div style="position:relative; ">
      　 <img src="../../static/img/bg_1.jpg" width="100%" onclick="return false"/>
      　　
      <div style="position:absolute; z-index:10; left:50%; top:30% ">
        　　　　 <img src="../../static/img/download_a.png" width="50%" height="50%" @click="clickDownload_a()">
      </div>

      <div style="position:absolute; z-index:10; left:50%; top:40% ">
        　　　　 <img src="../../static/img/download_i.png" width="50%" height="50%" @click="clickDownload_i()">
      </div>

      <!--<div style="position:absolute; z-index:20; left:0%; top:52% ">-->

        <!--<img src="/static/img/bg2.png" width="100%">-->
        　
        <div v-bind:style="fontStyle">
          <font size="3" color="white">请关注官方公众号</font>
        </div>
        　　
        <div v-bind:style="imagestyle">
          <img src="../../static/img/qr.jpg" :width="172" :height="172">
        </div>

      <!--</div>-->

    </div>





    <div id="cover" class="popContainer" v-show="coverShow" @click="closeCover()">
    </div>

    <div id="guide" class="guideStyle" v-show="coverShow" @click="closeCover()">
      <img src="/static/img/fx_z2.png" width="100%" height="100%">
    </div>

  </div>
</template>


<script>
  import {getAgentInfo,getDownloadUrl} from '@/api/api'
  import {Toast} from 'mint-ui';

  export default {
    name: 'test',
    data() {
      return {

        imagex: this.computeIndex(),
        coverShow : true,
        imagestyle: {
          position: 'absolute',
          'z-index': 11,
          left: this.imagex,
          top: '340px'
        },
        fontStyle: {
          position: 'absolute',
          'z-index': 12,
          left: (this.getWidth() / 2 - 60) + 'px',
          top: '310px'
        },
        download_android:'',
        download_ios:''
      }
    },

//    mounted(){
//      let url = window.location.href.split('#')[0]
//      jsapiparam(url).then(response => {
//        console.log(response)
//        wx.config({
//          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//          appId: response.appId, // 必填，公众号的唯一标识
//          timestamp: response.timestamp, // 必填，生成签名的时间戳
//          nonceStr: response.nonceStr, // 必填，生成签名的随机串
//          signature: response.signature,// 必填，签名，见附录1
//          jsApiList: [
//            'checkJsApi',
//            'onMenuShareTimeline',
//            'onMenuShareAppMessage',
//            'onMenuShareQQ',
//            'onMenuShareWeibo',
//          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//        });
//
//
//        wx.ready(function () {
//          //分享到朋友圈"
//          wx.onMenuShareTimeline({
//            title: "快和我玩董小姐棋牌",
//            link: window.location.href, // 分享链接
//            imgUrl: "https://mmbiz.qpic.cn/mmbiz_png/wj1STzkg04h46BuribmuoJnsMQgc2m70558p3mE91j6zq4sph6RavCicfUiahTSRj4CVRSRN9ecdJKic6ysZeBCZiag/0?wx_fmt=png", // 分享图标
//            success: function () {
//              // console.log('分享到朋友圈成功')
//            },
//            cancel: function () {
//              // console.log('分享到朋友圈失败')
//            }
//          });
//          //分享给朋友
//          wx.onMenuShareAppMessage({
//            title: "快和我玩董小姐棋牌", // 分享标题
//            desc: "我玩了很久了,值得推荐给你,一起来玩吧", // 分享描述
//            link: window.location.href, // 分享链接
//            imgUrl: "https://mmbiz.qpic.cn/mmbiz_png/wj1STzkg04h46BuribmuoJnsMQgc2m70558p3mE91j6zq4sph6RavCicfUiahTSRj4CVRSRN9ecdJKic6ysZeBCZiag/0?wx_fmt=png", // 分享图标
//            success: function () {
//              // console.log('分享到朋友成功')
//            },
//            cancel: function () {
//              // console.log('分享到朋友失败')
//            }
//          });
//
//        })
//
//      })
//    },
    created(){
//      let sid = this.$route.query.sid;
//      let id = this.$route.query.id;
//      let infoKey = 'info' + sid
//      let qrKey = sid + '|qr'
//      let info = getCookie(infoKey)

      //去授权
//      if (!info) {
//        console.log("授权----------------")
//        let state = id
//        let url = 'http://dongxiaojieqipai.com/game/wechat/authorize_base?returnUrl=' + id
//        //跳转
//        window.top.location.href = url
//      } else {
//        //加载
//        info = decodeURIComponent(info);
//        var d = JSON.parse(info);
//
//
//        this.icon = d.icon;
//
//        this.qr = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + d.qr;
//        console.log(info)
//      }


      getDownloadUrl().then(response=>{
          console.log(response)
        this.download_android = response.android
        this.download_ios = response.ios
      })


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
      clickDownload_a(){
          console.log(this.download_android)
        window.location.href = this.download_android
      },
      clickDownload_i(){
        window.location.href = this.download_ios
      },
      closeCover(){
        this.coverShow = false;
      },
      imageClick(){
          return false;
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
    /*-webkit-user-select: none;*/
    /*-moz-user-select: none;*/
    /*-ms-user-select: none;*/
    /*user-select: none;*/
  }
  /*body img*/
  /*{*/
    /*-webkit-user-select: none;*/
    /*-moz-user-select: none;*/
    /*-ms-user-select: none;*/
    /*user-select: none;*/
  /*}*/

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
