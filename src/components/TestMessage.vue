<template>
  <div>


    <mt-field label="用户" placeholder="请输入用户名" v-model="account"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
    <mt-field label="roomId" placeholder="请输入密码" v-model="roomId"></mt-field>
    <mt-field label="x" placeholder="x" v-model="x"></mt-field>
    <mt-field label="y" placeholder="y" v-model="y"></mt-field>
    <mt-field label="message" placeholder="message" type="textarea" rows="7" v-model="message"></mt-field>
    <mt-field label="returnMessage" placeholder="returnMessage" type="textarea" rows="7"
              v-model="returnMessage"></mt-field>
    <mt-button type="primary" @click.native="handleClick">发送消息</mt-button>
    <!--<mt-button type="primary" @click.native="joinGoldRoom">joinHSRoom</mt-button>-->
    <mt-button type="primary" @click.native="getReady">getReady</mt-button>
    <mt-button type="primary" @click.native="dissolveRoom">dissolveRoom</mt-button>
    <!--<mt-button type="primary" @click.native="joinYSZRoom">joinYSZRoom</mt-button>-->
    <mt-button type="primary" @click.native="quitRoom">quitRoom</mt-button>
    <!--<mt-button type="primary" @click.native="createWzq">createWzq</mt-button>-->
    <mt-button type="primary" @click.native="joinRoom">joinRoom</mt-button>
    <!--<mt-button type="primary" @click.native="wzqMove">wzqMove</mt-button>-->
    <mt-button type="primary" @click.native="createPaijiu">createPaijiu</mt-button>
    <mt-button type="primary" @click.native="tobeBanker">tobeBanker</mt-button>

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
        roomId: "",
        x: '',
        y: ''

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
      joinGoldRoom(){
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
      createWzq(){
        this.message = `{"service":"pokerRoomService","method":"createWZQRoom","params":{"userId":"1","roomType":"3","gameType":"235","gameNumber":"1","personNumber":"2"}}`
        this.sendMessage()
      },
      joinRoom(){
        this.message = `{"service":"roomService","method":"joinRoom","params":{"userId":"1","roomId":"` + this.roomId + `"}}`
        this.sendMessage()
      },
      wzqMove(){
        this.message = `{"service":"gameService","method":"move","params":{"x":"` + this.x + `","y":"` + this.y + `"}}`
        this.sendMessage()
      },
      createPaijiu(){
        this.message = `{"service":"pokerRoomService","method":"createPaijiuCrazyRoom","params":{"userId":"1","roomType":"1","gameType":"411","gameNumber":"12","robotType":"1","isAA":"false","robotNum":"5","robotWinner":"3","isReOpen":"false","otherMode":"3"}}`
        this.sendMessage()
      },
      tobeBanker(){
        this.message = `{"service":"pokerRoomService","method":"paijiuTobeBanker","params":{"userId":"1","roomId":"`+this.roomId+`","score":"50"}}`
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
