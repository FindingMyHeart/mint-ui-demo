<template>
    <div>
      <mt-header title="消息">
        <router-link to="/becomeDelegate" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <router-link to="/" slot="right">
          <mt-button >主页</mt-button>
        </router-link>
      </mt-header>

      <br>
      <div style="text-align: center">
        <span>请联系您的介绍人授权，或者联系客服咨询</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
