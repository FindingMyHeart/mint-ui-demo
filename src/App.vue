/* eslint-disable */
<template>
  <div>
    <!--<mt-header title="vue后台管理系统">-->
      <!--<router-link to="/" slot="left">-->
      <!--</router-link>-->
    <!--</mt-header>-->
    <router-view></router-view>
  </div>
</template>

<script>
  /* eslint-disable */
  import { Toast } from 'mint-ui'

export default {
  name: 'App',
  data () {
    return {
      text: '123',
      value: true
    }
  },
  methods: {
    handleClose () {
      Toast('Upload Complete')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
