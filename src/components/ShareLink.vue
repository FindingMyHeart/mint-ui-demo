<template>
  <div>

    <div>
      <img :src="icon" :width="300" :height="200" >
    </div>

    <div>
      <img :src="qr" :width="300" :height="200" >
    </div>


  </div>
</template>

<script>
  import {wxAuth, auth, jsapiparam} from '@/api/api'
  import {getCookie} from '@/utils/util'


  import wx from 'weixin-js-sdk'

  export default {
    name: 'test',
    data() {
      return {
        icon: "",
        qr: ""
      }
    },

    mounted(){
      let url = window.location.href.split('#')[0]
      jsapiparam(url).then(response => {
        console.log(response)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
          //分享到朋友圈"
          wx.onMenuShareTimeline({
            title: "快和我玩划水麻将",
            link: obj.link, // 分享链接
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
            title: "快和我玩划水麻将", // 分享标题
            desc: "我玩了很久了,值得推荐给你,一起来玩吧", // 分享描述
            link: obj.link, // 分享链接
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
    },
    created(){
      let sid = this.$route.query.sid;
      let id = this.$route.query.id;
      let infoKey = 'info' + sid
      let qrKey = sid + '|qr'
      let info = getCookie(infoKey)

      //去授权
      if (!info) {
        console.log("授权----------------")
        let state = id
        let url = 'http://dongxiaojieqipai.com/game/wechat/authorize_base?returnUrl=' + id
        //跳转
        window.top.location.href = url
      } else {
        //加载
        info = decodeURIComponent(info);
        var d = JSON.parse(info);


        this.icon = d.icon;
        this.qr = d.qr;
        console.log(info)
      }
    },
    methods: {}
  }
</script>
