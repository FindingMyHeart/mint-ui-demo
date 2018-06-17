<template>
  <div>


    <mt-field label="用户" placeholder="请输入用户名" v-model="account"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
    <mt-field label="roomId" placeholder="请输入密码" v-model="roomId"></mt-field>
    <mt-field label="message" placeholder="message" type="textarea" rows="7" v-model="message"></mt-field>
    <mt-field label="returnMessage" placeholder="returnMessage" type="textarea" rows="7"
              v-model="returnMessage"></mt-field>
    <mt-button type="primary" @click.native="handleClick">发送消息</mt-button>
    <mt-button type="primary" @click.native="joinRoom">joinHSRoom</mt-button>
    <mt-button type="primary" @click.native="getReady">getReady</mt-button>
    <mt-button type="primary" @click.native="dissolveRoom">dissolveRoom</mt-button>
    <mt-button type="primary" @click.native="joinYSZRoom">joinYSZRoom</mt-button>
    <mt-button type="primary" @click.native="quitRoom">quitRoom</mt-button>

    <!--</div>-->
  </div>


</template>

<script>
  import MtButton from "../../node_modules/mint-ui/packages/button/src/button";
  import VueResource from 'vue-resource'


  export default {
    components: {MtButton},
    name: 'index',
    data() {
      return {
        account: '',
        password: '',
        message: '',
        returnMessage: '',
        roomId:""

      }
    },
    created() {


    },
    methods: {

      handleClick(){
        this.sendMessage()
      },
      getReady(){
        this.message = `{"service":"roomService","method":"getReady","params":{"userId":"1"}}`
        this.sendMessage()
      },
      joinRoom(){
        this.message = `{"service":"mahjongRoomService","method":"joinGoldRoom","params":{"userId":"1","roomType":"1","gameType":"HS","goldRoomType":"100"}}`
        this.sendMessage()
      },

      joinYSZRoom(){
        this.message = `{"service":"pokerRoomService","method":"joinGoldRoom","params":{"userId":"1","roomType":"1","gameType":"285","goldRoomType":"100"}}`
        this.sendMessage()
      },
      dissolveRoom(){
        this.message = `{"service":"roomService","method":"dissolveRoom","params":{"userId":"1"}}`
        this.sendMessage()
      },
      quitRoom(){
        this.message = `{"service":"roomService","method":"quitRoom","params":{"userId":"1"}}`
        this.sendMessage()
      },
      sendMessage(){

//        this.$http.post('http://127.0.0.1:8000/robot/sendMessage')


        var m = encodeURI(this.message);
        let url = 'http://127.0.0.1:8000/robot/sendMessage?account=' + this.account + '&password=' + this.password + '&message=' + m;
        console.log(url)
        this.$http.get(url, {
//          account: this.account,
//          password: this.password,
//          message: this.message
        }).then(function (response) {
          console.log(response.data)
          this.returnMessage = JSON.stringify(response.data)
        })
      }

    }
  }
</script>
