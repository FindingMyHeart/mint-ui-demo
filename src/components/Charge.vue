<template>
  <div class="index">
    <!--<mt-header fixed title="充值大厅"></mt-header>-->


    <div class="page-content">


      <mt-cell
        title="选择游戏"
        to="/Order"
        is-link
        value="fff">
        <span style="font-size:20px;text-align:center;margin-right:150px"></span>
      </mt-cell>

    </div>

    <br/>
    <div class="page-content">


      <mt-cell title="个人信息"></mt-cell>


      <mt-cell title="昵称">
        <span style="color: gray;font-size:20px;text-align:right;margin-left:-230px">{{this.agentName}}</span>
      </mt-cell>

      <mt-cell title="id">
        <span style="color: gray;font-size:20px;text-align:left;margin-left:-230px">{{this.agentId}}</span>
      </mt-cell>

      <mt-cell title="余额">
        <span style="color: gray;font-size:20px;text-align:left;margin-left:-230px">{{this.money}}</span>
      </mt-cell>


    </div>

    <br/>

    <div class="page-content">

      <mt-cell title="充值金币"></mt-cell>

    </div>
    <br/>

    <div class="page-content">

      <img :src="url" width="150" height="100" @click="clickButton(1)">
      &nbsp; &nbsp;
      <img :src="url" width="150" height="100" @click="clickButton(1)">

      <br/>
      <img :src="url" width="150" height="100" @click="clickButton(1)">
      &nbsp; &nbsp;
      <img :src="url" width="150" height="100" @click="clickButton(1)">

    </div>



    <div>
    <!--<span style="font-family:'Microsoft YaHei';font-size:18px;">-->
      <!--<div style="position:relative;">-->
    <!--　  <img :src="url" width="150" height="100" @click="clickButton(1)">-->
    <!--　　<div style="position:absolute; z-index:2; left:10px; top:10px">-->
         <!--&lt;!&ndash;<img :src="url" width="50" height="50">&ndash;&gt;-->
        <!--添加文字-->
        <!--</div>-->
      <!--</div>-->
    <!--</span>-->

      <div style="position:relative;">
        　　 <img :src="url" width="150" height="100" @click="clickButton(1)">
        　　<div style="position:absolute; z-index:2; left:10px; top:10px">
        　　　　haha
        　　</div>
      </div>
      <div style="position:relative;">
        　　 <img :src="url" width="150" height="100" @click="clickButton(1)">
        　　<div style="position:absolute; z-index:2; left:10px; top:10px">
        　　　　haha
        　　</div>
      </div>

    </div>
    <!--</div>-->
  </div>


</template>


<script>
  import {getAgentInfo} from '@/api/api'
  import {Toast} from 'mint-ui';
  export default {
    name: 'index',
    data() {
      return {
        agentId: 100012,
        agentName: "哈哈啦啦",
        money: 100,
        url: "../../static/img/charge.png"

      }
    },
    created() {

//      Toast('邀请码是:'+ this.agentId);
      //获得信息

//      getAgentInfo().then(response => {
//        this.money = response.money
//        this.agentId = response.agentId
//        this.charge = response.charge
//
//      })
    },
    methods: {
      toDetail() {
        this.$router.push('/detail')
      },
      clickButton(index){
        console.log("=============" + index)
        this.url = "../../static/img/callme.png"
      }
    }
  }
</script>
