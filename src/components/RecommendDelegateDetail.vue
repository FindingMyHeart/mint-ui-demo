<template>
  <div class="top">
    <mt-header title="推荐代理">
      <router-link to="/recommendDelegate" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link  to="/" slot="right">
        <mt-button >首页</mt-button>
      </router-link>
    </mt-header>
    <br>
    <br>
    <div class="container">
      <mt-field label="用户ID" placeholder="请输入用户ID" v-model="username"></mt-field>
      <br>
      <br>
      <mt-button size="large" type="primary" @click="searchUser">查  询</mt-button>
      <br>
      <br>
      <div style="text-align: left">
        <mt-cell
          title="">
          <span>1231111111</span>
          <img slot="icon" src="../assets/logo.png" width="24" height="24">
          <div style=" width: 150px; text-align: right">
            <mt-button size="small" type="primary" @click="recommandClick">推 荐</mt-button>
          </div>

        </mt-cell>
      </div>
    </div>
    <br>


  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
      methods: {
        searchUser() {

          this.$axios.get('getlunbo',{
            params:{
              id:'123'
            },
            baseURL:'http://www.baidu.com'
          })
            .then(res=>{
              this.data = res.data.message;
              Toast("2")
            })
            .catch(err=>{
              console.log(err);
            })

          return
          var ret = false



          if (isNaN(this.username)) {
            ret = false;
          }else {
            ret = true;
          }
          Toast("2")
          if (this.username.length == 0){
            ret = false;
          }
          Toast("3")
          if (ret){
          } else {
            Toast("请输入正确的用户ID")
          }
          Toast("4")
          //查询用户ID

        },
        recommandClick(){
          Toast("推荐")
        }
      },

    }
</script>

<style scoped>
  .top{
    top: 50px;
    width: 100%;
    /*background-color: #2c3e50;*/
    text-align: center;
    background-color: #acacb4;
    height: 700px;
  }
  .container{
    margin: 10px;
    background-color: #acacb4;
    margin-left: 10px;
    padding-left: 10px;

  }

  .abc{
    text-align: center;
    width: 90%;
  }

</style>
