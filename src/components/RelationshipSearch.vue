<template>
    <div>
      <mt-header title="选择授权">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <!--<mt-button @click="handleClose">close</mt-button>-->
        </router-link>

        <router-link to="/" slot="right">
          <mt-button>主页</mt-button>
        </router-link>
      </mt-header>
      <mt-cell v-for="n in 1" :title="'董小姐棋牌室'" to="/delegateList" is-link/>
    </div>
</template>

<script>
    export default {
      name: "",
      data(){
        return {
          list:[1, 2, 3]
        }
      },
      methods: {
        getLevel2List() {
          fetchLevel2Delegate().then(response => {
            // this.list = response.data.items
            // this.total = response.data.total
            // this.listLoading = false
            // this.tableData = response.data.tableData
            // this.totalPage = response.data.totalPage
            // this.listLoading = false
          })
        },
        getPlayerList() {
          fetchPlayers().then(response => {
            // this.list = response.data.items
            // this.total = response.data.total
            // this.listLoading = false
            // this.tableData = response.data.tableData
            // this.totalPage = response.data.totalPage
            // this.listLoading = false
          })
        },
      }
    }
</script>

<style scoped>

</style>
